import { motion } from "framer-motion";

const STATS = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Awards Won", value: "5" },
  { label: "Technologies Mastered", value: "15+" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="h-[1px] flex-1 bg-border/50 max-w-xs"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! My name is Yeoh Han Yi. I'm a Software Engineering graduate from Multimedia University (MMU) 
                with a passion for designing and developing software that is both functional and user-centered. 
                I enjoy turning ideas into reliable applications through clean code, thoughtful design, and modern technologies. 
                My experience includes web, mobile, and desktop development, where I focus on building solutions that deliver a 
                seamless user experience.
              </p>
              <p>
                I enjoy exploring new technologies and continuously expanding my skill set to stay current with the 
                ever-evolving software industry. Whether working independently or collaborating with a team, I value writing 
                maintainable code, solving challenging problems, and creating software that delivers real value to its users.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
                >
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
