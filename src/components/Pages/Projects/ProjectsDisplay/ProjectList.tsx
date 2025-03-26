import { Project, SVG_File } from "@/types";
import { technologies as Technologies } from "@/text";
import { IconLink } from "@/components/Compounds";
import { ProjectBlock, ProjectButton } from "@/components/Organisms/";

export function ProjectList(project: Project) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:h-[18rem] w-full overflow-hidden">
      <Description {...project} />
      <ProjectBlock {...project} />
    </div>
  );
}

type ProjectListDescriptionProps = Pick<Project, "name" | "github" | "demo" | "technologies" | "description">;

function Description({ name, github, demo, technologies, description }: ProjectListDescriptionProps) {
  return (
    <div className="flex flex-col items-start gap-2 grow w-full md:w-auto md:h-full overflow-hidden">
      <span className="text-xl font-bold font-expletusSans">{name.toUpperCase()}</span>
      <div className="list-inside list-disc w-full grow md:overflow-y-auto">
        {description.map((bullet, index) => (
          <div
            key={bullet + index}
            className="flex gap-2">
            <span>❖</span>
            <span>{bullet}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center md:justify-start gap-2">
        {technologies.map((technology, index) => (
          <IconLink
            key={technology + index}
            className="text-sm"
            iconClassName="w-6"
            url={Technologies.find((tech) => tech.label === technology)?.url as string}
            asset={Technologies.find((tech) => tech.label === technology)?.asset as SVG_File}
            label={technology}
          />
        ))}
      </div>
      <div className="flex items-center justify-end md:justify-start gap-2 w-full">
        <ProjectButton
          category="Demo"
          to={demo}
        />
        <ProjectButton
          category="Github"
          to={github}
        />
      </div>
    </div>
  );
}
