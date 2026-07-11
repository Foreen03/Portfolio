import { motion } from "framer-motion";
import { experienceList } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-right"
        >
          <div className="inline-block flex-col items-end">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
              Experience
            </h2>
            <div className="h-1 w-1/2 bg-primary mt-2 ml-auto rounded-full"></div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {experienceList.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 hover:bg-card/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-border/50 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{job.position}</h3>
                  <h4 className="text-lg font-medium text-muted-foreground flex items-center gap-2">
                    {job.company}
                  </h4>
                </div>
                <div className="text-sm font-medium tracking-wide text-primary bg-primary/10 px-4 py-1.5 rounded-full w-fit">
                  {job.duration}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    <span className="text-primary mr-3 mt-1.5 text-xs">◆</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
