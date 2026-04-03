import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24">
      <div ref={ref} className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">
            About <span className="glow-text">Me</span>
          </h2>
          <div className="gradient-line mb-8 max-w-xs" />
          <div className="glass-card p-8 max-w-3xl space-y-6">
            <p className="text-foreground text-xl font-semibold font-heading">
              Hey, I'm Abhijeet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Not sure what the right opener is here, so I'll just be straightforward — I'm a data scientist who cares a lot about whether things actually work in the real world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Most of my time goes into building ML and LLM systems. Recommendation engines, RAG pipelines, search, propensity models — the kind of stuff that sounds straightforward until you're three weeks in and debugging why the pipeline broke at 2am.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've been doing this for about four years now. Long enough to know that the model is rarely the hard part.
            </p>

            <h3 className="text-lg font-semibold text-primary font-heading pt-2">
              How I got here
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I didn't have a grand plan. I studied engineering, got curious about data, and slowly realized I was more interested in the systems around the model than the model itself.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That curiosity pulled me toward the full stack of it — pipelines, infra, retrieval, feature stores. Less "look at my accuracy score" and more "why did this break in production and how do we make sure it doesn't again."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That shift in thinking changed how I approach pretty much everything at work.
            </p>

            <h3 className="text-lg font-semibold text-primary font-heading pt-2">
              What I actually do
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I build LLM-powered systems — search engines, chatbots, agentic workflows — and try to make them reliable enough that people actually trust them. I design the data pipelines that feed them. And I spend a lot of time on the boring but important stuff: data quality, pipeline monitoring, mapping 2 billion transactions nobody had touched in years.
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              Not glamorous. But it compounds.
            </p>

            <h3 className="text-lg font-semibold text-primary font-heading pt-2">
              Outside work
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I follow chess seriously. Not just watching — I analyse games, track tournaments, have strong opinions about openings. Right now I'm watching the Gukesh era unfold and it's genuinely exciting if you follow the sport closely.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I also think chess teaches something useful about work — most games aren't lost because of one blunder, they're lost because of ten small inaccuracies that built up quietly. That pattern shows up everywhere once you start seeing it.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium text-foreground/80 pt-2">
              That's pretty much it. If any of this sounds interesting, my work is below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
