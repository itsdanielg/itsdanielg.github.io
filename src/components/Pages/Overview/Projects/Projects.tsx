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
        {projects.map(({ name, asset, github, demo, technologies, summary }, index) => (
          <ProjectBlock
            key={name + index}
            showVideo={false}
            name={name}
            asset={asset}
            github={github}
            demo={demo}
            technologies={technologies}
            summary={summary}
          />
        ))}
      </div>
    </div>
  );
}
