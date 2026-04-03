import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="section-container">
        <div
          className={`transition-all duration-700 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">
            Let's <span className="glow-text">Connect</span>
          </h2>
          <div className="gradient-line mb-8 mx-auto max-w-xs" />
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            I'm always open to discussing new opportunities, interesting projects,
            or collaborations in AI/ML. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:abhijeetbali29@gmail.com"
              className="glass-card-hover px-6 py-4 flex items-center gap-3 w-full sm:w-auto"
            >
              <Mail className="text-primary" size={18} />
              <span className="text-sm">abhijeetbali29@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhijeet-bali"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover px-6 py-4 flex items-center gap-3 w-full sm:w-auto"
            >
              <Linkedin className="text-primary" size={18} />
              <span className="text-sm">LinkedIn Profile</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-primary" /> 9766290893
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" /> Pune, Maharashtra
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border pt-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Abhijeet Bali. Built with passion.</p>
      </div>
    </section>
  );
};

export default ContactSection;
