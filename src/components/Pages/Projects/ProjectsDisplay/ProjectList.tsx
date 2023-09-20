import { Image_File } from "@/types";
import { ProjectBlock } from "@/components/Templates";
import { ProjectListDescription } from "./ProjectListDescription";

interface ProjectListProps {
  name: string;
  asset: Image_File;
  github: string;
  demo: string;
  technologies: string[];
  description: string[];
}

export function ProjectList({ name, asset, github, demo, technologies, description }: ProjectListProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:h-[18rem] w-full overflow-hidden">
      <ProjectListDescription
        name={name}
        github={github}
        demo={demo}
        technologies={technologies}
        description={description}
      />
      <ProjectBlock
        showVideo={true}
        asset={asset}
      />
    </div>
  );
}
