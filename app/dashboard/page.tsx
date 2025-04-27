"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Briefcase, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

export default function DashboardPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("recommended")
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const user = {
    name: "Jane Cooper",
    email: "jane@example.com",
    image: "/placeholder.svg?height=40&width=40&text=JC",
  }

  const recommendedMentors = [
    {
      id: "mentor-1",
      name: "Sarah Miller",
      title: "Senior Product Manager",
      company: "TechCorp",
      image: "/placeholder.svg?height=96&width=96&text=SM",
      bio: "Helping women transition into tech leadership roles with 10+ years of experience.",
    },
  ]

  const recommendedJobs = [
    {
      id: "job-1",
      title: "UX Designer",
      company: "Inclusive Tech Co.",
      companyLogo: "/placeholder.svg?height=40&width=40&text=IT",
      location: "San Francisco, CA (Remote)",
      description: "Design user-centered experiences for web and mobile applications in an inclusive environment.",
    },
  ]

  const recommendedCourses = [
    {
      id: "course-1",
      title: "Web Development Fundamentals",
      provider: "Code Academy",
      description: "Learn HTML, CSS, and JavaScript basics for building responsive websites.",
      duration: { weeks: 8 },
    },
  ]

  const recentDiscussions = [
    {
      id: "discussion-1",
      title: "Tips for negotiating salary as a woman in tech?",
      author: {
        name: "Jane Cooper",
        image: "/placeholder.svg?height=40&width=40&text=JC",
      },
      createdAt: new Date("2023-04-10"),
    },
    {
      id: "discussion-2",
      title: "Resources for self-taught developers from underrepresented groups",
      author: {
        name: "Alex Johnson",
        image: "/placeholder.svg?height=40&width=40&text=AJ",
      },
      createdAt: new Date("2023-04-07"),
    },
    {
      id: "discussion-3",
      title: "How to find mentors who understand your unique challenges",
      author: {
        name: "Maria Rodriguez",
        image: "/placeholder.svg?height=40&width=40&text=MR",
      },
      createdAt: new Date("2023-04-04"),
    },
  ]

  useEffect(() => {
    // Simulate API calls to fetch personalized recommendations
    const fetchRecommendations = async () => {
      setIsLoading(true)
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
      } catch (error) {
        console.error("Error fetching recommendations:", error)
        toast({
          title: "Error",
          description: "Failed to load recommendations. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecommendations()
  }, [toast])

  const handleCompleteProfile = () => {
    toast({
      title: "Profile Update",
      description: "Profile completion feature will be available soon!",
    })
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours === 1) return "1 hour ago"
    if (diffInHours < 24) return `${diffInHours} hours ago`
    if (diffInHours < 48) return "Yesterday"
    return `${Math.floor(diffInHours / 24)} days ago`
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back, {user.name.split(" ")[0]}!</h2>
          <p className="text-muted-foreground">Here's what's happening with your EquiLink account today.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleCompleteProfile}>
            Complete Profile
          </Button>
          <Button>Find Opportunities</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mentorship Matches</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 new match this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Opportunities</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+5 new opportunities this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Resources</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+3 new resources this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Next event in 3 days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recommended" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="recommended" className="space-y-4">
          <h3 className="text-lg font-medium">Personalized Recommendations</h3>

          {isLoading ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader className="pb-2">
                    <div className="h-6 bg-muted rounded-md w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded-md w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="h-10 w-10 rounded-full bg-muted"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded-md w-24"></div>
                        <div className="h-3 bg-muted rounded-md w-32"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-purple-600 hover:bg-purple-700">Mentorship</Badge>
                    <span className="text-xs text-muted-foreground">2 days ago</span>
                  </div>
                  <CardTitle className="mt-2 text-lg">Career Transition Guidance</CardTitle>
                  <CardDescription>
                    Connect with Sarah, a tech leader with experience helping women transition to tech careers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 pt-2">
                    <Avatar>
                      <AvatarImage
                        src={recommendedMentors[0]?.image || "/placeholder.svg"}
                        alt={recommendedMentors[0]?.name}
                      />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{recommendedMentors[0]?.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {recommendedMentors[0]?.title} at {recommendedMentors[0]?.company}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/dashboard/mentorship">
                        Connect <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-600 hover:bg-blue-700">Job Opportunity</Badge>
                    <span className="text-xs text-muted-foreground">1 day ago</span>
                  </div>
                  <CardTitle className="mt-2 text-lg">{recommendedJobs[0]?.title}</CardTitle>
                  <CardDescription>
                    {recommendedJobs[0]?.company} is looking for a {recommendedJobs[0]?.title} to join their diverse
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 pt-2">
                    <Avatar>
                      <AvatarImage
                        src={recommendedJobs[0]?.companyLogo || "/placeholder.svg"}
                        alt={recommendedJobs[0]?.company}
                      />
                      <AvatarFallback>IT</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{recommendedJobs[0]?.company}</p>
                      <p className="text-xs text-muted-foreground">{recommendedJobs[0]?.location}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/dashboard/opportunities">
                        View Job <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-600 hover:bg-green-700">Learning</Badge>
                    <span className="text-xs text-muted-foreground">Just added</span>
                  </div>
                  <CardTitle className="mt-2 text-lg">{recommendedCourses[0]?.title}</CardTitle>
                  <CardDescription>{recommendedCourses[0]?.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 pt-2">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40&text=CA"
                        alt={recommendedCourses[0]?.provider}
                      />
                      <AvatarFallback>CA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{recommendedCourses[0]?.provider}</p>
                      <p className="text-xs text-muted-foreground">
                        {recommendedCourses[0]?.duration.weeks}-week online course
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/dashboard/learning">
                        Enroll Now <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="flex justify-center mt-6">
            <Button variant="outline">View All Recommendations</Button>
          </div>
        </TabsContent>

        <TabsContent value="mentors" className="space-y-4">
          <h3 className="text-lg font-medium">Available Mentors</h3>
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Select the "Mentorship" tab to view available mentors.</p>
            <Button asChild>
              <Link href="/dashboard/mentorship">Go to Mentorship</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-4">
          <h3 className="text-lg font-medium">Job Opportunities</h3>
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Select the "Opportunities" tab to view available jobs.</p>
            <Button asChild>
              <Link href="/dashboard/opportunities">Go to Opportunities</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <h3 className="text-lg font-medium">Learning Resources</h3>
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Select the "Learning Hub" tab to view educational resources.</p>
            <Button asChild>
              <Link href="/dashboard/learning">Go to Learning Hub</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="text-lg font-medium mb-4">Community Activity</h3>
        <div className="space-y-4">
          {recentDiscussions.map((discussion) => (
            <div key={discussion.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
              <Avatar>
                <AvatarImage src={discussion.author.image || "/placeholder.svg"} alt={discussion.author.name} />
                <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium">{discussion.author.name}</p>
                <p className="text-sm">{discussion.title}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{formatTimeAgo(discussion.createdAt)}</span>
                  <span>•</span>
                  <Link href="/dashboard/community" className="text-purple-600 hover:underline">
                    View Discussion
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Link href="/dashboard/community">
            <Button variant="outline">
              View All Community Activity <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
