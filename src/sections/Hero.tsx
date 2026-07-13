import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-medium tracking-wide text-sm md:text-base uppercase mb-4">
              Hello, I am
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Yeoh Han Yi. <br className="hidden md:block" />
              <span className="text-muted-foreground">I build impactful software.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              I'm a Software Engineering graduate passionate about creating intuitive, scalable 
              applications across web, mobile and desktop platforms. 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group rounded-full px-8">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group rounded-full px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80">
              <a href="/assets/resume.pdf" target="_blank" className="flex items-center gap-2">
                Download Resume
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent"></div>
      </motion.div>
    </section>
  );
}
