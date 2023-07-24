import { Project } from "../../../../types";
import { ProfileTitle } from "../../../Compounds/ProfileTitle";
import { ProjectBlock } from "../../../Compounds/ProjectBlock";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <ProfileTitle label="projects" />
      <div className="flex items-center gap-4 p-4 bg-black-1 rounded-lg">
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
    </div>
  );
}
