import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "#" },
    { name: "Women", href: "#" },
    { name: "Men", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Sale", href: "#" },
  ],
  help: [
    { name: "FAQ", href: "/help" },
    { name: "Shipping & Returns", href: "/help" },
    { name: "Size Guide", href: "/help" },
    { name: "Track Order", href: "/help" },
    { name: "Privacy Policy", href: "#" },
  ],
  company: [
    { name: "Our Story", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Stores", href: "#" },
  ],
  contact: [
    { label: "WhatsApp", href: "https://wa.me/85280090622" },
    { label: "Phone", value: "+852 8009 06220 (Toll Free)" },
    { label: "Email", href: "mailto:contact@valence.com" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-light mb-4">
              Join the movement
            </h3>
            <p className="text-background/60 mb-8">
              Subscribe for early access to new collections, exclusive offers, and more.
            </p>
            <form className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-background/20 text-background placeholder:text-background/40 focus:border-background/50"
              />
              <Button 
                type="submit"
                className="px-6 bg-background text-foreground hover:bg-background/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-light tracking-[0.15em]">VALENCE</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Premium athleisure designed for movement, comfort, and everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-background/80">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-background/80">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-background/80">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-background/80">Contact Us</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, idx) => (
                <li key={idx}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <p className="text-sm text-background/60">
                      <span className="font-medium text-background/80">{item.label}:</span> {item.value}
                    </p>
                  )}
                </li>
              ))}
              <li className="text-xs text-background/40 mt-4 pt-2 border-t border-background/10">
                <p>Monday to Sunday & Public Holidays</p>
                <p>9AM - 6PM GMT</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            2026 VALENCE. All rights reserved.
          </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
