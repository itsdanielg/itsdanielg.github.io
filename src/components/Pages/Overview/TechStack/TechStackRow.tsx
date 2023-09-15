import { SVG_File, Technology } from "@/types";
import { IconLink } from "@/components/Compounds";

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
          name={technology.svg as SVG_File}
        />
      ))}
    </div>
  );
}
