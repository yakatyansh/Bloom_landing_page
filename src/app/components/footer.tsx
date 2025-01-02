import Link from "next/link"

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-pink-50/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-pink-600">
              Bloom
            </Link>
            <p className="mt-4 text-sm text-pink-600/80">
              Nurturing digital wellbeing through mindful technology.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-pink-900">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-pink-600/80 hover:text-pink-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-pink-100 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-pink-600/80">
              © {new Date().getFullYear()} Bloom. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/terms"
                className="text-sm text-pink-600/80 hover:text-pink-600"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-pink-600/80 hover:text-pink-600"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-pink-600/80 hover:text-pink-600"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}