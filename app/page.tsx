import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Briefcase, Heart, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
              <span className="font-bold">E</span>
            </div>
            <span className="text-xl font-bold">EquiLink</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="#impact" className="text-sm font-medium hover:underline">
              Impact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-background py-20">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Connecting People to <span className="text-purple-600">Equal Opportunities</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            EquiLink bridges the gap for underrepresented individuals by providing access to mentorship, job
            opportunities, learning resources, and community support.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard/demo">
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Key Features</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to address the specific needs of underrepresented communities and align with SDG 5
            (Gender Equality) and SDG 10 (Reduced Inequalities).
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Opportunity Matching</h3>
              <p className="mt-2 text-muted-foreground">
                AI-powered job and internship recommendations tailored to your skills and interests.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Mentorship</h3>
              <p className="mt-2 text-muted-foreground">
                Connect with experienced mentors who can guide your personal and professional growth.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Learning Hub</h3>
              <p className="mt-2 text-muted-foreground">
                Access curated educational resources to develop new skills and knowledge.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Support Circle</h3>
              <p className="mt-2 text-muted-foreground">
                Join community forums and support groups for guidance, advice, and connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section id="impact" className="py-20 bg-purple-50 dark:bg-purple-950/20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">SDG Alignment</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                  <span className="font-bold text-pink-600">5</span>
                </div>
                <h3 className="text-xl font-bold">Gender Equality</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Supports women with re-skilling, jobs, and mentorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Safe space to discuss challenges and report bias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Promotes equal access to economic resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <span className="font-bold text-red-600">10</span>
                </div>
                <h3 className="text-xl font-bold">Reduced Inequalities</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Bridges the gap for rural, LGBTQ+, disabled, and other marginalized groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Multilingual and inclusive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Promotes social inclusion regardless of background</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">Join the EquiLink Community</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Be part of a movement that's creating equal opportunities and support for everyone. Sign up today and start
            your journey towards a more inclusive future.
          </p>
          <div className="mt-8">
            <Link href="/signup">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                <span className="font-bold">E</span>
              </div>
              <span className="text-xl font-bold">EquiLink</span>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 EquiLink. All rights reserved | KRUSHNA MENGAL.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
