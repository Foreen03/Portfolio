import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Server, Lightbulb } from "lucide-react";

const CORE_STRENGTHS = [
  {
    title: "Frontend Development",
    description: "Building responsive, fast, and beautiful web interfaces.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and user-centered digital experiences.",
    icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
  },
  {
    title: "Backend Development",
    description: "Designing robust APIs, managing databases, and building scalable server architectures.",
    icon: <Server className="w-6 h-6 text-primary" />,
  },
  {
    title: "Problem Solving",
    description: "Breaking down complex problems into elegant, maintainable code.",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
  },
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CORE_STRENGTHS.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all flex flex-col gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    {strength.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{strength.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
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
