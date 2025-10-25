

import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Lavkush Varma - Shopify Developer | React JS & Next JS Specialist",
  description:
    "Professional portfolio of Lavkush Varma, a passionate Shopify developer specializing in React JS, Next JS, and modern e-commerce solutions. Creating exceptional digital experiences with cutting-edge technology.",
  keywords:
    "Shopify Developer, React JS, Next JS, JavaScript, Liquid Templates, E-commerce, Web Development, Frontend Developer, Full Stack Developer",
  authors: [{ name: "Lavkush Varma" }], 
  openGraph: {
    title: "Lavkush Varma - Shopify Developer & React Specialist",
    description: "Professional portfolio showcasing modern e-commerce solutions and web development expertise.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavkush Varma - Shopify Developer",
    description: "Creating exceptional e-commerce experiences with modern web technologies",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
