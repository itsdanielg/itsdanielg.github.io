import { Project } from "@/types";
import { ProjectBlock } from "@/components/Templates";
import { ProjectListDescription } from "./ProjectListDescription";

export function ProjectList(project: Project) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:h-[18rem] w-full overflow-hidden">
      <ProjectListDescription {...project} />
      <ProjectBlock {...project} />
    </div>
  );
}
