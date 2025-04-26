"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Filter, MapPin, Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import type { Job } from "@/lib/types"
import { jobs } from "@/lib/data"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function OpportunitiesPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("recommended")
  const [searchQuery, setSearchQuery] = useState("")
  const [jobTypeFilter, setJobTypeFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [availableJobs, setAvailableJobs] = useState<Job[]>(jobs)
  const [savedJobs, setSavedJobs] = useState<Job[]>([])
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApplyDialog, setShowApplyDialog] = useState(false)
  const [applicationNote, setApplicationNote] = useState("")
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  useEffect(() => {
    // Simulate API call to fetch jobs
    const fetchJobs = async () => {
      setIsLoading(true)
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // For demo purposes, we'll use the mock data
        setAvailableJobs(jobs)
      } catch (error) {
        console.error("Error fetching jobs:", error)
        toast({
          title: "Error",
          description: "Failed to load job opportunities. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [toast])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Filter jobs based on search query
    if (searchQuery) {
      const filtered = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      setAvailableJobs(filtered)
    } else {
      // If search query is empty, reset to all jobs
      setAvailableJobs(jobs)
    }
  }

  const applyFilters = () => {
    let filtered = [...jobs]

    if (jobTypeFilter && jobTypeFilter !== "all") {
      filtered = filtered.filter((job) => job.type === jobTypeFilter)
    }

    if (locationFilter && locationFilter !== "all") {
      filtered = filtered.filter((job) => job.mode === locationFilter)
    }

    setAvailableJobs(filtered)
  }

  const resetFilters = () => {
    setJobTypeFilter("")
    setLocationFilter("")
    setSearchQuery("")
    setAvailableJobs(jobs)
  }

  const handleSaveJob = (job: Job) => {
    if (savedJobs.some((j) => j.id === job.id)) {
      // If already saved, remove from saved jobs
      setSavedJobs(savedJobs.filter((j) => j.id !== job.id))
      toast({
        title: "Job Removed",
        description: `${job.title} at ${job.company} has been removed from your saved jobs.`,
      })
    } else {
      // Add to saved jobs
      setSavedJobs([...savedJobs, job])
      toast({
        title: "Job Saved",
        description: `${job.title} at ${job.company} has been saved to your profile.`,
      })
    }
  }

  const handleApply = (job: Job) => {
    setSelectedJob(job)
    setShowApplyDialog(true)
  }

  const handleSubmitApplication = () => {
    if (!selectedJob) return

    // Simulate API call to submit application
    toast({
      title: "Application Submitted",
      description: `Your application for ${selectedJob.title} at ${selectedJob.company} has been submitted.`,
    })

    // Add job to applied jobs list (for demo purposes)
    if (!appliedJobs.some((j) => j.id === selectedJob.id)) {
      setAppliedJobs([...appliedJobs, selectedJob])
    }

    setShowApplyDialog(false)
    setApplicationNote("")
    setResumeFile(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Opportunities</h2>
        <p className="text-muted-foreground">
          Discover job opportunities, internships, and other professional growth opportunities.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <form onSubmit={handleSearch} className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs, internships, or companies..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div className="flex gap-2">
          <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
              <SelectItem value="volunteer">Volunteer</SelectItem>
            </SelectContent>
          </Select>
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
              <SelectItem value="on-site">On-site</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (jobTypeFilter || locationFilter) {
                applyFilters()
              } else {
                resetFilters()
              }
            }}
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="recommended" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="saved">Saved ({savedJobs.length})</TabsTrigger>
          <TabsTrigger value="applied">Applied ({appliedJobs.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="space-y-4">
          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted"></div>
                        <div>
                          <div className="h-5 bg-muted rounded-md w-32 mb-2"></div>
                          <div className="h-4 bg-muted rounded-md w-24"></div>
                        </div>
                      </div>
                      <div className="h-6 bg-muted rounded-full w-16"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="h-4 bg-muted rounded-md w-full mb-3"></div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="h-6 bg-muted rounded-full w-20"></div>
                      <div className="h-6 bg-muted rounded-full w-24"></div>
                    </div>
                    <div className="h-20 bg-muted rounded-md"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <>
              {availableJobs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg font-medium">No jobs found</p>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {availableJobs.map((job) => (
                    <Card key={job.id}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={job.companyLogo || "/placeholder.svg"} alt={job.company} />
                              <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{job.title}</CardTitle>
                              <CardDescription>{job.company}</CardDescription>
                            </div>
                          </div>
                          {job.isNew && <Badge>New</Badge>}
                          {job.isFeatured && <Badge variant="secondary">Featured</Badge>}
                          {!job.isNew && !job.isFeatured && job.mode === "remote" && (
                            <Badge variant="outline">Remote</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{job.type}</Badge>
                          {job.skills.slice(0, 2).map((skill, i) => (
                            <Badge key={i} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm">{job.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm">
                          <span className="font-medium">
                            ${job.salary.min / 1000}K - ${job.salary.max / 1000}K
                          </span>
                          <span className="text-muted-foreground"> / year</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleSaveJob(job)}>
                            {savedJobs.some((j) => j.id === job.id) ? "Saved" : "Save"}
                          </Button>
                          <Button size="sm" onClick={() => handleApply(job)}>
                            Apply
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}

          {availableJobs.length > 0 && (
            <div className="flex justify-center mt-6">
              <Button variant="outline">Load More Opportunities</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableJobs.slice(0, 3).map((job) => (
              <Card key={job.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={job.companyLogo || "/placeholder.svg"} alt={job.company} />
                        <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </div>
                    </div>
                    <Badge>New</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">{job.type}</Badge>
                    {job.skills.slice(0, 2).map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm">{job.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm">
                    <span className="font-medium">
                      ${job.salary.min / 1000}K - ${job.salary.max / 1000}K
                    </span>
                    <span className="text-muted-foreground"> / year</span>
                  </div>
                  <Button onClick={() => handleApply(job)}>Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          {savedJobs.length === 0 ? (
            <div className="rounded-lg border bg-card p-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Briefcase className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-medium">No saved opportunities</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Save job opportunities to view them later and keep track of positions you're interested in.
              </p>
              <Button variant="outline" className="mt-4" onClick={() => setActiveTab("recommended")}>
                Browse Opportunities
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {savedJobs.map((job) => (
                <Card key={job.id}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={job.companyLogo || "/placeholder.svg"} alt={job.company} />
                          <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <CardDescription>{job.company}</CardDescription>
                        </div>
                      </div>
                      {job.isNew && <Badge>New</Badge>}
                      {job.isFeatured && <Badge variant="secondary">Featured</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{job.location}</span>
                    </div>
                    <p className="text-sm">{job.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" onClick={() => handleSaveJob(job)}>
                      Remove
                    </Button>
                    <Button onClick={() => handleApply(job)}>Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="applied" className="space-y-4">
          {appliedJobs.length === 0 ? (
            <div className="rounded-lg border bg-card p-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Briefcase className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-medium">No applications yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                When you apply for jobs, they'll appear here so you can track your application status.
              </p>
              <Button variant="outline" className="mt-4" onClick={() => setActiveTab("recommended")}>
                Find Jobs to Apply
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {appliedJobs.map((job) => (
                <Card key={job.id}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={job.companyLogo || "/placeholder.svg"} alt={job.company} />
                          <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <CardDescription>{job.company}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">Applied</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{job.location}</span>
                    </div>
                    <div className="rounded-md bg-muted p-2 text-sm">
                      <p className="font-medium">Application Status: Under Review</p>
                      <p className="text-xs text-muted-foreground mt-1">Applied on {new Date().toLocaleDateString()}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Application
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Apply for Job Dialog */}
      <Dialog open={showApplyDialog} onOpenChange={setShowApplyDialog}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              Complete your application for {selectedJob?.title} at {selectedJob?.company}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={selectedJob?.companyLogo || "/placeholder.svg"} alt={selectedJob?.company} />
                <AvatarFallback>{selectedJob?.company?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{selectedJob?.title}</p>
                <p className="text-sm text-muted-foreground">
                  {selectedJob?.company} • {selectedJob?.location}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume">Upload Resume</Label>
              <Input id="resume" type="file" onChange={handleFileChange} />
              <p className="text-xs text-muted-foreground">PDF, DOCX, or TXT files only (Max 5MB)</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cover-note">Cover Note (Optional)</Label>
              <textarea
                id="cover-note"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Add a note to the hiring manager..."
                value={applicationNote}
                onChange={(e) => setApplicationNote(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowApplyDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitApplication}>Submit Application</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
