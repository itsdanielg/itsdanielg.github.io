import { SVG_File } from "@/types";
import { technologies as Technologies } from "@/text";
import { IconLink } from "@/components/Compounds";
import { GithubButton, DemoButton } from "@/components/Templates/Project/ProjectButton";

interface ProjectListDescriptionProps {
  name: string;
  github: string;
  demo: string;
  technologies: string[];
  description: string[];
}

export function ProjectListDescription({ name, github, demo, technologies, description }: ProjectListDescriptionProps) {
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
        <DemoButton to={demo} />
        <GithubButton to={github} />
      </div>
    </div>
  );
}
