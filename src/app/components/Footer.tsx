import { motion } from "motion/react";
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/anju1jacob/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anju-jacob-35a591162/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jacob.anju98@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border" style={{ background: "#060b14" }}>
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Code2 size={18} className="text-primary" />
              </div>
              <span className="font-bold text-foreground text-lg" style={{ fontFamily: "Outfit, sans-serif" }}>Anju Jacob</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Python Full Stack Developer building scalable web applications with Django, FastAPI, and React.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-4">Connect</p>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <link.icon size={17} />
                </motion.a>
              ))}
            </div>
            <a href="mailto:jacob.anju98@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              jacob.anju98@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs flex items-center gap-1.5">
            © {currentYear} Anju Jacob Portfoilo || All right reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group"
          >
            Back to top <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
