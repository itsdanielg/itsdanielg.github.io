import { Image_File, Project } from "@/types";
import { BorderedLabel, ProjectBlock } from "@/components/Compounds";

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
            png={project.fileName as Image_File}
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
