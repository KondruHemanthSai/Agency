import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Website Development", path: "/services" },
    { name: "Social Media", path: "/services" },
    { name: "Branding", path: "/services" },
    { name: "Marketing", path: "/services" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/buildoholics" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/buildoholics/" },
  { name: "Email", icon: Mail, href: "mailto:buildoholics@gmail.com" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#4F8EF7]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center pointer-events-auto mb-6">
              <img
                src="/assets/logo.svg"
                alt="Buildoholics Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-[#999] text-sm leading-relaxed mb-6">
              Building digital presence that converts for startups and growing businesses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="h-10 w-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#999] hover:text-[#4F8EF7] hover:border-[#4F8EF7]/30 hover:bg-[#4F8EF7]/5 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.15em] mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#999] hover:text-[#4F8EF7] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#999] hover:text-[#4F8EF7] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.15em] mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:buildoholics@gmail.com"
                  className="text-sm text-[#999] hover:text-[#4F8EF7] transition-colors duration-300"
                >
                  buildoholics@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://cal.com/buildoholics"
                  className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 rounded-full bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 text-[#4F8EF7] text-sm font-medium hover:bg-[#4F8EF7]/15 transition-all duration-300"
                >
                  Book a Call
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666]">
            © {new Date().getFullYear()} Buildoholics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#666] hover:text-[#4F8EF7] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#666] hover:text-[#4F8EF7] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
