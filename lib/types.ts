// User types
export interface User {
  id: string
  name: string
  email: string
  image?: string
  userType: "mentee" | "mentor" | "employer" | "organization"
  bio?: string
  skills?: string[]
  location?: string
  createdAt: Date
}

// Authentication types
export interface AuthState {
  user: User | null
  isLoading: boolean
  error: string | null
}

// Mentorship types
export interface Mentor {
  id: string
  name: string
  title: string
  company: string
  image?: string
  skills: string[]
  bio: string
  rating: number
  menteeCount: number
  industry: string
}

// Job types
export interface Job {
  id: string
  title: string
  company: string
  companyLogo?: string
  location: string
  type: "full-time" | "part-time" | "contract" | "internship" | "volunteer"
  mode: "remote" | "hybrid" | "on-site"
  description: string
  skills: string[]
  salary: {
    min: number
    max: number
  }
  postedAt: Date
  isNew?: boolean
  isFeatured?: boolean
}

// Learning types
export interface Course {
  id: string
  title: string
  provider: string
  level: "beginner" | "intermediate" | "advanced"
  duration: {
    weeks: number
    hoursPerWeek: number
  }
  description: string
  rating: number
  image?: string
  topics: string[]
  isFree: boolean
}

export interface UserCourse extends Course {
  progress: number
  enrolledAt: Date
}

// Community types
export interface Discussion {
  id: string
  title: string
  content: string
  author: {
    id: string
    name: string
    image?: string
  }
  category: string
  createdAt: Date
  likes: number
  comments: number
}

export interface Group {
  id: string
  name: string
  description: string
  memberCount: number
  postsThisWeek: number
}

export interface Event {
  id: string
  title: string
  description: string
  date: Date
  time: string
  type: "virtual" | "in-person" | "hybrid"
  attendeeCount: number
}

// Report types
export interface Report {
  id: string
  type: "discrimination" | "harassment" | "bias" | "accessibility" | "other"
  location: "workplace" | "interview" | "education" | "online" | "event" | "other"
  date: Date
  description: string
  supportType: "resources" | "counseling" | "legal" | "mediation" | "report-only"
  contactInfo?: string
  status: "submitted" | "reviewing" | "resolved"
}
