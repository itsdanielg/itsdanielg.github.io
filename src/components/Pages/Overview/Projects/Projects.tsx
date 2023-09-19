import { Project } from "@/types";
import { BorderedLabel } from "@/components/Compounds";
import { ProjectBlock } from "@/components/Templates";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <BorderedLabel label="projects" />
      <div className="flex flex-col md:flex-row items-center gap-4 md:p-4 md:bg-black-1 rounded-lg">
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
    </div>
  );
}
