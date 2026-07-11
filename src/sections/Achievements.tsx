import { motion } from "framer-motion";
import { achievementList } from "../data/achievements";
import { Award } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
            Achievements
            <div className="h-1 w-1/2 bg-primary mt-2 mx-auto rounded-full"></div>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievementList.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card/60 transition-all group hover:border-primary/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-500">
                <Award className="w-24 h-24" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <div className="flex items-center justify-between mb-4 text-sm font-medium">
                  <span className="text-muted-foreground">{achievement.organization}</span>
                  <span className="text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {achievement.date}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
