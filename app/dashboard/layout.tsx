"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  Home,
  LogOut,
  MessageSquare,
  Search,
  Settings,
  Shield,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()
  const [notifications, setNotifications] = useState(3)
  const [searchQuery, setSearchQuery] = useState("")

  // Protect dashboard routes
  useEffect(() => {
    if (!user && typeof window !== "undefined") {
      router.push("/login")
    }
  }, [user, router])

  // If no user, show nothing while redirecting
  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  const handleNotificationClick = () => {
    // Mark notifications as read
    setNotifications(0)
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar variant="inset" collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                <span className="font-bold">E</span>
              </div>
              <span className="text-xl font-bold">EquiLink</span>
            </div>
            <div className="px-2 pt-2">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard"} tooltip="Dashboard">
                      <Link href="/dashboard">
                        <Home className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/dashboard/opportunities"}
                      tooltip="Opportunities"
                    >
                      <Link href="/dashboard/opportunities">
                        <Briefcase className="h-4 w-4" />
                        <span>Opportunities</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/mentorship"} tooltip="Mentorship">
                      <Link href="/dashboard/mentorship">
                        <Users className="h-4 w-4" />
                        <span>Mentorship</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/learning"} tooltip="Learning Hub">
                      <Link href="/dashboard/learning">
                        <BookOpen className="h-4 w-4" />
                        <span>Learning Hub</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/community"} tooltip="Community">
                      <Link href="/dashboard/community">
                        <MessageSquare className="h-4 w-4" />
                        <span>Community</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/events"} tooltip="Events">
                      <Link href="/dashboard/events">
                        <Calendar className="h-4 w-4" />
                        <span>Events</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Support</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/dashboard/report"}
                      tooltip="Anonymous Reporting"
                    >
                      <Link href="/dashboard/report">
                        <Shield className="h-4 w-4" />
                        <span>Anonymous Reporting</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/settings"} tooltip="Settings">
                  <Link href="/dashboard/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Log out" onClick={handleLogout}>
                  <button>
                    <LogOut className="h-4 w-4" />
                    <span>Log out</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="border-b">
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold">
                  {pathname === "/dashboard" && "Dashboard"}
                  {pathname === "/dashboard/opportunities" && "Opportunities"}
                  {pathname === "/dashboard/mentorship" && "Mentorship"}
                  {pathname === "/dashboard/learning" && "Learning Hub"}
                  {pathname === "/dashboard/community" && "Community"}
                  {pathname === "/dashboard/events" && "Events"}
                  {pathname === "/dashboard/report" && "Anonymous Reporting"}
                  {pathname === "/dashboard/settings" && "Settings"}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="relative" onClick={handleNotificationClick}>
                      <Bell className="h-4 w-4" />
                      {notifications > 0 && (
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs text-white">
                          {notifications}
                        </span>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <div className="p-4">
                      <h3 className="font-medium mb-1">Notifications</h3>
                      <p className="text-sm text-muted-foreground mb-2">Your recent notifications</p>
                      <div className="space-y-2">
                        <div className="p-2 rounded-md hover:bg-muted">
                          <p className="text-sm font-medium">New mentor match available</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                        <div className="p-2 rounded-md hover:bg-muted">
                          <p className="text-sm font-medium">Job recommendation: UX Designer</p>
                          <p className="text-xs text-muted-foreground">5 hours ago</p>
                        </div>
                        <div className="p-2 rounded-md hover:bg-muted">
                          <p className="text-sm font-medium">New community discussion</p>
                          <p className="text-xs text-muted-foreground">1 day ago</p>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="flex items-center gap-2 p-2">
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/settings">Profile Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
          <main className="p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
