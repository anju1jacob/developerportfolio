import { motion } from "motion/react";
import { GraduationCap, BookOpen, Trophy } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "APJ Abdul Kalam Technological University",
    location: "Thiruvananthapuram, Kerala",
    period: "2016 – 2020",
    achievements: ["GPA: 8.65/9.5"],
    icon: GraduationCap,
    color: "#00d4ff",
  },
  {
    degree: "Higher Secondary Education",
    institution: "MGM NSS HSS Lakkattoor",
    location: "Kottayam, Kerala",
    period: "2014 – 2016",
    achievements: ["GPA: 86%"],
    icon: BookOpen,
    color: "#7c3aed",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Academic background</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Education</h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }} />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl border border-border bg-card/70 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: edu.color }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${edu.color}12`, border: `1px solid ${edu.color}30` }}
              >
                <edu.icon size={26} style={{ color: edu.color }} />
              </div>

              <p className="font-mono text-xs mb-2" style={{ color: edu.color }}>{edu.period}</p>
              <h3 className="font-bold text-xl text-foreground mb-1 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                {edu.degree}
              </h3>
              <p className="font-semibold mb-0.5" style={{ color: edu.color }}>{edu.institution}</p>
              <p className="text-muted-foreground text-xs mb-4">{edu.location}</p>
              <div className="space-y-2">
                {edu.achievements.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Trophy size={13} style={{ color: edu.color }} className="flex-shrink-0" />
                    <span className="text-secondary-foreground">{a}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
