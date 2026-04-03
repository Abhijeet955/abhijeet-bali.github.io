import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award } from "lucide-react";

const certs = [
  "Udacity Deep Learning Nanodegree",
  "Udacity Data Engineering Nanodegree",
  "Machine Learning Modeling Pipelines in Production",
  "Train & Fine-Tune LLMs for Production",
  "Effective MLOps: Model Development",
  "LangChain & Vector Databases in Production",
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24">
      <div ref={ref} className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">
            <span className="glow-text">Certifications</span>
          </h2>
          <div className="gradient-line mb-12 max-w-xs" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((cert, i) => (
              <div
                key={i}
                className="glass-card-hover p-5 flex items-start gap-3"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Award className="text-primary shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
