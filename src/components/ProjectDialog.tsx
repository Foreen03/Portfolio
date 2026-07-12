import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import type { Project } from "../data/projects";
import { FaGithub } from "react-icons/fa6";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDialog({ project, isOpen, onClose }: ProjectDialogProps) {
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  if (!project) return null;

  const hasMultipleImages = project.images && project.images.length > 1;
  const displayImages = hasMultipleImages ? project.images! : [project.image];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-card border-border/50 gap-0">
        <ScrollArea className="max-h-[90vh]">

        <div className="relative h-64 md:h-80 w-full overflow-hidden group/carousel">
          {hasMultipleImages ? (
            <Carousel
              className="w-full h-full"
              plugins={[autoplayPlugin]}
            >
              <CarouselContent className="h-full ml-0">
                {displayImages.map((img, idx) => (
                  <CarouselItem key={idx} className="h-full pl-0 relative">
                    <img
                      src={img}
                      alt={`${project.title} - image ${idx + 1}`}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 inset-y-0 my-auto opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0" />
              <CarouselNext className="absolute right-4 inset-y-0 my-auto opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0" />
            </Carousel>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none"></div>
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
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary text-xs shrink-0">◆</span>
                      <span>{feature}</span>
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
