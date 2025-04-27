"use client"

import type React from "react"

import { useState, Suspense } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, BookOpen, Briefcase, Calendar, Home, MessageSquare, Search, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

function DashboardContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [notifications, setNotifications] = useState(3)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  // In a real app, this would come from authentication
  const user = {
    name: "Jane Cooper",
    email: "jane@example.com",
    image: "/placeholder.svg?height=40&width=40&text=JC",
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  const handleNotificationClick = () => {
    setNotifications(0)
  }

  const handleLogout = () => {
    router.push("/")
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
  }

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-sidebar border-r border-sidebar-border transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"}`}
      >
        <div className="flex h-16 items-center border-b border-sidebar-border px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
              <span className="font-bold">E</span>
            </div>
            {isSidebarOpen && <span className="text-xl font-bold">EquiLink</span>}
          </div>
        </div>

        {isSidebarOpen && (
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
        )}

        <div className="px-2 py-4">
          <nav className="space-y-1">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${pathname === "/dashboard" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50"}`}
            >
              <Home className="h-4 w-4" />
              {isSidebarOpen && <span>Dashboard</span>}
            </Link>

            <Link
              href="/dashboard/opportunities"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${pathname === "/dashboard/opportunities" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50"}`}
            >
              <Briefcase className="h-4 w-4" />
              {isSidebarOpen && <span>Opportunities</span>}
            </Link>

            <Link
              href="/dashboard/mentorship"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${pathname === "/dashboard/mentorship" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50"}`}
            >
              <Users className="h-4 w-4" />
              {isSidebarOpen && <span>Mentorship</span>}
            </Link>

            <Link
              href="/dashboard/learning"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${pathname === "/dashboard/learning" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50"}`}
            >
              <BookOpen className="h-4 w-4" />
              {isSidebarOpen && <span>Learning Hub</span>}
            </Link>

            <Link
              href="/dashboard/community"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${pathname === "/dashboard/community" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50"}`}
            >
              <MessageSquare className="h-4 w-4" />
              {isSidebarOpen && <span>Community</span>}
            </Link>

            <Link
              href="/dashboard/events"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${pathname === "/dashboard/events" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50"}`}
            >
              <Calendar className="h-4 w-4" />
              {isSidebarOpen && <span>Events</span>}
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t border-sidebar-border">
            <h3 className={`px-3 text-xs font-medium text-sidebar-foreground/60 ${!isSidebarOpen && "sr-only"}`}>
              Support
            </h3>
            <nav className="mt-2 space-y-1">
              <Link
                href="/dashboard/report"
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${pathname === "/dashboard/report" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50"}`}
              >
                <Shield className="h-4 w-4" />
                {isSidebarOpen && <span>Anonymous Reporting</span>}
              </Link>
            </nav>
          </div>
        </div>

        <div className="absolute bottom-0 w-full border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>
            {isSidebarOpen && (
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <p className="text-xs text-sidebar-foreground/60 truncate">{user.email}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="border-b">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <span className="sr-only">Toggle sidebar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <line x1="9" x2="9" y1="3" y2="21" />
                </svg>
              </Button>
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
      </div>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<div className="p-6">Loading dashboard...</div>}>
      <DashboardContent>{children}</DashboardContent>
    </Suspense>
  )
}
