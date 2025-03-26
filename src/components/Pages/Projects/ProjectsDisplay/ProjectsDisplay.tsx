import { Project } from "@/types";
import { ProjectList } from "./ProjectList";
import { ProjectCard } from "@/components/Organisms";

interface ProjectsDisplayProps {
  projects: Project[];
  isGrid: boolean;
}

export function ProjectsDisplay({ projects, isGrid }: ProjectsDisplayProps) {
  const childClass = isGrid ? "md:flex-row md:flex-wrap items-center md:justify-center gap-8" : "gap-16 md:gap-12";

  return (
    <div className={`${childClass} flex flex-col w-full`}>
      {projects.map((project, index) => (
        <ProjectsDisplay.Child
          key={project.name + index}
          project={project}
          isGrid={isGrid}
        />
      ))}
    </div>
  );
}

ProjectsDisplay.Child = function Child({ project, isGrid }: { project: Project; isGrid: boolean }) {
  return isGrid ? <ProjectCard {...project} /> : <ProjectList {...project} />;
};
