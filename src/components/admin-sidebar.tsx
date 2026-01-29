import { AdminSidebarAdvanced } from './admin-sidebar-advanced'

// Legacy wrapper for backward compatibility
export function AdminSidebar(currentPath: string = '/admin') {
  return AdminSidebarAdvanced(currentPath);
}
