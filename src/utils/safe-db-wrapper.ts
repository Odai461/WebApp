/**
 * Safe Database Query Wrapper
 * Automatically adds error handling, logging, and performance monitoring
 */

export interface QueryOptions {
  maxRetries?: number
  timeout?: number
  logQuery?: boolean
}

export interface QueryResult<T = any> {
  success: boolean
  data?: T[]
  error?: string
  duration?: number
}

/**
 * Execute a safe database query with automatic error handling
 */
export async function safeQuery<T = any>(
  db: D1Database,
  query: string,
  params: any[] = [],
  options: QueryOptions = {}
): Promise<QueryResult<T>> {
  const startTime = Date.now()
  const { maxRetries = 2, timeout = 5000, logQuery = false } = options

  // Validate query safety
  if (!query.includes('LIMIT') && query.includes('SELECT')) {
    console.warn('Query missing LIMIT clause:', query.substring(0, 100))
  }

  if (query.includes('SELECT *')) {
    console.warn('Query using SELECT *:', query.substring(0, 100))
  }

  let lastError: Error | null = null

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      if (logQuery) {
        console.log(`[DB Query] ${query.substring(0, 100)}...`, params)
      }

      const stmt = db.prepare(query)
      const bound = params.length > 0 ? stmt.bind(...params) : stmt
      
      const result = await Promise.race([
        bound.all(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Query timeout')), timeout)
        ),
      ]) as D1Result

      const duration = Date.now() - startTime

      if (duration > 1000) {
        console.warn(`Slow query (${duration}ms):`, query.substring(0, 100))
      }

      return {
        success: true,
        data: result.results as T[],
        duration,
      }
    } catch (error: any) {
      lastError = error
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 100 * (attempt + 1)))
        continue
      }
    }
  }

  return {
    success: false,
    error: lastError?.message || 'Unknown database error',
    duration: Date.now() - startTime,
  }
}

/**
 * Execute multiple queries in a transaction
 */
export async function safeTransaction(
  db: D1Database,
  queries: Array<{ query: string; params?: any[] }>,
  options: QueryOptions = {}
): Promise<QueryResult> {
  const startTime = Date.now()
  const { logQuery = false } = options

  try {
    if (logQuery) {
      console.log(`[DB Transaction] ${queries.length} queries`)
    }

    // Build batch
    const statements = queries.map(({ query, params = [] }) => {
      const stmt = db.prepare(query)
      return params.length > 0 ? stmt.bind(...params) : stmt
    })

    // Execute as batch
    const results = await db.batch(statements)

    return {
      success: true,
      data: results.map((r) => r.results).flat(),
      duration: Date.now() - startTime,
    }
  } catch (error: any) {
    console.error('[DB Transaction Error]', error)
    return {
      success: false,
      error: error.message || 'Transaction failed',
      duration: Date.now() - startTime,
    }
  }
}

/**
 * Execute a query with pagination support
 */
export async function safePaginatedQuery<T = any>(
  db: D1Database,
  baseQuery: string,
  params: any[] = [],
  page: number = 1,
  limit: number = 20
): Promise<QueryResult<T> & { total?: number; pages?: number }> {
  try {
    // Get total count
    const countQuery = baseQuery.replace(
      /SELECT .+ FROM/i,
      'SELECT COUNT(*) as count FROM'
    ).replace(/ORDER BY.+/gi, '')

    const countResult = await safeQuery<{ count: number }>(
      db,
      countQuery,
      params
    )

    const total = countResult.data?.[0]?.count || 0
    const pages = Math.ceil(total / limit)

    // Get paginated data
    const offset = (page - 1) * limit
    const dataQuery = `${baseQuery} LIMIT ${limit} OFFSET ${offset}`
    const dataResult = await safeQuery<T>(db, dataQuery, params)

    return {
      ...dataResult,
      total,
      pages,
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
      total: 0,
      pages: 0,
    }
  }
}

/**
 * Sanitize user input for SQL LIKE queries
 */
export function sanitizeLikeQuery(input: string): string {
  return input.replace(/[%_\\]/g, '\\$&')
}

/**
 * Build safe WHERE clause from filters
 */
export function buildWhereClause(
  filters: Record<string, any>,
  allowedFields: string[]
): { clause: string; params: any[] } {
  const conditions: string[] = []
  const params: any[] = []

  for (const [field, value] of Object.entries(filters)) {
    if (!allowedFields.includes(field)) {
      console.warn(`Filtering on disallowed field: ${field}`)
      continue
    }

    if (value === null || value === undefined) continue

    conditions.push(`${field} = ?`)
    params.push(value)
  }

  const clause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''
  return { clause, params }
}

/**
 * Validate and sanitize ORDER BY clause
 */
export function buildOrderByClause(
  orderBy?: string,
  orderDir: 'ASC' | 'DESC' = 'ASC',
  allowedFields: string[] = []
): string {
  if (!orderBy) return ''

  // Validate field name
  if (allowedFields.length > 0 && !allowedFields.includes(orderBy)) {
    console.warn(`Invalid ORDER BY field: ${orderBy}`)
    return ''
  }

  // Sanitize field name (only allow alphanumeric and underscore)
  const sanitized = orderBy.replace(/[^a-zA-Z0-9_]/g, '')
  return `ORDER BY ${sanitized} ${orderDir}`
}
