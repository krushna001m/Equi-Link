import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { MessageSquare, Search, ThumbsUp, Users } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Community</h2>
        <p className="text-muted-foreground">
          Connect with others, share experiences, and get support from the EquiLink community.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search discussions, groups, or topics..." className="pl-9" />
        </div>
        <Button>Start a Discussion</Button>
      </div>

      <Tabs defaultValue="discussions">
        <TabsList>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="my-activity">My Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-4">
          <div className="grid gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Card key={i}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=U${i + 1}`} alt={`User ${i + 1}`} />
                        <AvatarFallback>U{i + 1}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">
                          {["Jane Cooper", "Alex Johnson", "Maria Rodriguez", "Sam Taylor", "Priya Patel"][i]}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Posted {[2, 5, 8, 12, 24][i]} hour{[2, 5, 8, 12, 24][i] !== 1 ? "s" : ""} ago
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">
                      {["Career Development", "Tech Skills", "Mentorship", "Work-Life Balance", "Diversity in Tech"][i]}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">
                    {
                      [
                        "Tips for negotiating salary as a woman in tech?",
                        "Resources for self-taught developers from underrepresented groups",
                        "How to find mentors who understand your unique challenges",
                        "Balancing career growth with family responsibilities",
                        "Experiences with inclusive hiring practices",
                      ][i]
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm">
                    {
                      [
                        "I'm preparing for a salary negotiation at a tech company and would love advice from others who have successfully navigated this, especially as a woman in a male-dominated field.",
                        "Looking for recommendations on free or affordable learning resources that are accessible and welcoming to self-taught developers from underrepresented backgrounds.",
                        "I've been trying to find mentors who understand the specific challenges I face as a minority in my field. Any suggestions on how to connect with the right mentors?",
                        "Struggling to balance advancing my career while managing family responsibilities. Would appreciate hearing strategies from others in similar situations.",
                        "I'd like to hear about people's experiences with companies that have truly inclusive hiring practices. What should I look for when evaluating potential employers?",
                      ][i]
                    }
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{12 + i * 5}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{8 + i * 3}</span>
                    </div>
                  </div>
                  <Button variant="outline">View Discussion</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline">Load More Discussions</Button>
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-lg">
                      {
                        [
                          "Women in Tech",
                          "LGBTQ+ Professionals",
                          "Parents in Tech",
                          "Accessibility Advocates",
                          "Career Changers",
                          "Rural Tech Workers",
                        ][i]
                      }
                    </CardTitle>
                  </div>
                  <CardDescription className="mt-2">
                    {
                      [
                        "Support and networking for women in technology fields",
                        "Community for LGBTQ+ professionals across industries",
                        "Balancing parenthood and tech careers",
                        "Advocating for accessible technology and workplaces",
                        "Support for those transitioning to new career paths",
                        "Connecting tech professionals in rural and remote areas",
                      ][i]
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{[1250, 850, 620, 480, 730, 340][i]} members</span>
                    <span>•</span>
                    <span>{[15, 8, 12, 6, 10, 4][i]} posts this week</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Join Group
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex justify-between">
                    <Badge>{["Virtual", "In-Person", "Virtual", "Hybrid"][i]}</Badge>
                    <div className="text-sm font-medium text-purple-600">
                      {["Apr 15", "Apr 22", "May 5", "May 12"][i]}
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2">
                    {
                      [
                        "Networking Mixer for Underrepresented Groups in Tech",
                        "Workshop: Building an Inclusive Resume",
                        "Panel: Breaking Barriers in STEM",
                        "Career Fair: Equal Opportunity Employers",
                      ][i]
                    }
                  </CardTitle>
                  <CardDescription>
                    {
                      [
                        "6:00 PM - 8:00 PM EST",
                        "2:00 PM - 4:00 PM PST",
                        "1:00 PM - 3:00 PM EST",
                        "10:00 AM - 4:00 PM CST",
                      ][i]
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    {
                      [
                        "Connect with peers and potential mentors in a casual virtual networking event designed for underrepresented groups in technology.",
                        "Learn how to craft a resume that highlights your unique skills and experiences while navigating potential biases in the hiring process.",
                        "Hear from successful professionals who have overcome barriers in STEM fields and learn from their experiences.",
                        "Meet with employers committed to diverse and inclusive hiring practices across various industries.",
                      ][i]
                    }
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">{[120, 85, 150, 200][i]} attending</div>
                  <Button>Register</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-activity" className="space-y-4">
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <MessageSquare className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium">No activity yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Join discussions, groups, and events to see your activity here.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Button variant="outline">Join a Group</Button>
              <Button>Start a Discussion</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
