/**
 * React Performance Utilities
 * Helper functions for React optimization
 */

/**
 * Generate unique stable keys for array items
 * Use when items don't have natural IDs
 */
export function generateKey(prefix: string, index: number, item?: any): string {
  if (item && typeof item === 'object') {
    // Try common ID fields
    if ('id' in item && item.id) return `${prefix}-${item.id}`
    if ('_id' in item && item._id) return `${prefix}-${item._id}`
    if ('key' in item && item.key) return `${prefix}-${item.key}`
    
    // Try to generate from content
    if ('name' in item) return `${prefix}-${item.name}-${index}`
    if ('title' in item) return `${prefix}-${item.title}-${index}`
  }
  
  // Fallback to index (not ideal but better than nothing)
  return `${prefix}-${index}`
}

/**
 * Safe map with automatic key generation
 * Example: safeMap(items, (item, i) => <div>...</div>, 'product')
 */
export function safeMap<T>(
  array: T[],
  callback: (item: T, index: number) => any,
  keyPrefix: string = 'item'
): any[] {
  if (!Array.isArray(array)) {
    console.warn('safeMap: input is not an array', array)
    return []
  }

  return array.map((item, index) => {
    const key = generateKey(keyPrefix, index, item)
    const element = callback(item, index)
    
    // If element is a React element and doesn't have a key, add it
    if (element && typeof element === 'object' && element.type) {
      return { ...element, key }
    }
    
    return element
  })
}

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function for performance
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Memoize expensive computations
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  keyGenerator?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = func(...args)
    cache.set(key, result)

    // Limit cache size to prevent memory leaks
    if (cache.size > 1000) {
      const firstKey = cache.keys().next().value
      cache.delete(firstKey)
    }

    return result
  }) as T
}

/**
 * Lazy load component with error boundary
 */
export function lazyWithRetry(
  componentImport: () => Promise<any>,
  name: string = 'Component'
): any {
  return new Promise((resolve, reject) => {
    const maxRetries = 3
    let retries = 0

    const attemptLoad = () => {
      componentImport()
        .then(resolve)
        .catch((error) => {
          retries++
          if (retries < maxRetries) {
            console.warn(`Retry loading ${name} (${retries}/${maxRetries})`)
            setTimeout(attemptLoad, 1000 * retries)
          } else {
            console.error(`Failed to load ${name} after ${maxRetries} attempts`)
            reject(error)
          }
        })
    }

    attemptLoad()
  })
}

/**
 * Create cleanup tracker for event listeners
 */
export class CleanupTracker {
  private cleanups: Array<() => void> = []

  addEventListener(
    element: Element | Window | Document,
    event: string,
    handler: EventListener,
    options?: AddEventListenerOptions
  ): void {
    element.addEventListener(event, handler, options)
    this.cleanups.push(() => element.removeEventListener(event, handler, options))
  }

  setInterval(callback: () => void, ms: number): void {
    const id = setInterval(callback, ms)
    this.cleanups.push(() => clearInterval(id))
  }

  setTimeout(callback: () => void, ms: number): void {
    const id = setTimeout(callback, ms)
    this.cleanups.push(() => clearTimeout(id))
  }

  add(cleanup: () => void): void {
    this.cleanups.push(cleanup)
  }

  cleanup(): void {
    this.cleanups.forEach((cleanup) => {
      try {
        cleanup()
      } catch (error) {
        console.error('Cleanup error:', error)
      }
    })
    this.cleanups = []
  }
}

/**
 * Performance monitor for components
 */
export class PerformanceMonitor {
  private marks: Map<string, number> = new Map()

  start(label: string): void {
    this.marks.set(label, Date.now())
  }

  end(label: string, logThreshold: number = 100): number {
    const start = this.marks.get(label)
    if (!start) {
      console.warn(`No start mark found for: ${label}`)
      return 0
    }

    const duration = Date.now() - start
    this.marks.delete(label)

    if (duration > logThreshold) {
      console.warn(`Slow operation: ${label} took ${duration}ms`)
    }

    return duration
  }

  measure(label: string, fn: () => any): any {
    this.start(label)
    const result = fn()
    this.end(label)
    return result
  }

  async measureAsync(label: string, fn: () => Promise<any>): Promise<any> {
    this.start(label)
    const result = await fn()
    this.end(label)
    return result
  }
}

/**
 * Virtual scroll helper for large lists
 */
export function calculateVisibleRange(
  scrollTop: number,
  containerHeight: number,
  itemHeight: number,
  totalItems: number,
  overscan: number = 3
): { start: number; end: number } {
  const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const visibleCount = Math.ceil(containerHeight / itemHeight)
  const end = Math.min(totalItems, start + visibleCount + overscan * 2)

  return { start, end }
}

/**
 * Batch updates helper
 */
export class BatchProcessor<T> {
  private queue: T[] = []
  private processing = false

  constructor(
    private processor: (items: T[]) => Promise<void>,
    private batchSize: number = 50,
    private delayMs: number = 100
  ) {}

  add(item: T): void {
    this.queue.push(item)
    this.scheduleProcess()
  }

  addMany(items: T[]): void {
    this.queue.push(...items)
    this.scheduleProcess()
  }

  private scheduleProcess(): void {
    if (this.processing) return

    setTimeout(() => this.process(), this.delayMs)
  }

  private async process(): Promise<void> {
    if (this.processing || this.queue.length === 0) return

    this.processing = true

    try {
      while (this.queue.length > 0) {
        const batch = this.queue.splice(0, this.batchSize)
        await this.processor(batch)
      }
    } catch (error) {
      console.error('Batch processing error:', error)
    } finally {
      this.processing = false
    }
  }

  async flush(): Promise<void> {
    await this.process()
  }
}
