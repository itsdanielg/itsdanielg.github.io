import { Project } from "@/types";
import { ProjectBlock } from "@/components/Templates";
import { ProjectList } from "./ProjectList";

interface ProjectsDisplayProps {
  projects: Project[];
  isGrid: boolean;
}

export function ProjectsDisplay({ projects, isGrid }: ProjectsDisplayProps) {
  if (isGrid)
    return (
      <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-center gap-8 w-full">
        {projects.map((project, index) => (
          <ProjectBlock
            key={project.name + index}
            showVideo={false}
            asset={project.asset}
            name={project.name}
            github={project.github}
            demo={project.demo}
            summary={project.summary}
          />
        ))}
      </div>
    );

  return (
    <div className="flex flex-col gap-16 md:gap-12 w-full">
      {projects.map((project, index) => (
        <ProjectList
          key={project.name + index}
          name={project.name}
          asset={project.asset}
          github={project.github}
          demo={project.demo}
          description={project.description}
        />
      ))}
    </div>
  );
}
