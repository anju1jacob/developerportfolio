import { motion } from "motion/react";
import { Download, Code, Database, Server, Zap, Coffee, Globe, Shield } from "lucide-react";
import resumePdf from "./resume/ANJU_JACOB_RESUME.pdf";

const skills = [
  { icon: Code, title: "Frontend", description: "Angular, HTML5, CSS3,JavaScript, Bootstrap", color: "#00d4ff" },
  { icon: Server, title: "Backend", description: "Python, Django, Django REST Framework,Flask", color: "#7c3aed" },
  { icon: Database, title: "Databases", description: "PostgreSQL, MySQL", color: "#06b6d4" },
  { icon: Zap, title: "DevOps", description: "Git, GitLab, VS Code, Postman", color: "#8b5cf6" },
  { icon: Globe, title: "APIs", description: "REST APIs, API Integration, JSON, HTTP", color: "#00d4ff" },
  { icon: Shield, title: "Security", description: "OOP, Database Design, Debugging, Agile, Problem Solving", color: "#7c3aed" },
];

const proficiencies = [
  { label: "Python / Django", pct: 95 },
  { label: "REST API Development", pct: 88 },
  { label: "Angular / JavaScript ", pct: 85 },
  { label: "PostgreSQL / MySQL", pct: 88 },
  { label: "Git & Version Control", pct: 82 },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>About Me</h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative mb-8">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 rounded-full" style={{ background: "linear-gradient(180deg, #00d4ff, #7c3aed)" }} />
              <div className="pl-6 space-y-4">
                <p className="text-secondary-foreground text-lg leading-relaxed">
                  I&apos;m a passionate <span className="text-primary font-medium">Python Full Stack Developer</span> 
                  over 1.5+ years of experience building scalable web applications using Python, Django, Angular, and PostgreSQL.
                </p>
                <p className="text-secondary-foreground text-lg leading-relaxed">
                  I specialize in backend development, REST API design, and full-stack business applications,
                   with hands-on experience in ERP systems and workflow automation.
                    I'm passionate about writing clean, maintainable code and continuously 
                    learning modern technologies to build impactful software.
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Location", value: "Kottayam, Kerala, India" },
                { label: "Email", value: "jacob.anju98@gmail.com" },
                { label: "Availability", value: "Open to offers" },
                { label: "Languages", value: "English, German A2" },
              ].map((fact, i) => (
                <div key={i} className="p-4 rounded-xl border border-border bg-card/50">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{fact.label}</p>
                  <p className="text-foreground font-medium text-sm">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  try {
                    window.open(resumePdf, "_blank");
                  } catch (e) {
                    // ignore
                  }
                  const a = document.createElement("a");
                  a.href = resumePdf;
                  a.download = "ANJU_JACOB_RESUME.pdf";
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                }}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,212,255,0.35)]"
                style={{ background: "linear-gradient(135deg, #00d4ff, #0099cc)" }}
              >
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </button>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-border text-foreground hover:border-primary/50 hover:bg-card transition-all duration-300"
              >
                <Coffee size={16} />
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>

          {/* Skill proficiency bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>Core Proficiencies</h3>
            <div className="space-y-5">
              {proficiencies.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium text-sm">{item.label}</span>
                    <span className="text-primary font-mono text-sm">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15 + 0.4, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-6 rounded-2xl border border-border bg-card/60 hover:border-primary/40 transition-all duration-300 cursor-default"
              style={{ boxShadow: "0 0 0 0 transparent" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
              >
                <skill.icon size={22} style={{ color: skill.color }} />
              </div>
              <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
