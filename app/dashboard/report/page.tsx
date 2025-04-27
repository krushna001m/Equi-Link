import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Shield, ShieldAlert } from "lucide-react"

export default function ReportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Anonymous Reporting</h2>
        <p className="text-muted-foreground">
          Safely report discrimination, harassment, or other issues you've experienced or witnessed.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Submit a Report</CardTitle>
            <CardDescription>
              Your report will be anonymous and handled confidentially by our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="report-type">Type of Incident</Label>
              <Select>
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="discrimination">Discrimination</SelectItem>
                  <SelectItem value="harassment">Harassment</SelectItem>
                  <SelectItem value="bias">Bias in Hiring/Promotion</SelectItem>
                  <SelectItem value="accessibility">Accessibility Issues</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Where did this occur?</Label>
              <Select>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="workplace">Workplace</SelectItem>
                  <SelectItem value="interview">Job Interview</SelectItem>
                  <SelectItem value="education">Educational Setting</SelectItem>
                  <SelectItem value="online">Online Platform</SelectItem>
                  <SelectItem value="event">Professional Event</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="when">When did this occur?</Label>
              <Input id="when" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description of the incident</Label>
              <Textarea
                id="description"
                placeholder="Please provide details about what happened..."
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="support">What kind of support are you seeking?</Label>
              <Select>
                <SelectTrigger id="support">
                  <SelectValue placeholder="Select support type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="resources">Resources & Information</SelectItem>
                  <SelectItem value="counseling">Counseling Referral</SelectItem>
                  <SelectItem value="legal">Legal Resources</SelectItem>
                  <SelectItem value="mediation">Mediation</SelectItem>
                  <SelectItem value="report-only">Report Only (No Action)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact" className="flex items-center gap-2">
                Optional contact information
                <span className="text-xs text-muted-foreground">(will remain confidential)</span>
              </Label>
              <Input id="contact" placeholder="Email or phone number (optional)" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Submit Anonymous Report</Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <CardTitle>Our Commitment to Safety</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                EquiLink is committed to creating a safe and inclusive environment for all users. We take all reports
                seriously and handle them with the utmost confidentiality.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-2">
                  <ShieldAlert className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Anonymous Reporting</p>
                    <p className="text-sm text-muted-foreground">
                      Your identity is protected. Reports are submitted anonymously unless you choose to provide contact
                      information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldAlert className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Confidential Handling</p>
                    <p className="text-sm text-muted-foreground">
                      All reports are handled by trained staff members who follow strict confidentiality protocols.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldAlert className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Support Resources</p>
                    <p className="text-sm text-muted-foreground">
                      We can connect you with appropriate resources based on your situation and needs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Resources</CardTitle>
              <CardDescription>Additional support resources available to you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-3">
                <p className="font-medium">Crisis Support Hotline</p>
                <p className="text-sm text-muted-foreground">
                  24/7 confidential support for those experiencing crisis situations.
                </p>
                <p className="text-sm font-medium mt-2">1-800-555-HELP</p>
              </div>

              <div className="rounded-lg border p-3">
                <p className="font-medium">Legal Aid Resources</p>
                <p className="text-sm text-muted-foreground">
                  Free or low-cost legal assistance for discrimination and harassment cases.
                </p>
                <Button variant="link" className="px-0 h-auto text-sm">
                  View Resources
                </Button>
              </div>

              <div className="rounded-lg border p-3">
                <p className="font-medium">Mental Health Support</p>
                <p className="text-sm text-muted-foreground">
                  Access to counseling and mental health resources for those affected by discrimination or harassment.
                </p>
                <Button variant="link" className="px-0 h-auto text-sm">
                  Find Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
