"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "https://bloomscroll.substack.com/p/introducing-bloom", label: "Blog" }
  ]

  if (!mounted) {
    return null 
  }

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-50 backdrop-blur-md bg-[#0a0118]/80 border-b border-purple-500/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with bloom animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/" 
              className="text-xl font-bold bg-gradient-to-r from-[#EC4899] to-[#A855F7] 
                bg-clip-text text-transparent relative group"
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ['0%', '100%'],
                  opacity: [0.8, 1] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="relative z-10"
              >
                BloomScroll
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/20 to-[#A855F7]/20 
                  blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="relative"
              >
                <Link 
                  href={item.href} 
                  className={`relative inline-block py-2 text-purple-200/80 hover:text-purple-200 
                    transition-colors ${pathname === item.href ? 'text-purple-200' : ''}`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r 
                        from-[#EC4899] to-[#A855F7]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                className="text-purple-200 hover:bg-purple-500/10 transition-all duration-300"
              >
                Sign In
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] hover:from-[#D946EF] 
                  hover:to-[#9333EA] text-white transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}