import { Facebook, Instagram } from "lucide-react";

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
];

const footerLinks = {
  Services: [
    { label: "Graphic Design", href: "#services" },
    { label: "Custom Apparel", href: "#services" },
    { label: "T-Shirt Branding", href: "#services" },
    { label: "Branding Machines", href: "#shop" },
  ],
  Classes: [
    { label: "Graphic Design Class", href: "#classes" },
    { label: "T-Branding Class", href: "#classes" },
    { label: "Corporate Training", href: "#contact" },
    { label: "Group Bookings", href: "#contact" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Get a Quote", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-6">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/Images/ink-logo.png" alt="TechInk Logo" className="h-20 w-auto object-contain bg-white rounded-lg p-1" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your trusted partner in graphic design, custom apparel, and
              branding solutions. Empowering businesses and individuals across
              South Africa.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-orange-500 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} InkSisanda Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-gray-500 text-sm">
              Proudly South African 🇿🇦
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
