import { AdminSidebarMerged } from './admin-sidebar-merged'

// MERGED SIDEBAR: All sections with working pages marked (✅ = functional, 🔨 = placeholder)
export function AdminSidebar(currentPath: string = '/admin') {
  return AdminSidebarMerged(currentPath);
}
