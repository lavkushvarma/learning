"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Menu,
  X,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  ArrowRight,
  Download,
  Star,
  Users,
  Target,
  Zap,
  Heart,
  MessageSquare,
} from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
      {title}
    </h2>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
  </motion.div>
)

const AnimatedCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
  >
    {children}
  </motion.div>
)

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!isLoading && heroRef.current) {
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      )

      gsap.fromTo(
        ".hero-image",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        }
      )
    }
  }, [isLoading])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const skills = [
    {
      category: "E-commerce & Platforms",
      icon: "🛒",
      items: ["Shopify", "Shopify Plus", "Custom Themes", "App Development", "Liquid"],
    },
    {
      category: "Frontend Development",
      icon: "⚛️",
      items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3"],
    },
    {
      category: "Styling & UI",
      icon: "🎨",
      items: ["Tailwind CSS", "Sass/SCSS", "Styled Components", "CSS Modules", "Responsive Design"],
    },
    {
      category: "Backend & APIs",
      icon: "⚙️",
      items: ["Node.js", "RESTful APIs", "GraphQL", "Shopify API", "Webhook Integration"],
    },
    {
      category: "Tools & Workflow",
      icon: "🔧",
      items: ["Git/GitHub", "VS Code", "Figma", "Postman", "Chrome DevTools"],
    },
    {
      category: "Performance & SEO",
      icon: "🚀",
      items: ["Web Vitals", "Lighthouse", "SEO Best Practices", "Performance Optimization", "Analytics"],
    },
  ]

  const projects = [
    {
      title: "Custom Shopify Theme",
      description: "Built a fully responsive, high-converting Shopify theme with advanced filtering and cart features",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Shopify", "Liquid", "JavaScript", "SCSS"],
      link: "#",
      metrics: { sales: "+150%", speed: "95/100", conversion: "+40%" },
    },
    {
      title: "E-commerce Dashboard",
      description: "React-based admin dashboard for managing multiple Shopify stores with real-time analytics",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "Shopify API", "Charts"],
      link: "#",
      metrics: { stores: "50+", users: "500+", uptime: "99.9%" },
    },
    {
      title: "Product Customizer App",
      description: "Shopify app allowing customers to customize products in real-time with 3D preview",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Three.js", "Shopify", "TypeScript"],
      link: "#",
      metrics: { customizations: "10K+", rating: "4.9/5", installs: "2K+" },
    },
  ]

  const experience = [
    {
      role: "Senior Shopify Developer",
      company: "E-commerce Solutions Inc.",
      period: "2021 - Present",
      description:
        "Leading development of custom Shopify solutions for enterprise clients. Specializing in theme development, app integration, and performance optimization.",
      achievements: [
        "Increased client conversion rates by average of 35%",
        "Developed 20+ custom Shopify themes",
        "Led team of 5 developers",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2019 - 2021",
      description:
        "Focused on creating responsive web applications using React and Next.js. Worked closely with designers to implement pixel-perfect interfaces.",
      achievements: [
        "Built 30+ responsive websites",
        "Improved site performance by 60%",
        "Mentored junior developers",
      ],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      period: "2017 - 2019",
      description:
        "Provided web development services to small businesses and startups. Specialized in Shopify store setup and customization.",
      achievements: [
        "Completed 50+ projects",
        "Maintained 5-star rating",
        "Built long-term client relationships",
      ],
    },
  ]

  const services = [
    {
      icon: Code2,
      title: "Custom Theme Development",
      description: "Bespoke Shopify themes tailored to your brand identity and business needs.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom Features"],
    },
    {
      icon: Zap,
      title: "Store Optimization",
      description: "Enhance your store's performance, speed, and conversion rates.",
      features: ["Speed Optimization", "UX Improvements", "A/B Testing", "Analytics Setup"],
    },
    {
      icon: Target,
      title: "App Development",
      description: "Custom Shopify apps to extend your store's functionality.",
      features: ["Custom Features", "API Integration", "Scalable Solutions", "Ongoing Support"],
    },
    {
      icon: Briefcase,
      title: "Consultation & Strategy",
      description: "Expert guidance on e-commerce strategy and technical decisions.",
      features: ["Technical Audit", "Strategy Planning", "Best Practices", "Growth Roadmap"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Fashion Boutique",
      content:
        "Lavkush transformed our Shopify store completely. Sales increased by 150% in just 3 months. His attention to detail and technical expertise is unmatched.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Chen",
      role: "Founder, Tech Gadgets",
      content:
        "Working with Lavkush was a game-changer. He delivered a custom theme that perfectly matched our brand and significantly improved our conversion rate.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, Beauty Co",
      content:
        "The custom app Lavkush developed for us has been instrumental in scaling our business. Professional, responsive, and highly skilled.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center z-50">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Code2 className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Lavkush Varma
          </motion.h2>
          <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{progress}%</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                LV
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors relative group ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-blue-200 dark:border-blue-800">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white dark:bg-gray-900 z-40 md:hidden pt-20"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 dark:bg-cyan-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </motion.div>

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full hero-text"
            >
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Available for Projects</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight hero-text">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Lavkush Varma
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 hero-text">
              Shopify Developer & React Specialist
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 hero-text">
              Crafting exceptional e-commerce experiences that drive results. Specializing in custom Shopify themes,
              React applications, and performance optimization.
            </p>

            <div className="flex flex-wrap gap-4 hero-text">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center space-x-6 hero-text">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          <motion.div
            className="relative hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Lavkush Varma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">5+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      </section>

      <section id="about" className="py-32 px-6 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto">
          <SectionHeader
            icon={Users}
            title="About Me"
            subtitle="Passionate developer with a focus on creating exceptional digital experiences"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="About me"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Building Digital Experiences That Matter
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating high-performance Shopify
                stores and React applications. My passion lies in combining clean code with stunning design to deliver
                exceptional user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I've helped businesses increase their revenue by an average of 150% through strategic development and
                optimization. My approach focuses on understanding business goals and translating them into technical
                solutions that drive real results.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: "100+", label: "Projects Completed" },
                  { number: "50+", label: "Happy Clients" },
                  { number: "5+", label: "Years Experience" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {stat.number}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6">
        <div className="container mx-auto">
          <SectionHeader
            icon={Code2}
            title="Skills & Expertise"
            subtitle="A comprehensive toolkit for building modern web applications"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="h-full border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-3xl">{skillGroup.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                    </div>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                          <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto">
          <SectionHeader
            icon={Briefcase}
            title="Featured Projects"
            subtitle="Showcasing my best work and successful collaborations"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="overflow-hidden border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white hover:bg-gray-100 text-gray-900"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{value}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 capitalize">{key}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 px-6">
        <div className="container mx-auto">
          <SectionHeader
            icon={GraduationCap}
            title="Experience"
            subtitle="My professional journey in web development"
          />

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="mb-12 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-cyan-500" />
                  <div className="ml-8">
                    <div className="absolute left-0 w-3 h-3 bg-blue-500 rounded-full -translate-x-[5px] mt-1.5" />
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto">
          <SectionHeader
            icon={Target}
            title="Services"
            subtitle="Comprehensive solutions for your e-commerce needs"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="h-full border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 px-6">
        <div className="container mx-auto">
          <SectionHeader
            icon={MessageSquare}
            title="Client Testimonials"
            subtitle="What clients say about working with me"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="h-full border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            icon={Mail}
            title="Get In Touch"
            subtitle="Let's discuss your next project and bring your ideas to life"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Have a project in mind? I'd love to hear about it. Send me a message and I'll respond as soon as
                  possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">contact@lavkushvarma.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">github.com/lavkushvarma</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">linkedin.com/in/lavkushvarma</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Lavkush Varma</span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Lavkush Varma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
