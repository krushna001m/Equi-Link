import type { Course, Discussion, Event, Group, Job, Mentor, User, UserCourse } from "./types"

// Mock user data
export const currentUser: User = {
  id: "user-1",
  name: "Jane Cooper",
  email: "jane@example.com",
  image: "/placeholder.svg?height=40&width=40&text=JC",
  userType: "mentee",
  bio: "Product designer looking to transition into tech leadership",
  skills: ["UI/UX", "Product Design", "Figma", "User Research"],
  location: "San Francisco, CA",
  createdAt: new Date("2023-01-15"),
}

// Mock mentors data
export const mentors: Mentor[] = [
  {
    id: "mentor-1",
    name: "Sarah Miller",
    title: "Senior Product Manager",
    company: "TechCorp",
    image: "/placeholder.svg?height=96&width=96&text=SM",
    skills: ["Career Transition", "Leadership", "Product Management"],
    bio: "Helping women transition into tech leadership roles with 10+ years of experience.",
    rating: 4.8,
    menteeCount: 12,
    industry: "tech",
  },
  {
    id: "mentor-2",
    name: "James Wilson",
    title: "Software Engineer",
    company: "CodeWorks",
    image: "/placeholder.svg?height=96&width=96&text=JW",
    skills: ["Web Development", "JavaScript", "React"],
    bio: "Full-stack developer passionate about mentoring underrepresented groups in tech.",
    rating: 4.7,
    menteeCount: 8,
    industry: "tech",
  },
  {
    id: "mentor-3",
    name: "Priya Patel",
    title: "UX Designer",
    company: "DesignHub",
    image: "/placeholder.svg?height=96&width=96&text=PP",
    skills: ["UI/UX", "Design Systems", "User Research"],
    bio: "Designer focused on creating accessible and inclusive digital experiences.",
    rating: 4.9,
    menteeCount: 15,
    industry: "creative",
  },
  {
    id: "mentor-4",
    name: "Michael Chen",
    title: "Data Scientist",
    company: "DataInsights",
    image: "/placeholder.svg?height=96&width=96&text=MC",
    skills: ["Machine Learning", "Python", "Data Analysis"],
    bio: "Data scientist with experience helping minorities break into AI and data fields.",
    rating: 4.6,
    menteeCount: 10,
    industry: "tech",
  },
  {
    id: "mentor-5",
    name: "Aisha Johnson",
    title: "Marketing Director",
    company: "GrowthMedia",
    image: "/placeholder.svg?height=96&width=96&text=AJ",
    skills: ["Digital Marketing", "Brand Strategy", "Social Media"],
    bio: "Marketing expert specializing in helping women-owned businesses grow.",
    rating: 4.8,
    menteeCount: 14,
    industry: "marketing",
  },
  {
    id: "mentor-6",
    name: "David Rodriguez",
    title: "Entrepreneur",
    company: "StartupLaunch",
    image: "/placeholder.svg?height=96&width=96&text=DR",
    skills: ["Startups", "Business Strategy", "Fundraising"],
    bio: "Serial entrepreneur dedicated to supporting founders from diverse backgrounds.",
    rating: 4.9,
    menteeCount: 18,
    industry: "business",
  },
]

// User's connected mentors
export const userMentors: Mentor[] = [mentors[0], mentors[1]]

// Mock jobs data
export const jobs: Job[] = [
  {
    id: "job-1",
    title: "UX Designer",
    company: "Inclusive Tech Co.",
    companyLogo: "/placeholder.svg?height=40&width=40&text=IT",
    location: "San Francisco, CA (Remote)",
    type: "full-time",
    mode: "remote",
    description: "Design user-centered experiences for web and mobile applications in an inclusive environment.",
    skills: ["UI/UX", "Figma", "User Research", "Accessibility"],
    salary: {
      min: 90000,
      max: 110000,
    },
    postedAt: new Date("2023-04-10"),
    isNew: true,
  },
  {
    id: "job-2",
    title: "Software Engineer",
    company: "EqualTech Solutions",
    companyLogo: "/placeholder.svg?height=40&width=40&text=ET",
    location: "New York, NY (Hybrid)",
    type: "full-time",
    mode: "hybrid",
    description:
      "Develop scalable web applications using modern JavaScript frameworks and accessibility best practices.",
    skills: ["JavaScript", "React", "Node.js", "Accessibility"],
    salary: {
      min: 120000,
      max: 150000,
    },
    postedAt: new Date("2023-04-08"),
    isFeatured: true,
  },
  {
    id: "job-3",
    title: "Product Manager",
    company: "Diversity Innovations",
    companyLogo: "/placeholder.svg?height=40&width=40&text=DI",
    location: "Austin, TX (Remote)",
    type: "full-time",
    mode: "remote",
    description: "Lead product development with a focus on inclusive design and diverse user needs.",
    skills: ["Product Management", "Agile", "User Research", "Inclusive Design"],
    salary: {
      min: 110000,
      max: 140000,
    },
    postedAt: new Date("2023-04-05"),
    isNew: true,
  },
  {
    id: "job-4",
    title: "Data Analyst",
    company: "FairHire Inc.",
    companyLogo: "/placeholder.svg?height=40&width=40&text=FH",
    location: "Chicago, IL (On-site)",
    type: "full-time",
    mode: "on-site",
    description: "Analyze user data to derive insights and improve product accessibility and inclusivity.",
    skills: ["SQL", "Python", "Data Visualization", "Statistics"],
    salary: {
      min: 85000,
      max: 105000,
    },
    postedAt: new Date("2023-04-03"),
  },
  {
    id: "job-5",
    title: "Marketing Specialist",
    company: "EquityFirst Media",
    companyLogo: "/placeholder.svg?height=40&width=40&text=EM",
    location: "Seattle, WA (Remote)",
    type: "full-time",
    mode: "remote",
    description: "Create and execute marketing campaigns focused on diverse audiences and inclusive messaging.",
    skills: ["Digital Marketing", "Content Creation", "Social Media", "Analytics"],
    salary: {
      min: 75000,
      max: 95000,
    },
    postedAt: new Date("2023-04-01"),
    isFeatured: true,
  },
  {
    id: "job-6",
    title: "Project Coordinator",
    company: "AccessibleFuture",
    companyLogo: "/placeholder.svg?height=40&width=40&text=AF",
    location: "Boston, MA (Hybrid)",
    type: "full-time",
    mode: "hybrid",
    description: "Coordinate projects ensuring accessibility and inclusion throughout the development process.",
    skills: ["Project Management", "Communication", "Organization", "Accessibility"],
    salary: {
      min: 65000,
      max: 85000,
    },
    postedAt: new Date("2023-03-30"),
  },
]

// Mock courses data
export const courses: Course[] = [
  {
    id: "course-1",
    title: "Web Development Fundamentals",
    provider: "Code Academy",
    level: "beginner",
    duration: {
      weeks: 8,
      hoursPerWeek: 2,
    },
    description: "Learn HTML, CSS, and JavaScript basics for building responsive websites.",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300&text=WebDev",
    topics: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    isFree: true,
  },
  {
    id: "course-2",
    title: "Introduction to UX Design",
    provider: "Design Institute",
    level: "beginner",
    duration: {
      weeks: 6,
      hoursPerWeek: 3,
    },
    description: "Master the fundamentals of user experience design and usability testing.",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300&text=UXDesign",
    topics: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    isFree: true,
  },
  {
    id: "course-3",
    title: "Data Analysis with Python",
    provider: "Data Learning Center",
    level: "intermediate",
    duration: {
      weeks: 10,
      hoursPerWeek: 4,
    },
    description: "Analyze data using Python libraries like Pandas, NumPy, and Matplotlib.",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=300&text=DataPython",
    topics: ["Python", "Pandas", "NumPy", "Data Visualization"],
    isFree: true,
  },
  {
    id: "course-4",
    title: "Digital Marketing Essentials",
    provider: "Marketing School",
    level: "beginner",
    duration: {
      weeks: 4,
      hoursPerWeek: 2,
    },
    description: "Develop digital marketing skills including SEO, social media, and content strategy.",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300&text=DigitalMarketing",
    topics: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    isFree: true,
  },
  {
    id: "course-5",
    title: "Project Management Basics",
    provider: "PM Knowledge Hub",
    level: "beginner",
    duration: {
      weeks: 12,
      hoursPerWeek: 5,
    },
    description: "Learn project management methodologies, tools, and best practices.",
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300&text=ProjectManagement",
    topics: ["Agile", "Scrum", "Kanban", "Project Planning"],
    isFree: true,
  },
  {
    id: "course-6",
    title: "Financial Literacy for Everyone",
    provider: "Financial Education Network",
    level: "beginner",
    duration: {
      weeks: 5,
      hoursPerWeek: 2,
    },
    description: "Build financial knowledge including budgeting, saving, and investing basics.",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300&text=FinancialLiteracy",
    topics: ["Budgeting", "Saving", "Investing", "Financial Planning"],
    isFree: true,
  },
]

// User's enrolled courses
export const userCourses: UserCourse[] = [
  {
    ...courses[0],
    progress: 35,
    enrolledAt: new Date("2023-03-15"),
  },
  {
    ...courses[1],
    progress: 15,
    enrolledAt: new Date("2023-04-01"),
  },
]

// Mock discussions data
export const discussions: Discussion[] = [
  {
    id: "discussion-1",
    title: "Tips for negotiating salary as a woman in tech?",
    content:
      "I'm preparing for a salary negotiation at a tech company and would love advice from others who have successfully navigated this, especially as a woman in a male-dominated field.",
    author: {
      id: "user-2",
      name: "Jane Cooper",
      image: "/placeholder.svg?height=40&width=40&text=JC",
    },
    category: "Career Development",
    createdAt: new Date("2023-04-10"),
    likes: 12,
    comments: 8,
  },
  {
    id: "discussion-2",
    title: "Resources for self-taught developers from underrepresented groups",
    content:
      "Looking for recommendations on free or affordable learning resources that are accessible and welcoming to self-taught developers from underrepresented backgrounds.",
    author: {
      id: "user-3",
      name: "Alex Johnson",
      image: "/placeholder.svg?height=40&width=40&text=AJ",
    },
    category: "Tech Skills",
    createdAt: new Date("2023-04-07"),
    likes: 17,
    comments: 11,
  },
  {
    id: "discussion-3",
    title: "How to find mentors who understand your unique challenges",
    content:
      "I've been trying to find mentors who understand the specific challenges I face as a minority in my field. Any suggestions on how to connect with the right mentors?",
    author: {
      id: "user-4",
      name: "Maria Rodriguez",
      image: "/placeholder.svg?height=40&width=40&text=MR",
    },
    category: "Mentorship",
    createdAt: new Date("2023-04-04"),
    likes: 22,
    comments: 14,
  },
  {
    id: "discussion-4",
    title: "Balancing career growth with family responsibilities",
    content:
      "Struggling to balance advancing my career while managing family responsibilities. Would appreciate hearing strategies from others in similar situations.",
    author: {
      id: "user-5",
      name: "Sam Taylor",
      image: "/placeholder.svg?height=40&width=40&text=ST",
    },
    category: "Work-Life Balance",
    createdAt: new Date("2023-04-01"),
    likes: 27,
    comments: 17,
  },
  {
    id: "discussion-5",
    title: "Experiences with inclusive hiring practices",
    content:
      "I'd like to hear about people's experiences with companies that have truly inclusive hiring practices. What should I look for when evaluating potential employers?",
    author: {
      id: "user-6",
      name: "Priya Patel",
      image: "/placeholder.svg?height=40&width=40&text=PP",
    },
    category: "Diversity in Tech",
    createdAt: new Date("2023-03-28"),
    likes: 32,
    comments: 20,
  },
]

// Mock groups data
export const groups: Group[] = [
  {
    id: "group-1",
    name: "Women in Tech",
    description: "Support and networking for women in technology fields",
    memberCount: 1250,
    postsThisWeek: 15,
  },
  {
    id: "group-2",
    name: "LGBTQ+ Professionals",
    description: "Community for LGBTQ+ professionals across industries",
    memberCount: 850,
    postsThisWeek: 8,
  },
  {
    id: "group-3",
    name: "Parents in Tech",
    description: "Balancing parenthood and tech careers",
    memberCount: 620,
    postsThisWeek: 12,
  },
  {
    id: "group-4",
    name: "Accessibility Advocates",
    description: "Advocating for accessible technology and workplaces",
    memberCount: 480,
    postsThisWeek: 6,
  },
  {
    id: "group-5",
    name: "Career Changers",
    description: "Support for those transitioning to new career paths",
    memberCount: 730,
    postsThisWeek: 10,
  },
  {
    id: "group-6",
    name: "Rural Tech Workers",
    description: "Connecting tech professionals in rural and remote areas",
    memberCount: 340,
    postsThisWeek: 4,
  },
]

// Mock events data
export const events: Event[] = [
  {
    id: "event-1",
    title: "Networking Mixer for Underrepresented Groups in Tech",
    description:
      "Connect with peers and potential mentors in a casual virtual networking event designed for underrepresented groups in technology.",
    date: new Date("2023-04-15"),
    time: "6:00 PM - 8:00 PM EST",
    type: "virtual",
    attendeeCount: 120,
  },
  {
    id: "event-2",
    title: "Workshop: Building an Inclusive Resume",
    description:
      "Learn how to craft a resume that highlights your unique skills and experiences while navigating potential biases in the hiring process.",
    date: new Date("2023-04-22"),
    time: "2:00 PM - 4:00 PM PST",
    type: "in-person",
    attendeeCount: 85,
  },
  {
    id: "event-3",
    title: "Panel: Breaking Barriers in STEM",
    description:
      "Hear from successful professionals who have overcome barriers in STEM fields and learn from their experiences.",
    date: new Date("2023-05-05"),
    time: "1:00 PM - 3:00 PM EST",
    type: "virtual",
    attendeeCount: 150,
  },
  {
    id: "event-4",
    title: "Career Fair: Equal Opportunity Employers",
    description: "Meet with employers committed to diverse and inclusive hiring practices across various industries.",
    date: new Date("2023-05-12"),
    time: "10:00 AM - 4:00 PM CST",
    type: "hybrid",
    attendeeCount: 200,
  },
]
