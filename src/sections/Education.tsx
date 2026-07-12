import { motion } from "framer-motion";
import { educationList } from "../data/education";

export function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
            Education
            <div className="h-1 w-1/2 bg-primary mt-2 mx-auto md:mx-0 rounded-full"></div>
          </h2>
        </motion.div>

        <div className="relative border-l border-border/60 ml-4 md:ml-6 space-y-12">
          {educationList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1.5 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
              
              <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.degree}</h3>
                    <h4 className="text-lg font-medium text-muted-foreground mb-2">{item.school}</h4>
                    {item.cgpa && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted/60 border border-border/80 text-muted-foreground w-fit">
                        CGPA: {item.cgpa}
                      </span>
                    )}
                  </div>
                  <div className="shrink-0 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium w-fit">
                    {item.duration}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
