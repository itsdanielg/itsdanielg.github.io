import { technologies } from "@/text";
import { Button } from "@/components/Atoms";
import { Icon } from "@/components/Compounds";
import { MouseEventHandler } from "react";
import { SVG_File } from "@/types";

interface FilterTagProps {
  filter: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function FilterTag({ filter, onClick }: FilterTagProps) {
  return (
    <Button
      className="flex items-center gap-2 p-1 px-3 rounded-2xl bg-white md:hover:bg-white text-black group"
      onClick={onClick}>
      <div className="flex items-center gap-2">
        <Icon
          className="w-4"
          asset={technologies.find((tech) => tech.label === filter)?.asset as SVG_File}
        />
        <span className="text-md">{filter}</span>
      </div>
      <div className="relative flex items-center w-3 md:group-hover:rotate-90 transition-all">
        <div className="absolute w-full h-[2px] bg-black rotate-45" />
        <div className="absolute w-full h-[2px] bg-black rotate-[-45deg]" />
      </div>
    </Button>
  );
}
