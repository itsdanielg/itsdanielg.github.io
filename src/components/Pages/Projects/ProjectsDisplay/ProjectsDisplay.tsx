import { Project } from "../../../../types";
import { ProjectBlock } from "../../../Compounds/ProjectBlock";
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
            fileName={project.fileName}
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
          fileName={project.fileName}
          github={project.github}
          demo={project.demo}
          description={project.description}
        />
      ))}
    </div>
  );
}