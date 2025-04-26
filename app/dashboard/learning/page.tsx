import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Filter, Search, Star } from "lucide-react"

export default function LearningPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Learning Hub</h2>
        <p className="text-muted-foreground">Access free educational resources to develop new skills and knowledge.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search courses, tutorials, or topics..." className="pl-9" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="recommended">
        <TabsList>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="my-learning">My Learning</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-r from-purple-500 to-purple-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-white opacity-75" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge variant={i % 3 === 0 ? "default" : "secondary"}>
                      {i % 3 === 0 ? "Beginner" : i % 3 === 1 ? "Intermediate" : "Advanced"}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.{7 - (i % 3)}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2">
                    {
                      [
                        "Web Development Fundamentals",
                        "Introduction to UX Design",
                        "Data Analysis with Python",
                        "Digital Marketing Essentials",
                        "Project Management Basics",
                        "Financial Literacy for Everyone",
                      ][i]
                    }
                  </CardTitle>
                  <CardDescription>
                    {
                      [
                        "Code Academy",
                        "Design Institute",
                        "Data Learning Center",
                        "Marketing School",
                        "PM Knowledge Hub",
                        "Financial Education Network",
                      ][i]
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="h-3.5 w-3.5" />
                    <span>
                      {[8, 6, 10, 4, 12, 5][i]} weeks • {[2, 3, 4, 2, 5, 2][i]} hours/week
                    </span>
                  </div>
                  <p className="text-sm">
                    {
                      [
                        "Learn HTML, CSS, and JavaScript basics for building responsive websites.",
                        "Master the fundamentals of user experience design and usability testing.",
                        "Analyze data using Python libraries like Pandas, NumPy, and Matplotlib.",
                        "Develop digital marketing skills including SEO, social media, and content strategy.",
                        "Learn project management methodologies, tools, and best practices.",
                        "Build financial knowledge including budgeting, saving, and investing basics.",
                      ][i]
                    }
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm font-medium text-green-600">Free</div>
                  <Button>Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline">Load More Courses</Button>
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-r from-blue-500 to-blue-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-white opacity-75" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge variant="secondary">Popular</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2">Popular Course Title</CardTitle>
                  <CardDescription>Provider Name</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Duration • Hours/week</span>
                  </div>
                  <p className="text-sm">Brief course description highlighting key topics and skills covered.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm font-medium text-green-600">Free</div>
                  <Button>Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-learning" className="space-y-4">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-medium mb-4">Your Enrolled Courses</h3>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">Web Development Fundamentals</h4>
                    <p className="text-sm text-muted-foreground">Code Academy</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Progress value={35} className="h-2 w-32" />
                      <span className="text-muted-foreground">35% complete</span>
                    </div>
                  </div>
                  <Button>Continue Learning</Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">Introduction to UX Design</h4>
                    <p className="text-sm text-muted-foreground">Design Institute</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Progress value={15} className="h-2 w-32" />
                      <span className="text-muted-foreground">15% complete</span>
                    </div>
                  </div>
                  <Button>Continue Learning</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-medium mb-4">Recommended Next Steps</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Advanced CSS Techniques</CardTitle>
                  <CardDescription>Code Academy</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm">
                    Take your CSS skills to the next level with advanced techniques and frameworks.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Course
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">JavaScript for Beginners</CardTitle>
                  <CardDescription>Code Academy</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm">Learn the fundamentals of JavaScript programming for web development.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-4">
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <BookOpen className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium">No certificates yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete courses to earn certificates that you can add to your profile and resume.
            </p>
            <Button variant="outline" className="mt-4">
              Browse Courses
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
