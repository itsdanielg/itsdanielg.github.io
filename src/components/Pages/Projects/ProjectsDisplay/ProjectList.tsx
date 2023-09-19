import { Image_File } from "@/types";
import { ProjectBlock } from "@/components/Templates";
import { ProjectListDescription } from "./ProjectListDescription";

interface ProjectListProps {
  name: string;
  asset: Image_File;
  github: string;
  demo: string;
  description: string[];
}

export function ProjectList({ name, asset, github, demo, description }: ProjectListProps) {
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
        asset={asset}
      />
    </div>
  );
}
