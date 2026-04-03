// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import { Briefcase } from "lucide-react";

// const experiences = [
//   {
//     role: "Data Scientist II",
//     company: "Loylty Rewardz Pvt Ltd — Mumbai",
//     duration: "Jan 2023 – Present",
//     highlights: [
//       "Designed Recommendation Engine for 20+ client portals using 45 XGBoost models → 80-100% boost in customer engagement, 95% increase in product redemptions",
//       "Built production RAG Chatbot (LangChain + Llama 3.1 + Qdrant) → 50% reduction in lead response time, 35% boost in engagement",
//       "Led Elasticsearch → LLM-powered search engine migration → 40% better query understanding, 25% higher search satisfaction across 5,000+ products",
//       "Built Campaign Analytics Mart with 500+ features on Airflow pipelines",
//       "Built Lookalike Modelling solution (KMeans++, FAISS, PCA) for audience expansion",
//       "XGBoost Propensity Model (~84% AUC) → 12% increase in category retention",
//       "Automated CRM insight extraction from 100k+ tickets using Mistral-7B → 70% reduction in manual effort",
//       "Managed Greenplum Data Mart across 22 banks, mapped 2.15B transactions",
//       "Modernized pipelines to Docker-based Airflow with DQM layer",
//     ],
//   },
//   {
//     role: "Machine Learning Engineer",
//     company: "Challenger Sweepers Pvt Ltd — Pune",
//     duration: "May 2021 – May 2022",
//     highlights: [
//       "RFM-based Customer Segmentation → 16% increase in provider engagement",
//       "NLP keyword optimization for campaign ROI improvement",
//       "Sentiment analysis on app + call centre reviews",
//       "LDA topic modeling on portal reviews",
//       "Flask REST APIs integrated with Google AdWords API",
//     ],
//   },
// ];

// const ExperienceSection = () => {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="experience" className="py-24">
//       <div ref={ref} className="section-container">
//         <div
//           className={`transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">
//             <span className="glow-text">Experience</span>
//           </h2>
//           <div className="gradient-line mb-12 max-w-xs" />

//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

//             <div className="space-y-12">
//               {experiences.map((exp, i) => (
//                 <div
//                   key={i}
//                   className="relative pl-12 md:pl-20"
//                   style={{ transitionDelay: `${i * 200}ms` }}
//                 >
//                   {/* Timeline dot */}
//                   <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsla(175,90%,50%,0.5)]" />

//                   <div className="glass-card p-6 md:p-8">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
//                       <div>
//                         <h3 className="font-heading text-xl font-semibold text-foreground">
//                           {exp.role}
//                         </h3>
//                         <p className="text-primary text-sm flex items-center gap-2">
//                           <Briefcase size={14} /> {exp.company}
//                         </p>
//                       </div>
//                       <span className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
//                         {exp.duration}
//                       </span>
//                     </div>
//                     <ul className="space-y-2">
//                       {exp.highlights.map((h, j) => (
//                         <li
//                           key={j}
//                           className="text-sm text-muted-foreground flex gap-2"
//                         >
//                           <span className="text-primary mt-1.5 shrink-0">▹</span>
//                           <span>{h}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;
