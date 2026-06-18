import { motion } from "motion/react";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Jr. Software Developer",
    company: "Travidux Technologies.",
    location: "Chalakudy, Thrissur, Kerala",
    period: "July 2024 –  June 2026",
    type: "Full-time",
    description: [
      "Joined the ongoing development of RomsnRaks, a comprehensive ERP system tailored for grooming service businesses.",
      "Developed backend features using Python and Django for booking and workflow management.",
      "Implemented customer and pet management modules allowing registration and management of multiple pets.",
      "Built dynamic service selection functionality based on pet species and breed.",
      "Developed a grooming appointment booking system with timeslot scheduling.",
      "Integrated an automated WhatsApp feedback module that sends feedback links to customers after grooming servicecompletion to collect service ratings and improve customer experience.",
    ],
    tech: ["Python", "Django", "FastAPI", "React", "TypeScript", "Docker", "AWS"],
    color: "#00d4ff",
  },
  {
    title: "Python Full Stack Developer Intern",
    company: "Quest Innovative Solutions.",
    location: "Ernakulam, Kerala",
    period: "2023 June - Dec 2023",
    type: "Full-time",
    description: [
      "Designed responsive user interfaces using HTML, CSS,Bootstrap, and JavaScript.",
      "Developed and tested backend logic using Django and Flask with MySQL",
      "Collaborated with team members to manage tasks and track project progress using Agile methodology.",
    ],
    tech: ["Python", "Flask", "PostgreSQL", "Redis", "React", "AWS S3"],
    color: "#7c3aed",
  },
  {
    title: "Python Developer",
    company: "Infox Technologies",
    location: "Ernakulam, Kerala",
    period: "Jan 2021 – June 2021",
    type: "Full-time",
    description: [
      "Assisted in building dynamic web applications using Pythonand Django",
      "Participated in all stages of development including UI design, backend logic, and testing.",
      "Focused on ensuring application performance, code readability, and cross-browser compatibility.",
    ],
    tech: ["Python", "Django", "Celery", "Redis", "PostgreSQL", "Docker"],
    color: "#06b6d4",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: "linear-gradient(180deg, #080d1a 0%, #0a1020 100%)" }}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">My journey</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Work Experience</h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }} />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative mb-12 last:mb-0 md:grid md:grid-cols-2 gap-8"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 top-6 border-2 border-background z-10 shadow-[0_0_12px_currentColor]"
                style={{ background: exp.color, color: exp.color }}
              />

              {/* Left side: meta (even items right-aligned, odd items show normally) */}
              {index % 2 === 0 ? (
                <>
                  <div className="hidden md:flex flex-col items-end pr-8 pt-4">
                    <span className="text-muted-foreground font-mono text-sm">{exp.period}</span>
                    <span className="text-xs text-muted-foreground mt-1">{exp.location}</span>
                    <span className="mt-2 px-2 py-0.5 rounded text-xs font-medium border" style={{ borderColor: `${exp.color}40`, color: exp.color, background: `${exp.color}10` }}>{exp.type}</span>
                  </div>
                  <div className="ml-12 md:ml-0 md:pl-8">
                    <ExperienceCard exp={exp} />
                  </div>
                </>
              ) : (
                <>
                  <div className="ml-12 md:ml-0 md:pr-8">
                    <ExperienceCard exp={exp} />
                  </div>
                  <div className="hidden md:flex flex-col items-start pl-8 pt-4">
                    <span className="text-muted-foreground font-mono text-sm">{exp.period}</span>
                    <span className="text-xs text-muted-foreground mt-1">{exp.location}</span>
                    <span className="mt-2 px-2 py-0.5 rounded text-xs font-medium border" style={{ borderColor: `${exp.color}40`, color: exp.color, background: `${exp.color}10` }}>{exp.type}</span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="p-6 rounded-2xl border border-border bg-card/70 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm group"
    >
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
        >
          <Briefcase size={18} style={{ color: exp.color }} />
        </div>
        <div>
          <h3 className="font-bold text-foreground text-lg leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>{exp.title}</h3>
          <p className="text-sm" style={{ color: exp.color }}>{exp.company}</p>
          <p className="text-xs text-muted-foreground md:hidden mt-0.5">{exp.period}</p>
        </div>
      </div>

      <ul className="space-y-2 mb-4">
        {exp.description.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-secondary-foreground text-sm">
            <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: exp.color }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded text-xs font-mono"
            style={{ background: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}20` }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
