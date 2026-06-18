import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail, Download, ArrowDown, ExternalLink } from "lucide-react";
import resumePdf from "./resume/ANJU_JACOB_RESUME.pdf";

const roles = [
  "Python Full Stack Developer",
  "Django Developer",
  "REST API Developer",
  "ERP Application Developer",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/anju1jacob/", label: "GitHub", color: "#ffffff" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anju-jacob-35a591162/", label: "LinkedIn", color: "#0a66c2" },
  {
  icon: Mail,
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=jacob.anju98@gmail.com",
  label: "Email",
  color: "#00d4ff",
}
];

function TypeWriter({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setTextIdx(i => (i + 1) % texts.length);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, textIdx, texts]);

  return (
    <span className="text-primary font-mono">
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

export function Banner() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-sm font-mono tracking-wider">Available for work</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-lg mb-2 font-medium tracking-wide"
              >
                Hi there, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Anju <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>Jacob</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl mb-6 h-8"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                <TypeWriter texts={roles} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-secondary-foreground text-lg leading-relaxed mb-10 max-w-lg"
              >
                Enthusiastic and dedicated Python Full Stack Developer with 1.5+ years of experience in designing and
developing scalable web applications using Python, Django, Angular, and PostgreSQL.  
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <a
                  href="#projects"
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #0099cc)" }}
                >
                  View My Work
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <button
                  onClick={() => {
                    try { window.open(resumePdf, "_blank"); } catch (e) {}
                    const a = document.createElement("a");
                    a.href = resumePdf;
                    a.download = "ANJU_JACOB_RESUME.pdf";
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                  }}
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border border-primary/40 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                  Download CV
                </button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-4"
              >
                <span className="text-muted-foreground text-sm">Find me on</span>
                <div className="flex gap-3">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors duration-200"
                    >
                      <link.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-[360px] h-[360px] rounded-full border border-primary/10"
                style={{
                  borderTopColor: "rgba(0,212,255,0.4)",
                  borderRightColor: "rgba(124,58,237,0.2)",
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-[420px] h-[420px] rounded-full border border-accent/10"
                style={{
                  borderTopColor: "rgba(124,58,237,0.3)",
                  borderLeftColor: "rgba(0,212,255,0.15)",
                }}
              />
            </div>

            {/* Profile image container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Glow behind image */}
              <div className="absolute inset-4 rounded-full blur-2xl opacity-40" style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }} />

              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_rgba(0,212,255,0.2)]">
                <img
                  src="/images/profile/Anju_jacob.jpg"
                  alt="Anju Jacob - Python Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating stat badges */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/3 bg-card border border-border rounded-xl px-4 py-2 shadow-xl"
              >
                <p className="text-primary font-bold text-xl" style={{ fontFamily: "Outfit, sans-serif" }}>1.5+</p>
                <p className="text-muted-foreground text-xs">Years Exp.</p>
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 bottom-1/3 bg-card border border-border rounded-xl px-4 py-2 shadow-xl"
              >
                <p className="text-accent font-bold text-xl" style={{ fontFamily: "Outfit, sans-serif" }}>3+</p>
                <p className="text-muted-foreground text-xs">Projects</p>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 5, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-1/3 bg-card border border-border rounded-xl px-3 py-1.5 shadow-xl"
              >
                <p className="text-xs text-foreground font-mono">⭐ 5.0 rated</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "1.5+", label: "Years Experience" },
            { value: "3+", label: "Projects Completed" },
            { value: "3+", label: "Happy Clients" },
            { value: "10+", label: "Technologies" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl border border-border bg-card/50">
              <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="text-primary" />
      </motion.div>
    </section>
  );
}
