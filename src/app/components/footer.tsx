import Link from "next/link"
import { Flower2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0118] border-t border-purple-500/10">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Flower2 className="w-6 h-6 text-[#EC4899]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#EC4899] to-[#A855F7] bg-clip-text text-transparent">
                BloomScroll
              </span>
            </Link>
            <p className="text-purple-200/60 max-w-sm">
              Transform your social media experience with mindful engagement and meaningful connections.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-purple-100 font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Integrations', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-purple-200/60 hover:text-purple-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-purple-100 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-purple-200/60 hover:text-purple-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-purple-100 font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Community', 'Contact', 'Privacy', 'Terms'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-purple-200/60 hover:text-purple-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-purple-200/60 text-sm">
              © 2025 BloomScroll. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-purple-200/60 hover:text-purple-200 transition-colors text-sm"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}