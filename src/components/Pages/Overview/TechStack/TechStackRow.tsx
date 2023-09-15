import { Technology } from "@/types";
import { IconLink } from "@/components/Compounds";

interface TechStackRowProps {
  technologies: Technology[];
}

export function TechStackRow({ technologies }: TechStackRowProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {technologies.map(({ url, asset }, index) => (
        <IconLink
          key={url + index}
          url={url}
          asset={asset}
        />
      ))}
    </div>
  );
}
