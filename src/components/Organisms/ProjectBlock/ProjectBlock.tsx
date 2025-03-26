import { HTMLAttributes } from "react";
import { Project } from "@/types";
import { ImageAsset } from "@/components/Compounds/";

const DEFAULT_PROJECT_BLOCK_STYLE = [
  "w-full",
  "border-2 border-black-1-t",
  "aspect-video",
  "md:w-[24rem]",
  "md:min-w-[24rem]",
  "md:h-[13.5rem]",
  "rounded-lg",
  "overflow-hidden"
].join(" ");

type ProjectBlockProps = Pick<Project, "asset"> & HTMLAttributes<HTMLDivElement>;

export function ProjectBlock({ asset, children = <></>, ...props }: ProjectBlockProps) {
  return (
    <div
      className={`${DEFAULT_PROJECT_BLOCK_STYLE} overflow-hidden relative group`}
      {...props}>
      <ImageAsset
        className="object-cover"
        asset={asset}
      />
      {children}
    </div>
  );
}
