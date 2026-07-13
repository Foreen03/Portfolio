import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

type FormStatus = "idle" | "sending" | "success" | "error";

const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const VITE_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const VITE_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("idle");
      formRef.current.reset();
      setDialogOpen(false);
      toast.success("Message sent! I'll get back to you soon.");
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Please try again.");
    }
  };

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
            <Button
              size="lg"
              className="rounded-full px-8 group h-14 text-base cursor-pointer"
              onClick={() => setDialogOpen(true)}
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Say Hello
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <a href="https://github.com/Foreen03" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all hover:-translate-y-1">
              <FaGithub className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/yeoh-han-yi-6a4765160" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all hover:-translate-y-1">
              <FaLinkedin className="w-8 h-8 text-muted-foreground group-hover:text-[#0077b5] transition-colors" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="mailto:yeohhanyi@gmail.com" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all hover:-translate-y-1">
              <Mail className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all hover:-translate-y-1">
              <MapPin className="w-8 h-8 text-muted-foreground" />
              <span className="text-sm font-medium">Penang</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg p-0 bg-card border-border/50 gap-0 overflow-hidden">
          <div className="p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold tracking-tight">
                Send me a message
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </DialogHeader>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="from_email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message..."
                  className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="rounded-full px-8 group h-12 text-sm font-semibold w-full"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
