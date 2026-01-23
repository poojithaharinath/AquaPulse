import { Linkedin, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        {/* Main Grid: 4 Columns (Brand 2, Product 1, Contact 1) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
          {/* Brand & Mission - Aligned to Start */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <img
                src="/images/Logo.png"
                alt="AquaPulse Sensor Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
              <div className="flex items-center">
                <p className="text-xs font-bold tracking-wider uppercase leading-tight">
                  <span className="bg-gradient-to-r from-cyan-light via-cyan to-pulse-green bg-clip-text text-transparent">
                    Collect
                  </span>
                  <span className="text-white/40 mx-1">-</span>
                  <span className="bg-gradient-to-r from-cyan via-pulse-green to-cyan-light bg-clip-text text-transparent">
                    Analyse
                  </span>
                  <span className="text-white/40 mx-1">-</span>
                  <span className="bg-gradient-to-r from-pulse-green via-cyan-light to-cyan bg-clip-text text-transparent">
                    Recommend
                  </span>
                </p>
              </div>
            </div>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              AI-powered continuous water quality monitoring for profitable
              shrimp farming. 
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-white text-lg">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrated "Get in Touch" Section from Image */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-white text-lg">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm font-medium">+91 88850 45508</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm break-all font-medium">info@advancedsensorsai.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-snug font-medium">
                  Amaravathi, AP | London, UK
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-[13px]">
            © 2026 Advanced Sensors AI. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-[13px]">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-[13px]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;