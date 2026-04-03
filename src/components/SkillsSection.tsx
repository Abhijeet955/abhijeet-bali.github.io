import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "SQL", "Bash", "Git"],
  },
  {
    category: "ML & AI",
    skills: [
      "Supervised/Unsupervised Learning",
      "Ensemble Methods",
      "Deep Learning (CNN, RNN, LSTM, Transformers)",
      "Recommender Systems",
      "NLP",
      "Feature Engineering",
    ],
  },
  {
    category: "Generative AI & LLMs",
    skills: [
      "Llama 3.1",
      "GPT",
      "Mistral",
      "BERT/T5",
      "LangChain",
      "LlamaIndex",
      "RAG",
      "Sentence Transformers",
      "FAISS",
      "Qdrant",
      "Chroma",
      "LoRA/QLoRA Fine-tuning",
    ],
  },
  {
    category: "Data Engineering",
    skills: ["Greenplum", "ETL/ELT", "Data Warehousing", "Airflow"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Visualization",
    skills: ["Power BI", "Tableau", "Metabase", "Matplotlib", "Seaborn"],
  },
  {
    category: "MLOps & LLMOps",
    skills: ["MLflow", "Docker", "Kubernetes", "Flask", "AWS SageMaker", "Vertex AI"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24">
      <div ref={ref} className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">
            Technical <span className="glow-text">Skills</span>
          </h2>
          <div className="gradient-line mb-12 max-w-xs" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, gi) => (
              <div key={gi} className="glass-card p-6">
                <h3 className="font-heading text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <span
                      key={si}
                      className={`text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-foreground transition-all duration-500 hover:border-primary/40 hover:bg-primary/10 hover:text-primary ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        transitionDelay: `${gi * 100 + si * 50}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
