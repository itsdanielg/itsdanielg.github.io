import { technologies as Technologies } from "@/text";
import { Project } from "@/types";
import { IconLink } from "@/components/Compounds";
import { DemoButton, GithubButton } from "./ProjectButton";

type ProjectDescriptionProps = Omit<Project, "asset" | "date" | "description"> & {
  show: boolean;
};

export function ProjectDescription({
  show = false,
  name,
  github,
  demo,
  technologies,
  summary
}: ProjectDescriptionProps) {
  const showStyle = show ? "select-auto opacity-1" : "select-none opacity-0";
  return (
    <div
      className={`${showStyle} absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-start gap-2 p-4 bg-white-1-t transition duration-300`}>
      <span className="text-xl text-center font-bold font-expletusSans">{name.toUpperCase()}</span>
      <span className="text-md text-center grow">{summary}</span>
      <div className="flex items-center justify-center gap-2">
        {technologies.map((technology, index) => (
          <IconLink
            key={technology + index}
            className="text-sm"
            iconClassName="w-4"
            url={Technologies.find((tech) => tech.label === technology)!.url}
            asset={Technologies.find((tech) => tech.label === technology)!.asset}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-auto">
        <DemoButton to={demo} />
        <GithubButton to={github} />
      </div>
    </div>
  );
}
