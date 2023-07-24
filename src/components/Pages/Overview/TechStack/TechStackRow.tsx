import { Technology } from "../../../../types";
import { IconLink } from "../../../Compounds/Links";

interface TechStackRowProps {
  technologies: Technology[];
}

export function TechStackRow({ technologies }: TechStackRowProps) {
  return (
    <div className="flex items-center gap-4">
      {technologies.map((technology, index) => (
        <IconLink
          key={technology.url + index}
          url={technology.url}
          svg={technology.svg}
          width="w-10"
        />
      ))}
    </div>
  );
}
