import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../data/skills";

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].title);
  const activeCategory = skillCategories.find((c) => c.title === activeTab)!;

  return (
    <section id="skills" className="py-24 relative z-10 bg-muted/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
            <div className="h-[1px] flex-1 bg-border/50 max-w-xs"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Tab navigation — clean underline style */}
          <div className="flex flex-wrap gap-1 border-b border-border/50 mb-10">
            {skillCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveTab(category.title)}
                className={`relative px-5 py-3 text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === category.title
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/70"
                }`}
              >
                {category.title}
                {activeTab === category.title && (
                  <motion.div
                    layoutId="skills-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Skill chips */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap gap-3 min-h-[120px] items-start content-start"
            >
              {activeCategory.skills.map((skill, sIdx) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: sIdx * 0.03 }}
                  key={skill}
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-card/50 backdrop-blur-sm border border-border/50 text-foreground/80 shadow-sm hover:border-primary/50 hover:text-primary hover:shadow-md transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
