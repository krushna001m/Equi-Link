"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import type { Mentor } from "@/lib/types"
import { mentors, userMentors } from "@/lib/data"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function MentorshipPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("find")
  const [searchQuery, setSearchQuery] = useState("")
  const [industryFilter, setIndustryFilter] = useState("")
  const [expertiseArea, setExpertiseArea] = useState("")
  const [experienceYears, setExperienceYears] = useState("")
  const [availabilityHours, setAvailabilityHours] = useState("")
  const [availableMentors, setAvailableMentors] = useState<Mentor[]>(mentors)
  const [myMentors, setMyMentors] = useState<Mentor[]>(userMentors)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null)
  const [showConnectDialog, setShowConnectDialog] = useState(false)
  const [connectMessage, setConnectMessage] = useState("")

  useEffect(() => {
    // Simulate API call to fetch mentors
    const fetchMentors = async () => {
      setIsLoading(true)
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // For demo purposes, we'll use the mock data
        setAvailableMentors(mentors)
        setMyMentors(userMentors)
      } catch (error) {
        console.error("Error fetching mentors:", error)
        toast({
          title: "Error",
          description: "Failed to load mentors. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchMentors()
  }, [toast])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Filter mentors based on search query
    if (searchQuery) {
      const filtered = mentors.filter(
        (mentor) =>
          mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mentor.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
          mentor.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mentor.company.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setAvailableMentors(filtered)
    } else {
      // If search query is empty, reset to all mentors
      setAvailableMentors(mentors)
    }
  }

  const handleIndustryFilter = (value: string) => {
    setIndustryFilter(value)

    if (value) {
      const filtered = mentors.filter((mentor) => mentor.industry === value)
      setAvailableMentors(filtered)
    } else {
      // If no industry filter, reset to all mentors
      setAvailableMentors(mentors)
    }
  }

  const handleConnect = (mentor: Mentor) => {
    setSelectedMentor(mentor)
    setShowConnectDialog(true)
  }

  const handleSubmitConnect = () => {
    if (!selectedMentor) return

    // Simulate API call to connect with mentor
    toast({
      title: "Connection Request Sent",
      description: `Your request to connect with ${selectedMentor.name} has been sent.`,
    })

    // Add mentor to my mentors list (for demo purposes)
    if (!myMentors.some((m) => m.id === selectedMentor.id)) {
      setMyMentors([...myMentors, selectedMentor])
    }

    setShowConnectDialog(false)
    setConnectMessage("")
  }

  const handleScheduleMeeting = (mentor: Mentor) => {
    toast({
      title: "Meeting Scheduled",
      description: `Your meeting with ${mentor.name} has been scheduled.`,
    })
  }

  const handleSubmitMentorApplication = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Application Submitted",
      description: "Your mentor application has been submitted for review.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Mentorship</h2>
        <p className="text-muted-foreground">
          Connect with mentors who can guide your personal and professional growth.
        </p>
      </div>

      <Tabs defaultValue="find" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="find">Find a Mentor</TabsTrigger>
          <TabsTrigger value="my-mentors">My Mentors</TabsTrigger>
          <TabsTrigger value="become">Become a Mentor</TabsTrigger>
        </TabsList>

        <TabsContent value="find" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <form onSubmit={handleSearch} className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search mentors by name, skills, or industry..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <div className="flex gap-2">
              <Select value={industryFilter} onValueChange={handleIndustryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="creative">Creative Arts</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setSearchQuery("")
                  setIndustryFilter("")
                  setAvailableMentors(mentors)
                }}
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden animate-pulse">
                  <div className="h-24 bg-muted"></div>
                  <CardHeader className="relative pt-0">
                    <div className="-mt-12 flex justify-center">
                      <div className="h-24 w-24 rounded-full bg-muted"></div>
                    </div>
                    <div className="h-6 bg-muted rounded-md w-3/4 mx-auto mt-2"></div>
                    <div className="h-4 bg-muted rounded-md w-1/2 mx-auto mt-2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="h-6 bg-muted rounded-full w-20"></div>
                      ))}
                    </div>
                    <div className="h-16 bg-muted rounded-md"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <>
              {availableMentors.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg font-medium">No mentors found</p>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {availableMentors.map((mentor) => (
                    <Card key={mentor.id} className="overflow-hidden">
                      <div className="h-24 bg-gradient-to-r from-purple-500 to-purple-700" />
                      <CardHeader className="relative pt-0">
                        <div className="-mt-12 flex justify-center">
                          <Avatar className="h-24 w-24 border-4 border-background">
                            <AvatarImage src={mentor.image || "/placeholder.svg"} alt={mentor.name} />
                            <AvatarFallback className="text-2xl">{mentor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <CardTitle className="text-center text-xl mt-2">{mentor.name}</CardTitle>
                        <CardDescription className="text-center">
                          {mentor.title} at {mentor.company}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {mentor.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{mentor.bio}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm text-muted-foreground">
                          <span>⭐ {mentor.rating}</span>
                          <span className="mx-2">•</span>
                          <span>{mentor.menteeCount} mentees</span>
                        </div>
                        <Button onClick={() => handleConnect(mentor)}>Connect</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}

          {availableMentors.length > 0 && (
            <div className="flex justify-center mt-6">
              <Button variant="outline">Load More Mentors</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="my-mentors" className="space-y-4">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-medium mb-4">Your Mentorship Connections</h3>

            {myMentors.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">You haven't connected with any mentors yet.</p>
                <Button onClick={() => setActiveTab("find")}>Find Mentors</Button>
              </div>
            ) : (
              <>
                {myMentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b pb-4 mb-4 last:border-0 last:mb-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={mentor.image || "/placeholder.svg"} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{mentor.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {mentor.title} at {mentor.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                      <Button variant="outline">Message</Button>
                      <Button onClick={() => handleScheduleMeeting(mentor)}>Schedule Meeting</Button>
                    </div>
                  </div>
                ))}
              </>
            )}

            {myMentors.length > 0 && (
              <div className="mt-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Looking for more guidance? Connect with additional mentors.
                </p>
                <Button variant="outline" onClick={() => setActiveTab("find")}>
                  Find More Mentors
                </Button>
              </div>
            )}
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-medium mb-4">Upcoming Mentorship Sessions</h3>

            {myMentors.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No upcoming sessions scheduled.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    <div>
                      <p className="font-medium">Career Development Strategy</p>
                      <p className="text-sm text-muted-foreground">With {myMentors[0].name}</p>
                      <p className="text-sm mt-1">Tomorrow, 3:00 PM - 4:00 PM</p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                      <Button variant="outline">Reschedule</Button>
                      <Button>Join Meeting</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="become" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Become a Mentor</CardTitle>
              <CardDescription>Share your knowledge and experience to help others grow professionally.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmitMentorApplication}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="expertise">Areas of Expertise</Label>
                  <Select value={expertiseArea} onValueChange={setExpertiseArea}>
                    <SelectTrigger id="expertise">
                      <SelectValue placeholder="Select your primary area of expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="leadership">Leadership</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select value={experienceYears} onValueChange={setExperienceYears}>
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="4-6">4-6 years</SelectItem>
                      <SelectItem value="7-10">7-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Mentor Bio</Label>
                  <textarea
                    id="bio"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell potential mentees about your background, expertise, and mentoring style..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select value={availabilityHours} onValueChange={setAvailabilityHours}>
                    <SelectTrigger id="availability">
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 hours per week</SelectItem>
                      <SelectItem value="3-5">3-5 hours per week</SelectItem>
                      <SelectItem value="5+">5+ hours per week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Submit Mentor Application
                </Button>
              </CardFooter>
            </form>
          </Card>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-medium mb-4">Why Become a Mentor?</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-medium">Give Back</h4>
                <p className="text-sm text-muted-foreground">
                  Share your knowledge and experience to help others overcome barriers you've faced.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Develop Leadership</h4>
                <p className="text-sm text-muted-foreground">
                  Enhance your leadership and communication skills through mentoring relationships.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Build Network</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with motivated individuals and expand your professional network.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Connect with Mentor Dialog */}
      <Dialog open={showConnectDialog} onOpenChange={setShowConnectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect with {selectedMentor?.name}</DialogTitle>
            <DialogDescription>
              Send a message to introduce yourself and explain what you're looking for in a mentor.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={selectedMentor?.image || "/placeholder.svg"} alt={selectedMentor?.name} />
                <AvatarFallback>{selectedMentor?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{selectedMentor?.name}</p>
                <p className="text-sm text-muted-foreground">
                  {selectedMentor?.title} at {selectedMentor?.company}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Your message</Label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Hi, I'm interested in connecting with you as a mentor because..."
                value={connectMessage}
                onChange={(e) => setConnectMessage(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConnectDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitConnect}>Send Request</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
