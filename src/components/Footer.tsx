import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm py-12 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yeoh Han Yi. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Foreen03" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/yeoh-han-yi-6a4765160" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:yeohhanyi@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
