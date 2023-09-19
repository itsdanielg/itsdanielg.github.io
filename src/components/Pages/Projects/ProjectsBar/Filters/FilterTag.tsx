import { MouseEventHandler } from "react";

interface FilterTagProps {
  filter: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function FilterTag({ filter, onClick }: FilterTagProps) {
  return (
    <div className="flex items-center gap-2 p-1 px-3 rounded-2xl bg-blue">
      <span className="text-white-1">{filter}</span>
      <button
        className="relative w-3 h-full"
        onClick={onClick}>
        <div className="absolute w-full h-[2px] bg-black-1-t rotate-45" />
        <div className="absolute w-full h-[2px] bg-black-1-t rotate-[-45deg]" />
      </button>
    </div>
  );
}
