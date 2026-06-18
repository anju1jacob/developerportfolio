import { motion } from "motion/react";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

const certificates = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024",
    credentialId: "AWS-SAA-2024-0123",
    color: "#f59e0b",
  },
  {
    name: "Python Professional Certification",
    issuer: "Python Institute",
    year: "2023",
    credentialId: "PCPP-32-109-2023",
    color: "#3b82f6",
  },
  {
    name: "Django Web Framework Specialization",
    issuer: "Coursera",
    year: "2023",
    credentialId: "DWF-2023-4567",
    color: "#10b981",
  },
  {
    name: "React – The Complete Guide",
    issuer: "Udemy",
    year: "2022",
    credentialId: "UC-REACT-2022-8901",
    color: "#00d4ff",
  },
  {
    name: "Docker & Kubernetes Certification",
    issuer: "Linux Foundation",
    year: "2022",
    credentialId: "LF-DK-2022-3456",
    color: "#7c3aed",
  },
  {
    name: "Database Design & Management",
    issuer: "Oracle University",
    year: "2021",
    credentialId: "OCP-DB-2021-7890",
    color: "#ef4444",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24" style={{ background: "linear-gradient(180deg, #080d1a 0%, #0a1020 100%)" }}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Certificates</h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }} />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-5 rounded-2xl border border-border bg-card/70 hover:border-primary/30 transition-all duration-300 relative overflow-hidden cursor-default"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: cert.color }} />

              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  <Award size={20} style={{ color: cert.color }} />
                </div>
                <div className="flex items-center gap-1 text-xs" style={{ color: cert.color }}>
                  <CheckCircle size={14} />
                  <span>Verified</span>
                </div>
              </div>

              <h3 className="font-bold text-foreground mb-1 leading-snug" style={{ fontFamily: "Outfit, sans-serif" }}>{cert.name}</h3>
              <p className="text-secondary-foreground text-sm mb-4">{cert.issuer}</p>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <span className="font-mono">{cert.credentialId.slice(0, 12)}…</span>
                  <ExternalLink size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
