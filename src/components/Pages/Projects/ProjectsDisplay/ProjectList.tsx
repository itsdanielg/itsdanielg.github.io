import { ProjectBlock } from "../../../Compounds/ProjectBlock";
import { ProjectListDescription } from "./ProjectListDescription";

interface ProjectListProps {
  name: string;
  fileName: string;
  github: string;
  demo: string;
  description: string[];
}

export function ProjectList({ name, fileName, github, demo, description, ...props }: ProjectListProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start gap-4 md:h-[13.5rem] w-full overflow-hidden">
      <ProjectListDescription
        name={name}
        github={github}
        demo={demo}
        description={description}
      />
      <ProjectBlock
        showVideo={true}
        fileName={fileName}
      />
    </div>
  );
}
