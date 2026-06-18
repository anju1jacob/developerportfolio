import { motion } from "motion/react";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "RomsnRaks – Grooming ERP System",
    description: "A comprehensive ERP platform for pet grooming businesses, designed to streamline appointment scheduling, customer and pet management, service workflows, and automated feedback collection. Developed and maintained backend modules for daily business operations.",
    tech: ["Python", "Django", "PostgreSQL", "REST API", "Angular", "Git"],
    stars: 284,
    image: "/images/ERP.jpg",
    color: "#00d4ff",
  },
  {
    title: "Job Portal Application",
    description: "A full-stack recruitment platform that enables recruiters to post jobs and manage applicants while allowing job seekers to search, apply, and track application status. Includes email notifications, profile management, and recruiter approval workflows.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
    stars: 176,
    image: "/images/Job portal application.jpg",
    github: "https://github.com/anju1jacob/Job-Portal-Application-python-Django",
    color: "#7c3aed",
  },
  {
    title: "Leave Management System",
    description: "A full-stack Leave Management System built with Django REST Framework and Angular. It provides role-based access for Employees, Managers, and Admins with features like leave requests, approval workflows, leave balance tracking, JWT authentication, and email notifications.",
    tech: ["Python", "Django REST Framework", "Angular", "PostgreSQL", "JWT", "Angular Material"],
    stars: 312,
    image: "/images/Leave Management System.jpg",
    github: "https://github.com",
    color: "#06b6d4",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">What I&apos;ve built</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Featured Projects</h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }} />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
              style={{ background: "rgba(15,22,41,0.7)" }}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors z-10" />
                <div className="absolute inset-0 opacity-30" style={{ background: `linear-gradient(135deg, ${project.color}20, transparent)` }} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className={`p-8 flex flex-col justify-between ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono" style={{ color: project.color }}>0{index + 1}</span>
                    <div className="flex-1 h-px" style={{ background: `${project.color}30` }} />
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star size={11} className="fill-yellow-400 stroke-yellow-400" />
                      {project.stars}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-secondary-foreground text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs font-mono"
                        style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}25` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-border text-foreground hover:border-primary/50 hover:bg-card transition-all duration-200"
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)` }}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
