import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import type { Project } from "../data/projects";
import { FaGithub } from "react-icons/fa6";
import { Button } from "./ui/button";
interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDialog({ project, isOpen, onClose }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden p-0 bg-card border-border/50 gap-0">

        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </div>

        <div className="p-6 md:p-10 relative z-10 -mt-16">
          <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-xl mb-6">
            <DialogHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <DialogTitle className="text-3xl font-bold tracking-tight">
                  {project.title}
                </DialogTitle>
                <Button asChild className="rounded-full shadow-lg group w-fit">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <FaGithub className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    View Source
                  </a>
                </Button>
              </div>
            </DialogHeader>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">About the Project</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5 text-xs">◆</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
