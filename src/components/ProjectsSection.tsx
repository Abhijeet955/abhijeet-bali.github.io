import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp } from "lucide-react";

import imgRecommendation from "@/assets/project-recommendation.jpg";
import imgChatbot from "@/assets/project-chatbot.jpg";
import imgSearch from "@/assets/project-search.jpg";
import imgAnalytics from "@/assets/project-analytics.jpg";
import imgLookalike from "@/assets/project-lookalike.jpg";
import imgRetention from "@/assets/project-retention.jpg";
import imgCrm from "@/assets/project-crm.jpg";
import imgPipeline from "@/assets/project-pipeline.jpg";

const projects = [
  {
    title: "Personalized Recommendation Engine",
    tags: ["XGBoost", "Collaborative Filtering", "Hugging Face", "RFM", "ALS"],
    impact: "80-100% engagement boost, 95% more product redemptions",
    image: imgRecommendation,
  },
  {
    title: "LRGPT — RAG Chatbot",
    tags: ["LangChain", "Llama 3.1", "Qdrant", "RAG", "Prompt Engineering"],
    impact: "50% faster lead response, 35% engagement boost",
    image: imgChatbot,
  },
  {
    title: "LLM-Powered Product Search Engine",
    tags: ["Sentence Transformers", "FAISS", "LLM", "Elasticsearch"],
    impact: "40% better query understanding, 25% higher satisfaction",
    image: imgSearch,
  },
  {
    title: "Campaign Analytics Data Mart",
    tags: ["Greenplum", "Airflow", "Feature Engineering", "ETL"],
    impact: "500+ features, cleaner faster data for 22 banks",
    image: imgAnalytics,
  },
  {
    title: "Lookalike Modelling",
    tags: ["KMeans++", "FAISS", "PCA", "Silhouette Score"],
    impact: "Improved targeting efficiency and audience expansion",
    image: imgLookalike,
  },
  {
    title: "Category Retention Model",
    tags: ["XGBoost", "Propensity Modelling", "CRM Analytics"],
    impact: "84% AUC, 12% increase in category retention",
    image: imgRetention,
  },
  {
    title: "LLM-Based CRM Call Center Insights",
    tags: ["Mistral-7B", "Prompt Engineering", "NLP", "Automation"],
    impact: "100k+ tickets automated, 70% reduction in manual effort",
    image: imgCrm,
  },
  {
    title: "Data Engineering & Pipeline Modernization",
    tags: ["Airflow", "Docker", "Greenplum", "Partitioning", "DQM"],
    impact: "56% reduction in vacuum time, 2.15B transactions mapped",
    image: imgPipeline,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24">
      <div ref={ref} className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <div className="gradient-line mb-12 max-w-xs" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="glass-card-hover overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-6 -mt-8 relative z-10">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <TrendingUp size={14} className="text-primary mt-0.5 shrink-0" />
                    <span>{p.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
