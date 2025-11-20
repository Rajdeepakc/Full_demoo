import { LayoutDashboard, AppWindow, Users, BarChart3, Settings, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar-simple'

const navItems = [
  { title: 'Dashboard', icon: LayoutDashboard, route: '/' },
  { title: 'Applications', icon: AppWindow, route: '/applications' },
  // The following items are placeholders and intentionally disabled until implemented
  { title: 'Tenants', icon: Users, route: '/tenants',},
  { title: 'FinOps', icon: BarChart3, route: '/finops'},
  { title: 'Settings', icon: Settings, route: '/settings'},
]

function AppSidebar({ mobileOpen = false, onClose = () => {} }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      {/* Desktop sidebar */}
      <Sidebar className="hidden lg:flex !bg-slate-950 !border-white/5">
        <SidebarHeader className="px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-lg font-semibold text-white">
              OE
            </div>
            <div>
              <p className="text-base font-semibold text-white">OneElastic</p>
              <p className="text-xs text-slate-400">Workspace</p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-3">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.route
                  const isDisabled = !!item.disabled
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        isActive={isActive}
                        onClick={() => {
                          if (!isDisabled) navigate(item.route)
                        }}
                        disabled={isDisabled}
                        aria-disabled={isDisabled}
                        className={
                          isDisabled
                            ? '!text-slate-600 cursor-not-allowed opacity-60'
                            : isActive
                            ? '!bg-blue-500/20 !text-white'
                            : '!text-slate-400 hover:!bg-white/5 hover:!text-slate-100'
                        }
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Mobile sidebar drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={onClose} />

          <div className="fixed left-0 top-0 z-50 h-full w-72">
            <Sidebar mobile className="!bg-slate-950 !border-white/5">
              <SidebarHeader className="px-6 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-lg font-semibold text-white">
                      OE
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">OneElastic</p>
                      <p className="text-xs text-slate-400">Workspace</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-transparent text-slate-300 hover:bg-white/5"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </SidebarHeader>

              <SidebarContent className="px-3">
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {navItems.map((item) => {
                        const Icon = item.icon
                        const isActive = location.pathname === item.route
                        const isDisabled = !!item.disabled
                        return (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                              isActive={isActive}
                              onClick={() => {
                                if (!isDisabled) {
                                  navigate(item.route)
                                  onClose()
                                }
                              }}
                              disabled={isDisabled}
                              aria-disabled={isDisabled}
                              className={
                                isDisabled
                                  ? '!text-slate-600 cursor-not-allowed opacity-60'
                                  : isActive
                                  ? '!bg-blue-500/20 !text-white'
                                  : '!text-slate-400 hover:!bg-white/5 hover:!text-slate-100'
                              }
                            >
                              <Icon className="h-5 w-5" />
                              <span>{item.title}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
          </div>
        </div>
      )}
    </>
  )
}

export default AppSidebar

