import * as React from "react"
import { cn } from "@/lib/utils"

export function Sidebar({ children, className, ...props }) {
  return (
    <aside
      className={cn(
        "flex h-screen w-72 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground",
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}

export function SidebarHeader({ children, className, ...props }) {
  return (
    <div
      className={cn("flex h-16 items-center gap-2 border-b border-sidebar-border px-6", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarContent({ children, className, ...props }) {
  return (
    <div className={cn("flex-1 overflow-y-auto px-3 py-4", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarFooter({ children, className, ...props }) {
  return (
    <div className={cn("mt-auto border-t border-sidebar-border p-4", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroup({ children, className, ...props }) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroupLabel({ children, className, ...props }) {
  return (
    <div
      className={cn("px-2 py-1.5 text-xs font-semibold text-sidebar-foreground/70", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarGroupContent({ children, className, ...props }) {
  return (
    <div className={cn("space-y-0.5", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarMenu({ children, className, ...props }) {
  return (
    <ul className={cn("space-y-1", className)} {...props}>
      {children}
    </ul>
  )
}

export function SidebarMenuItem({ children, className, ...props }) {
  return (
    <li className={cn("", className)} {...props}>
      {children}
    </li>
  )
}

export function SidebarMenuButton({ children, className, isActive = false, ...props }) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

