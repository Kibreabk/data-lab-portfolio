import { GraduationCap, Briefcase, Code2, ExternalLink } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="p-8 max-w-4xl mx-auto h-full overflow-y-auto pb-20">
      <header className="mb-12 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl font-bold mb-4">Interactive Resume</h1>
        <p className="text-neutral-400 text-lg">
          My professional journey combining statistical rigor with modern web engineering.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#" className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
            Download PDF <ExternalLink size={16} />
          </a>
        </div>
      </header>

      <div className="space-y-12">
        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-blue-400">
            <GraduationCap /> Education & Background
          </h2>
          <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <h3 className="text-xl font-bold">B.S. in Statistics</h3>
            <p className="text-emerald-500 font-medium mb-4">University Graduate</p>
            <p className="text-neutral-400 leading-relaxed">
              Rigorous academic background in probability theory, linear algebra, and advanced statistical modeling. 
              Specialized in applying theoretical mathematics to real-world datasets using R and Python.
            </p>
          </div>
        </section>

        {/* Experience / Projects Section */}
        <section>
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-emerald-400">
            <Briefcase /> Featured Projects
          </h2>
          <div className="space-y-6">
            <ProjectCard 
              title="Predictive Revenue Model API"
              tags={["Python", "FastAPI", "scikit-learn", "Next.js"]}
              description="Designed and deployed a full-stack machine learning pipeline. The Python backend processes raw financial data to predict future revenue, while the React frontend visualizes the confidence intervals in real-time."
            />
            <ProjectCard 
              title="Statistical Market Analyzer"
              tags={["R", "Shiny", "ggplot2", "Time Series"]}
              description="Built a comprehensive time-series analysis tool in R that cleans, processes, and visualizes market volatility. Utilized advanced regression techniques to identify hidden seasonal trends."
            />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section>
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-purple-400">
            <Code2 /> Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <TechBadge category="Data Science" tools="Python, R, Pandas, NumPy" />
            <TechBadge category="Machine Learning" tools="scikit-learn, XGBoost, TensorFlow" />
            <TechBadge category="Web Development" tools="React, Next.js, TypeScript, Tailwind" />
            <TechBadge category="Backend & APIs" tools="FastAPI, Flask, Node.js" />
            <TechBadge category="Databases" tools="SQL, PostgreSQL, MongoDB" />
            <TechBadge category="Deployment" tools="Git, GitHub, Vercel, Docker" />
          </div>
        </section>
      </div>
    </div>
  );
}

function ProjectCard({ title, tags, description }: any) {
  return (
    <div className="bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 transition-colors rounded-xl p-6">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string) => (
          <span key={tag} className="bg-neutral-900 text-neutral-300 text-xs px-2.5 py-1 rounded-md border border-neutral-800">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-neutral-400 leading-relaxed">{description}</p>
    </div>
  );
}

function TechBadge({ category, tools }: any) {
  return (
    <div className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4">
      <h4 className="text-sm text-neutral-500 font-medium mb-1">{category}</h4>
      <p className="text-neutral-200 font-medium">{tools}</p>
    </div>
  );
}
