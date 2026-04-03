import { useEffect, useState } from "react";
import ParticleNetwork from "./ParticleNetwork";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);

  const words = ["Senior", "Data", "Scientist"];
  const subtitle = "ML · LLMs · GenAI";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleNetwork />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 text-center px-4">
        <p
          className={`text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Hello, I'm
        </p>
        <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4">
          <span
            className={`inline-block transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Abhijeet{" "}
          </span>
          <span
            className={`inline-block glow-text transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            Bali
          </span>
        </h1>
        <div
          className={`flex items-center justify-center gap-3 mb-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <span className="text-foreground font-heading text-xl sm:text-2xl">
            Senior Data Scientist
          </span>
          <span className="text-muted-foreground">|</span>
          <span className="text-primary font-body text-lg">{subtitle}</span>
        </div>

        {/* Stats */}
        <div
          className={`flex justify-center gap-8 mb-10 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          {[
            { num: "4+", label: "Years Experience" },
            { num: "8+", label: "Projects" },
            { num: "70%", label: "Effort Reduced" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold glow-text">
                {s.num}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsla(175,90%,50%,0.4)] transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 animate-bounce transition-all duration-700 ${
            show ? "opacity-60" : "opacity-0"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          <ArrowDown className="mx-auto text-muted-foreground" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
