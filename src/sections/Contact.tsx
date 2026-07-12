import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-medium tracking-wide text-sm md:text-base uppercase mb-4">
            What's Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Get In Touch
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question, 
            a project proposal, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Button size="lg" className="rounded-full px-8 group h-14 text-base">
              <a href="mailto:hello@example.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Say Hello
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all hover:-translate-y-1">
              <FaGithub className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all hover:-translate-y-1">
              <FaLinkedin className="w-8 h-8 text-muted-foreground group-hover:text-[#0077b5] transition-colors" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all hover:-translate-y-1">
              <FaTwitter className="w-8 h-8 text-muted-foreground group-hover:text-[#1DA1F2] transition-colors" />
              <span className="text-sm font-medium">Twitter</span>
            </a>
            <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50">
              <MapPin className="w-8 h-8 text-muted-foreground" />
              <span className="text-sm font-medium">Penang</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
