import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "B.E.", institution: "Dr Babasaheb Ambedkar Marathwada University, Aurangabad", year: "2019" },
  { degree: "Diploma", institution: "Maharashtra State Board of Technical Education, Aurangabad", year: "2016" },
  { degree: "SSC", institution: "Mukul Mandir Highschool", year: "2013" },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16">
      <div ref={ref} className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">
            <span className="glow-text">Education</span>
          </h2>
          <div className="gradient-line mb-12 max-w-xs" />

          <div className="space-y-4 max-w-2xl">
            {education.map((ed, i) => (
              <div key={i} className="glass-card p-5 flex items-start gap-4">
                <GraduationCap className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-heading font-semibold text-foreground">{ed.degree}</span>
                  <p className="text-sm text-muted-foreground">{ed.institution}</p>
                  <p className="text-xs text-primary mt-1">{ed.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
