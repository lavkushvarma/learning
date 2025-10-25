"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Globe,
  ArrowRight,
  Send,
  Download,
  Award,
  Briefcase,
  Star,
  Quote,
  Calendar,
  MapPin,
  CheckCircle,
  Settings,
  Rocket,
  Component,
  Heart,
  Twitter,
  Play,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingMessage, setLoadingMessage] = useState("Initializing...")
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const { scrollYProgress } = useScroll()

  // Refs for sections to animate
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const servicesRef = useRef(null)
  const portfolioRef = useRef(null)
  const skillsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    // About Section Animations
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )
    gsap.fromTo(
      gsap.utils.toArray("#about .card-item"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      },
    )

    // Experience Section Animations
    gsap.fromTo(
      experienceRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )
    gsap.fromTo(
      gsap.utils.toArray("#experience .experience-item"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      },
    )

    // Services Section Animations
    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )
    gsap.fromTo(
      gsap.utils.toArray("#services .service-item"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      },
    )

    // Portfolio Section Animations
    gsap.fromTo(
      portfolioRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )
    gsap.utils.toArray("#portfolio .project-item").forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    // Skills Section Animations
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )
    gsap.fromTo(
      gsap.utils.toArray("#skills .skill-item"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      },
    )
    gsap.fromTo(
      gsap.utils.toArray("#skills .category-summary-item"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#skills .category-summary-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    // Testimonials Section Animations
    gsap.fromTo(
      testimonialsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )
    gsap.fromTo(
      gsap.utils.toArray("#testimonials .testimonial-item"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      },
    )

    // Contact Section Animations
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )
    gsap.fromTo(
      gsap.utils.toArray("#contact .contact-item"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      },
    )
    gsap.fromTo(
      gsap.utils.toArray("#contact .contact-form-card"),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      },
    )

    // Cleanup function for ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Loading screen effect
  useEffect(() => {
    // Loading messages for different progress ranges
    const loadingMessages = [
      { range: [0, 15], message: "Initializing..." },
      { range: [15, 30], message: "Loading assets..." },
      { range: [30, 45], message: "Setting up components..." },
      { range: [45, 60], message: "Preparing animations..." },
      { range: [60, 75], message: "Optimizing performance..." },
      { range: [75, 90], message: "Finalizing experience..." },
      { range: [90, 100], message: "Almost ready!" },
    ]

    // Animate the progress percentage
    gsap.to(
      { progress: 0 },
      {
        progress: 100,
        duration: 2.5,
        ease: "power2.out",
        delay: 0.5,
        onUpdate: function () {
          const currentProgress = Math.round(this.targets()[0].progress)
          setLoadingProgress(currentProgress)

          // Update loading message based on progress
          const currentMessage = loadingMessages.find(
            (msg) => currentProgress >= msg.range[0] && currentProgress <= msg.range[1],
          )
          if (currentMessage) {
            setLoadingMessage(currentMessage.message)
          }
        },
      },
    )

    // Animate the progress bar to sync with percentage
    gsap.fromTo(
      ".loading-progress",
      { x: "-100%" },
      {
        x: "0%",
        duration: 2.5,
        ease: "power2.out",
        delay: 0.5,
      },
    )

    // Animate circular progress to sync with percentage
    gsap.fromTo(
      ".loading-circle",
      { strokeDasharray: "0, 100" },
      {
        strokeDasharray: "100, 100",
        duration: 2.5,
        ease: "power2.out",
        delay: 0.5,
      },
    )

    // Animate logo entrance
    gsap.fromTo(
      ".loading-logo",
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.2,
      },
    )

    // Animate text entrance
    gsap.fromTo(
      ".loading-text",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.8,
      },
    )

    // Animate floating particles
    gsap.to(".loading-particle", {
      y,
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
    })

    const timer = setTimeout(() => {
      // Ensure we reach 100% before hiding
      setLoadingProgress(100)
      setLoadingMessage("Welcome!")

      // Small delay to show 100% completion
      setTimeout(() => {
        // Animate out the loading screen
        gsap.to(".loading-screen", {
          opacity,
          scale: 1.1,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => {
            setIsLoading(false)
          },
        })
      }, 300)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      gsap.to(window, { duration: 1, scrollTo: { y: element, offsetY: 80 }, ease: "power3.out" })
      setActiveSection(sectionId)
    }
  }

  // Common Section Header Component
  const SectionHeader = ({ badge, title, subtitle, highlightText }) => (
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Sparkles className="w-4 h-4 mr-2" />
          {badge}
        </Badge>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          {title}{" "}
          {highlightText && (
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              {highlightText}
            </span>
          )}
        </h2>
        {subtitle && (
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        )}
        <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full" />
      </motion.div>
    </div>
  )

  // Common Card Component with consistent hover effects
  const AnimatedCard = ({ children, className = "", hoverEffect = "lift" }) => {
    const hoverEffects = {
      lift: "hover:-translate-y-2 hover:shadow-2xl",
      scale: "hover:scale-105 hover:shadow-xl",
      glow: "hover:shadow-2xl hover:shadow-violet-500/25",
      tilt: "hover:-rotate-1 hover:scale-105 hover:shadow-xl",
    }

    return (
      <Card
        className={`
          border-0 bg-white/80 dark)
  }

  const skills = [
    {
      name: "Shopify",
      category: "E-commerce Platform",
      description: "Custom themes, apps & store optimization",
      image: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      name: "Liquid",
      category: "Template Engine",
      description: "Dynamic templating for Shopify themes",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Liquid_logo.svg",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      name: "React",
      category: "JavaScript Library",
      description: "Modern UI component development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      borderColor: "border-cyan-200 dark:border-cyan-800",
    },
    {
      name: "Next.js",
      category: "React Framework",
      description: "Full-stack web applications",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      bgColor: "bg-gray-50 dark:bg-gray-800/50",
      borderColor: "border-gray-200 dark:border-gray-700",
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      description: "ES6+ & modern JavaScript development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
    },
    {
      name: "TypeScript",
      category: "Programming Language",
      description: "Type-safe JavaScript development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      name: "Tailwind CSS",
      category: "CSS Framework",
      description: "Utility-first styling framework",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
    },
    {
      name: "Node.js",
      category: "Runtime Environment",
      description: "Server-side JavaScript development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      name: "GraphQL",
      category: "Query Language",
      description: "Efficient API data fetching",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    {
      name: "MongoDB",
      category: "Database",
      description: "NoSQL database management",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      name: "Git",
      category: "Version Control",
      description: "Source code management & collaboration",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
    {
      name: "Figma",
      category: "Design Tool",
      description: "UI/UX design & prototyping",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  ]

  const projects = [
    {
      title: "HTML2Liquid Converter",
      description:
        "Revolutionary tool that converts HTML templates to Shopify Liquid format with AI-powered optimization and real-time preview capabilities.",
      features: ["Real-time conversion", "AI optimization", "Syntax highlighting", "Batch processing"],
      tech: ["React", "Node.js", "AI/ML", "Shopify API"],
      link: "#",
      github: "#",
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "E-commerce Store Theme",
      description:
        "Award-winning Shopify theme with advanced filtering, AR product preview, voice search, and seamless checkout experience.",
      features: ["AR Preview", "Voice Search", "Advanced Analytics", "Mobile-first Design"],
      tech: ["Liquid", "JavaScript", "WebGL", "PWA"],
      link: "#",
      github: "#",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Shopify Analytics Dashboard",
      description:
        "Comprehensive real-time analytics dashboard with predictive insights, automated reporting, and custom KPI tracking.",
      features: ["Predictive Analytics", "Real-time Data", "Custom Reports", "API Integration"],
      tech: ["React", "D3.js", "GraphQL", "Node.js"],
      link: "#",
      github: "#",
      color: "from-emerald-500 to-teal-600",
    },
  ]

  const experience = [
    {
      step: "03",
      title: "Senior Shopify Developer",
      company: "E-commerce Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      description:
        "Leading development of custom Shopify themes and applications for enterprise clients, managing complex e-commerce projects and mentoring development teams.",
      achievements: [
        "Developed 15+ custom Shopify themes for Fortune 500 companies",
        "Improved average site performance by 40% across all projects",
        "Led and mentored a team of 3 junior developers",
        "Implemented advanced SEO strategies resulting in 60% traffic increase",
      ],
      technologies: ["Shopify", "Liquid", "React", "Node.js", "GraphQL"],
    },
    {
      step: "02",
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2021 - 2022",
      location: "Mumbai, India",
      description:
        "Specialized in React.js development and modern web technologies, creating responsive web applications and implementing modern development workflows.",
      achievements: [
        "Built 20+ responsive web applications using React and Next.js",
        "Implemented modern CI/CD pipelines reducing deployment time by 50%",
        "Mentored 2 junior developers and conducted code reviews",
        "Optimized application performance achieving 95+ Lighthouse scores",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      step: "01",
      title: "Junior Web Developer",
      company: "Tech Startup Hub",
      period: "2020 - 2021",
      location: "Delhi, India",
      description:
        "Started career focusing on JavaScript and modern web development practices, contributing to various client projects and building strong foundation in web technologies.",
      achievements: [
        "Contributed to 10+ client projects across different industries",
        "Learned modern development workflows and best practices",
        "Built strong foundation in HTML, CSS, JavaScript, and React",
        "Collaborated with cross-functional teams on agile projects",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
    },
  ]

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Shopify Development",
      description: "Custom Shopify themes, apps, and store optimization for maximum performance and conversions.",
      features: ["Custom Theme Development", "App Integration", "Performance Optimization", "SEO Implementation"],
    },
    {
      icon: <Component className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Modern, responsive web applications using React, Next.js, and cutting-edge technologies.",
      features: ["React Applications", "Next.js Development", "Responsive Design", "Modern UI/UX"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "API Integration",
      description: "Seamless integration of third-party APIs and custom backend solutions.",
      features: ["REST API Integration", "GraphQL Implementation", "Database Design", "Server Configuration"],
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed optimization, SEO enhancement, and technical improvements for better user experience.",
      features: ["Speed Optimization", "SEO Enhancement", "Code Refactoring", "Technical Audits"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Manager",
      company: "Fashion Forward",
      content:
        "Lavkush delivered an exceptional Shopify theme that increased our conversion rate by 35%. His attention to detail and technical expertise is outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "TechVenture",
      content:
        "Working with Lavkush was a game-changer for our project. He delivered a complex React application on time and exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Digital Solutions",
      content:
        "Lavkush's expertise in Shopify development helped us launch our online store successfully. Highly recommended for any e-commerce project.",
      rating: 5,
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        {/* Loading Screen */}
        {isLoading && (
          <div className="loading-screen fixed inset-0 z-[100] bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex items-center justify-center overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0">
              {/* Animated Background Shapes */}
              <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

              {/* Floating Particles */}
              {[...Array(20)].map((_, index) => (
                <div
                  key={index}
                  className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>

            {/* Main Loading Content */}
            <div className="relative z-10 text-center text-white">
              {/* Logo Animation */}
              <div className="mb-8">
                <div className="loading-logo w-32 h-32 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-spin"></div>
                  <div
                    className="absolute inset-2 bg-white/10 rounded-full animate-spin"
                    style={{ animationDirection: "reverse", animationDuration: "3s" }}
                  ></div>
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iwQyrFlL2gNbctJauZoALqt8L5vRkZ.png"
                      alt="Lavkush Varma Logo"
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Name Animation */}
                <h1 className="loading-text text-4xl md:text-5xl font-bold mb-2">Lavkush Varma</h1>
                <p className="loading-text text-xl text-white/80">Shopify Developer & React Specialist</p>
              </div>

              {/* Progress Section */}
              <div className="loading-text w-80 max-w-sm mx-auto mb-8">
                {/* Percentage Display */}
                <div className="text-center mb-4">
                  <div className="text-6xl font-bold text-white mb-2">{loadingProgress}%</div>
                  <div className="text-lg text-white/90 font-medium mb-4">{loadingMessage}</div>
                </div>

                {/* Progress Bar */}
                <div className="bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm relative">
                  <div className="loading-progress bg-gradient-to-r from-white to-white/80 h-full rounded-full shadow-lg"></div>
                  {/* Progress percentage text overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white/80 drop-shadow-lg">{loadingProgress}%</span>
                  </div>
                </div>
              </div>

              {/* Loading Text */}
              <div className="loading-text space-y-2">
                <p className="text-lg font-medium">Crafting Digital Experiences</p>
                <div className="flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>

            {/* Geometric Shapes */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-white/30 rotate-45 animate-spin"></div>
              <div
                className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-white/20 animate-spin"
                style={{ animationDuration: "4s" }}
              ></div>
              <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-5 h-5 border border-white/25 rounded-full animate-pulse delay-500"></div>

              {/* Additional animated elements */}
              <div
                className="absolute top-1/2 left-10 w-8 h-8 border-l-2 border-t-2 border-white/20 animate-spin"
                style={{ animationDuration: "6s" }}
              ></div>
              <div className="absolute bottom-1/3 right-10 w-6 h-6 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse delay-700"></div>
            </div>

            {/* Enhanced Radial Progress Indicator */}
            <div className="absolute bottom-10 right-10">
              <div className="w-20 h-20 relative">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/20"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-white loading-circle"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="100, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-bold text-white">{loadingProgress}</div>
                    <div className="text-xs text-white/60">%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-600 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Navigation - Improved */}
        <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iwQyrFlL2gNbctJauZoALqt8L5vRkZ.png"
                    alt="Lavkush Varma Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Lavkush Varma
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Shopify Developer</div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                {["home", "about", "experience", "services", "portfolio", "skills", "testimonials", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 text-sm font-medium hover:scale-105 ${
                        activeSection === section
                          ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                          : "text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20"
                      }`}
                    >
                      {section}
                    </button>
                  ),
                )}
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-xl hover:scale-110 transition-all duration-300"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-gray-600 dark:text-gray-300 rounded-xl hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section - Redesigned */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 p-1 hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-4xl font-bold text-violet-600 dark:text-violet-400">LV</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white w-fit hover:scale-105 transition-all duration-300 shadow-lg">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Available for Work
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white w-fit hover:scale-105 transition-all duration-300 shadow-lg">
                      <Target className="w-4 h-4 mr-2" />
                      3+ Years Experience
                    </Badge>
                  </div>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Lavkush Varma
                  </span>
                </h1>

                <div className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
                  Shopify Developer |{" "}
                  <span className="text-violet-600 dark:text-violet-400">React & Next.js Specialist</span>
                </div>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                  Crafting exceptional e-commerce experiences with cutting-edge technology. Transforming ideas into
                  powerful digital solutions that drive business growth.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => scrollToSection("portfolio")}
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-8 py-4 text-lg rounded-full bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5"
              >
                {/* Technology Circle Animation - Completely Redesigned */}
                <div className="relative flex items-center justify-center h-[600px] w-full">
                  {/* Background Glow Effects */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-full blur-3xl"
                    />
                  </div>

                  {/* Central Tech Hub - Enhanced */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="absolute z-20 w-40 h-40 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute inset-2 border-2 border-dashed border-white/30 rounded-full"
                    />
                    <div className="text-white text-center relative z-10">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="text-3xl font-bold mb-1"
                      >
                        Tech
                      </motion.div>
                      <div className="text-sm opacity-90 font-medium">Stack</div>
                    </div>
                  </motion.div>

                  {/* Main Technology Orbit - Redesigned */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute w-full h-full"
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="relative w-full h-full"
                    >
                      {/* Orbital Path Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[420px] h-[420px] border border-violet-200/30 dark:border-violet-700/30 rounded-full" />
                      </div>

                      {skills.slice(0, 8).map((skill, index) => {
                        const angle = (index * 360) / 8
                        const radius = 200
                        const x = Math.cos((angle * Math.PI) / 180) * radius
                        const y = Math.sin((angle * Math.PI) / 180) * radius

                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                              duration: 0.8,
                              delay: 1 + index * 0.15,
                              type: "spring",
                              stiffness: 100,
                            }}
                            className="absolute"
                            style={{
                              left: `calc(50% + ${x}px - 50px)`,
                              top: `calc(50% + ${y}px - 50px)`,
                            }}
                          >
                            {/* Counter-rotate to keep logos upright */}
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 30,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                              whileHover={{
                                scale: 1.4,
                                y: -12,
                                transition: { type: "spring", stiffness: 300 },
                              }}
                              className="relative group cursor-pointer"
                            >
                              {/* Glow Effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                                animate={{
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                }}
                              />

                              {/* Main Card */}
                              <div
                                className={`relative w-24 h-24 ${skill.bgColor} backdrop-blur-md border-2 ${skill.borderColor} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:border-violet-400 dark:group-hover:border-violet-500`}
                              >
                                {/* Technology Image */}
                                <div className="relative">
                                  <img
                                    src={skill.image || "/placeholder.svg"}
                                    alt={skill.name}
                                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                  />

                                  {/* Floating Badge */}
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.5 + index * 0.1 }}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                                  >
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                  </motion.div>
                                </div>

                                {/* Enhanced Tooltip */}
                                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
                                  <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-3 rounded-xl shadow-2xl border border-gray-700 dark:border-gray-200 min-w-max">
                                    <div className="font-bold text-sm">{skill.name}</div>
                                    <div className="text-xs opacity-75 mt-1">{skill.category}</div>
                                    <div className="text-xs opacity-60 mt-1">{skill.description}</div>
                                    {/* Tooltip Arrow */}
                                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 dark:bg-white rotate-45 border-l border-t border-gray-700 dark:border-gray-200" />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  </motion.div>

                  {/* Secondary Orbit - Smaller Technologies */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute w-full h-full"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 45,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="relative w-full h-full"
                    >
                      {/* Outer Orbital Path */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[520px] h-[520px] border border-purple-200/20 dark:border-purple-700/20 rounded-full" />
                      </div>

                      {skills.slice(8, 12).map((skill, index) => {
                        const angle = (index * 360) / 4 + 45
                        const radius = 250
                        const x = Math.cos((angle * Math.PI) / 180) * radius
                        const y = Math.sin((angle * Math.PI) / 180) * radius

                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.6,
                              delay: 2 + index * 0.2,
                              type: "spring",
                            }}
                            className="absolute"
                            style={{
                              left: `calc(50% + ${x}px - 40px)`,
                              top: `calc(50% + ${y}px - 40px)`,
                            }}
                          >
                            <motion.div
                              animate={{ rotate: -360 }}
                              transition={{
                                duration: 45,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                              whileHover={{
                                scale: 1.3,
                                y: -8,
                                transition: { type: "spring", stiffness: 300 },
                              }}
                              className="relative group cursor-pointer"
                            >
                              <div
                                className={`w-20 h-20 ${skill.bgColor} backdrop-blur-md border-2 ${skill.borderColor} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 opacity-80 group-hover:opacity-100`}
                              >
                                <img
                                  src={skill.image || "/placeholder.svg"}
                                  alt={skill.name}
                                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                                />

                                {/* Simple Tooltip */}
                                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                  <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap shadow-xl">
                                    {skill.name}
                                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45" />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  </motion.div>

                  {/* Animated Connecting Lines */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {[...Array(6)].map((_, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ rotate: index * 60 }}
                        transition={{
                          duration: 40 + index * 5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <div className="w-0.5 h-40 bg-gradient-to-t from-transparent via-violet-300/30 to-transparent" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Floating Particles - Enhanced */}
                  {[...Array(12)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [
                          0,
                          Math.cos((index * 30 * Math.PI) / 180) * (100 + Math.random() * 100),
                          Math.cos(((index * 30 + 180) * Math.PI) / 180) * (100 + Math.random() * 100),
                        ],
                        y: [
                          0,
                          Math.sin((index * 30 * Math.PI) / 180) * (100 + Math.random() * 100),
                          Math.sin(((index * 30 + 180) * Math.PI) / 180) * (100 + Math.random() * 100),
                        ],
                      }}
                      transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                        ease: "easeInOut",
                      }}
                      className="absolute w-1 h-1 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                    />
                  ))}

                  {/* Pulse Rings */}
                  {[...Array(4)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 3, 0],
                        opacity: [0, 0.4, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 1,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-32 h-32 border-2 border-violet-400/50 dark:border-violet-600/50 rounded-full" />
                    </motion.div>
                  ))}

                  {/* Interactive Hover Zone */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className="py-32 px-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-violet-400/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-300/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <SectionHeader
              badge="Get to know me"
              title="About"
              highlightText="Me"
              subtitle="Passionate developer crafting exceptional e-commerce experiences with cutting-edge technology and innovative solutions"
            />

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2 card-item">
                <AnimatedCard hoverEffect="lift">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        I'm a passionate{" "}
                        <span className="text-violet-600 dark:text-violet-400 font-semibold">Shopify developer</span>{" "}
                        with a deep love for creating exceptional e-commerce experiences. My journey began with
                        curiosity about how technology can transform businesses and create meaningful connections
                        between brands and customers.
                      </p>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Specializing in{" "}
                        <span className="text-violet-600 dark:text-violet-400 font-semibold">
                          Shopify theme development
                        </span>
                        , I combine the power of Liquid templating with modern JavaScript frameworks like React JS and
                        Next JS to build scalable, maintainable, and user-friendly platforms.
                      </p>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        When I'm not coding, I enjoy exploring emerging technologies, contributing to open-source
                        projects, and sharing knowledge with the developer community.
                      </p>
                    </div>
                  </CardContent>
                </AnimatedCard>
              </div>

              <div className="space-y-6 card-item">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: "Experience", value: "3+ Years", icon: <TrendingUp className="w-5 h-5" /> },
                    { label: "Location", value: "India", icon: <MapPin className="w-5 h-5" /> },
                    { label: "Availability", value: "Open to Work", icon: <CheckCircle className="w-5 h-5" /> },
                    { label: "Focus", value: "E-commerce", icon: <Target className="w-5 h-5" /> },
                  ].map((item, index) => (
                    <AnimatedCard key={index} hoverEffect="scale" className="p-4">
                      <CardContent className="p-0 flex items-center space-x-3">
                        <div className="text-violet-600 dark))}
                </div>
                <AnimatedCard
                  hoverEffect="glow"
                  className="p-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0 shadow-xl"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Let's Work Together</h3>
                        <p className="opacity-90">Ready to bring your ideas to life</p>
                      </div>
                      <Briefcase className="w-8 h-8" />
                    </div>
                  </CardContent>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={experienceRef} className="py-32 px-6">
          <div className="container mx-auto">
            <SectionHeader
              badge="My Journey"
              title="Work"
              highlightText="Experience"
              subtitle="My professional journey and key achievements in web development, showcasing growth and expertise"
            />

            <div className="max-w-6xl mx-auto">
              {experience.map((exp, index) => (
                <div key={index} className="relative mb-16 last)}
                    </div>

                    {/* Content */}
                    <AnimatedCard
                      hoverEffect="lift"
                      className="flex-1 border-violet-200 dark:border-gray-700 shadow-xl"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-violet-600 dark:text-violet-400 font-semibold text-lg">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Calendar className="w-4 h-4 mr-2" />
                              {exp.period}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="w-4 h-4 mr-2" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-violet-600 dark:text-violet-400" />
                            Key Achievements
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start space-x-3 group">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Settings className="w-5 h-5 mr-2 text-violet-600 dark:text-violet-400" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <Badge
                                key={idx}
                                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white hover))}
                          </div>
                        </CardContent>
                    </AnimatedCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          ref={servicesRef}
          className="py-32 px-6 bg-gradient-to-br from-gray-50 to-violet-50 dark:from-gray-900 dark:to-violet-950/20 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-violet-400/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-300/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <SectionHeader
              badge="What I Do Best"
              title="Services I"
              highlightText="Offer"
              subtitle="Comprehensive web development solutions designed to transform your digital presence and drive business growth"
            />

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="service-item group"
                >
                  <AnimatedCard
                    hoverEffect="lift"
                    className="relative h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl overflow-hidden"
                  >
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-lg"></div>

                    <CardContent className="relative p-8 h-full flex flex-col">
                      {/* Icon Section */}
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                          <div className="relative p-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            {service.icon}
                          </div>
                        </div>
                        <div className="ml-6">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center space-x-3 group/feature"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full group-hover/feature:scale-150 transition-transform duration-200"></div>
                              <span className="text-gray-700 dark:text-gray-300 group-hover/feature:text-violet-600 dark:group-hover/feature:text-violet-400 transition-colors duration-200">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </CardContent>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>

            {/* Call to Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCard
                hoverEffect="glow"
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 border-0 shadow-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <CardContent className="relative p-12 text-white">
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>
                    <p className="text-xl opacity-90 mb-8 leading-relaxed">
                      Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={() => scrollToSection("contact")}
                        className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Start Your Project
                      </Button>
                      <Button
                        onClick={() => scrollToSection("portfolio")}
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View My Work
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" ref={portfolioRef} className="py-32 px-6">
          <div className="container mx-auto">
            <SectionHeader
              badge="My Work"
              title="Featured"
              highlightText="Projects"
              subtitle="Showcasing innovative solutions that blend creativity with cutting-edge technology to deliver exceptional results"
            />

            <div className="space-y-32">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`grid lg, idx) => (
                            <div key={idx} className="flex items-center space-x-2 group">
                              <div className="w-2 h-2 bg-violet-500 rounded-full group-hover))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide flex items-center">
                          <Settings className="w-4 h-4 mr-2 text-violet-600 dark:text-violet-400" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-gradient-to-r from-violet-500 to-purple-600 text-white hover))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          className={`bg-gradient-to-r ${project.color} text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          className="border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          ref={skillsRef}
          className="py-32 px-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20"
        >
          <div className="container mx-auto">
            <SectionHeader
              badge="My Expertise"
              title="Technical"
              highlightText="Skills"
              subtitle="Technologies and tools I use to build exceptional digital experiences with modern development practices"
            />

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 auto-rows-fr">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item h-full">
                  <AnimatedCard
                    hoverEffect="scale"
                    className={`${skill.bgColor} ${skill.borderColor} border-2 p-6 text-center h-full flex flex-col`}
                  >
                    <CardContent className="p-0 flex-1 flex flex-col justify-between">
                      {/* Technology Image */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-white dark))}
            </div>

            {/* Skills Categories Summary */}
            <div className="mt-16 category-summary-grid">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Frontend",
                    count: "5+",
                    description: "Modern UI frameworks & libraries",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    title: "Backend",
                    count: "3+",
                    description: "Server-side technologies",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    title: "E-commerce",
                    count: "2+",
                    description: "Specialized platforms",
                    color: "from-purple-500 to-violet-500",
                  },
                  {
                    title: "Tools",
                    count: "4+",
                    description: "Development & design tools",
                    color: "from-orange-500 to-red-500",
                  },
                ].map((category, index) => (
                  <AnimatedCard
                    key={index}
                    hoverEffect="lift"
                    className="text-center p-6 border-0 bg-white/80 dark))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" ref={testimonialsRef} className="py-32 px-6">
          <div className="container mx-auto">
            <SectionHeader
              badge="Testimonials"
              title="Client"
              highlightText="Testimonials"
              subtitle="What my clients say about working with me and the exceptional results we've achieved together"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <AnimatedCard hoverEffect="lift" className="h-full border-violet-200 dark)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current hover))}
                        </div>
                      </div>
                    </CardContent>
                  </AnimatedCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className="py-32 px-6 bg-gradient-to-br from-gray-50 to-violet-50 dark:from-gray-800 dark:to-violet-950/20"
        >
          <div className="container mx-auto">
            <SectionHeader
              badge="Let's Talk"
              title="Get In"
              highlightText="Touch"
              subtitle="Ready to bring your next project to life? Let's discuss how we can work together to create something amazing"
            />

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="contact-item">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      I'm always excited to discuss new opportunities, innovative projects, or just chat about the
                      latest in web development. Drop me a message and let's start a conversation!
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: <Mail className="w-5 h-5" />,
                        label: "Email",
                        value: "lavkush3844@gmail.com",
                        href: "mailto:lavkush3844@gmail.com",
                      },
                      {
                        icon: <Github className="w-5 h-5" />,
                        label: "GitHub",
                        value: "github.com/lavkush3844",
                        href: "https://github.com/lavkush3844",
                      },
                      {
                        icon: <Linkedin className="w-5 h-5" />,
                        label: "LinkedIn",
                        value: "linkedin.com/in/lavkush3844",
                        href: "https://linkedin.com/in/lavkush3844",
                      },
                    ].map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg bg-white/80 dark))}
                  </div>
                </div>
              </div>

              <div className="contact-form-card">
                <AnimatedCard
                  hoverEffect="lift"
                  className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl"
                >
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                      Send a Message
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Fill out the form below and I'll get back to you
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Your Name"
                          className="border-violet-200 dark:border-gray-600 focus:border-violet-500 bg-white/50 dark:bg-gray-700/50 hover:border-violet-400 transition-colors duration-300"
                        />
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="border-violet-200 dark:border-gray-600 focus:border-violet-500 bg-white/50 dark:bg-gray-700/50 hover:border-violet-400 transition-colors duration-300"
                        />
                      </div>
                      <Input
                        placeholder="Subject"
                        className="border-violet-200 dark:border-gray-600 focus:border-violet-500 bg-white/50 dark:bg-gray-700/50 hover:border-violet-400 transition-colors duration-300"
                      />
                      <Textarea
                        placeholder="Your Message"
                        rows={6}
                        className="border-violet-200 dark:border-gray-600 focus:border-violet-500 bg-white/50 dark:bg-gray-700/50 hover:border-violet-400 transition-colors duration-300"
                      />
                      <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Footer - Enhanced Design */}
        <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-violet-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Main Footer Content */}
            <div className="py-16">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                {/* Brand Section - Enhanced */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iwQyrFlL2gNbctJauZoALqt8L5vRkZ.png"
                        alt="Lavkush Varma Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        Lavkush Varma
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        Shopify Developer & React Specialist
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-md">
                    Passionate about creating exceptional e-commerce experiences with modern web technologies.
                    Specializing in React, Next.js, and cutting-edge development solutions.
                  </p>

                  {/* Social Links - Enhanced */}
                  <div className="flex space-x-3">
                    {[
                      {
                        icon: <Github className="w-5 h-5" />,
                        href: "https://github.com/lavkush3844",
                        label: "GitHub",
                        color: "hover:bg-gray-800",
                      },
                      {
                        icon: <Linkedin className="w-5 h-5" />,
                        href: "https://linkedin.com/in/lavkush3844",
                        label: "LinkedIn",
                        color: "hover:bg-blue-600",
                      },
                      {
                        icon: <Mail className="w-5 h-5" />,
                        href: "mailto:lavkush3844@gmail.com",
                        label: "Email",
                        color: "hover:bg-red-500",
                      },
                      {
                        icon: <Twitter className="w-5 h-5" />,
                        href: "#",
                        label: "Twitter",
                        color: "hover:bg-blue-400",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-white dark))}
                  </div>
                </div>

                {/* Quick Links - Enhanced */}
                <div>
                  <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full mr-3"></div>
                    Quick Links
                  </h4>
                  <ul className="space-y-3">
                    {["About", "Experience", "Services", "Portfolio", "Skills", "Contact"].map((link) => (
                      <li key={link}>
                        <button
                          onClick={() => scrollToSection(link.toLowerCase())}
                          className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 flex items-center group hover:scale-105"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services - Enhanced */}
                <div>
                  <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full mr-3"></div>
                    Services
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Shopify Development",
                      "React Applications",
                      "Next.js Development",
                      "API Integration",
                      "Performance Optimization",
                      "Custom Solutions",
                    ].map((service) => (
                      <li key={service} className="flex items-start group">
                        <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Footer - Enhanced */}
            <div className="border-t border-gray-200 dark:border-gray-700 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                  <span className="text-gray-600 dark:text-gray-400">using</span>
                  <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs hover:scale-105 transition-all duration-300">
                    Next.js & Tailwind CSS
                  </Badge>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>© 2024 Lavkush Varma.</span>
                  <span className="hidden sm:inline">All rights reserved.</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )\
}
