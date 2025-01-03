import { Button } from "./ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-[#0a0118]/80 border-b border-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with bloom animation */}
          <Link 
            href="/" 
            className="text-xl font-bold bg-gradient-to-r from-[#EC4899] to-[#A855F7] bg-clip-text text-transparent hover:animate-bloom-hover"
          >
            BloomScroll
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-purple-200/80 hover:text-purple-200 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-purple-200/80 hover:text-purple-200 transition-colors">
              About
            </Link>
            <Link href="https://bloomscroll.substack.com/p/introducing-bloom" className="text-purple-200/80 hover:text-purple-200 transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-purple-200 hover:bg-purple-500/10">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] hover:from-[#D946EF] hover:to-[#9333EA] text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}