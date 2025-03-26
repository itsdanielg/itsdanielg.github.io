import { Project } from "@/types";
import { BorderedLabel } from "@/components/Compounds";
import { Carousel } from "@/components/Atoms/Carousel";
import { ProjectCard } from "@/components/Organisms";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <BorderedLabel label="projects" />
      <Carousel
        content={projects}
        element={ProjectCard}
      />
    </div>
  );
}
