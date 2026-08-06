import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "./ui/sidebar";

import { Files, LayoutDashboard, Library, LockKeyhole, ScanSearch, ShieldCheck } from "lucide-react";
import ContextualTopBar from "./ContextualTopBar";

const navItems = [
  { label: "Dashboard", route: "/dashboard", icon: LayoutDashboard },
  { label: "Case Pipeline", route: "/cases", icon: Files },
  { label: "Knowledge Library", route: "/knowledge-base", icon: Library },
  { label: "Oversight & Evaluation", route: "/operator", icon: ScanSearch },
  { label: "Administration", route: "/admin", icon: ShieldCheck },
];

export default function Layout() {
  const location = useLocation();

  return (
    <SidebarProvider>
      <Sidebar className="border-r border-sidebar-border bg-card">
        <SidebarHeader className="border-b border-sidebar-border p-4">
          <NavLink to="/dashboard" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-semibold">PEBC - Program Review</span>
              <span className="block text-xs text-muted-foreground">Codalio Living</span>
            </span>
          </NavLink>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarMenu>
              {navItems.map(({ label, route, icon: Icon }) => (
                <SidebarMenuItem key={route}>
                  <SidebarMenuButton asChild isActive={location.pathname === route}>
                    <NavLink to={route}>
                      <Icon />
                      <span>{label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border p-4">
          <div className="rounded-lg bg-sidebar-accent p-3 text-sidebar-accent-foreground">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <LockKeyhole className="h-4 w-4" />
              Secure tenant
            </div>
            <p className="mt-1 text-xs opacity-80">Canada Central · isolated schema</p>
            <Badge variant="outline" className="mt-2 text-[10px]">
              Immutable logging active
            </Badge>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-w-0 bg-background text-foreground">
        <ContextualTopBar />
        <main className="min-w-0 flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}