import { Technology } from "../../../../types";
import { IconLink } from "../../../Compounds";

interface TechStackRowProps {
  technologies: Technology[];
}

export function TechStackRow({ technologies }: TechStackRowProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {technologies.map((technology, index) => (
        <IconLink
          key={technology.url + index}
          url={technology.url}
          svg={technology.svg}
        />
      ))}
    </div>
  );
}
