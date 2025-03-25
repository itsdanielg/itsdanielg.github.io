import { useState } from "react";
import { Project } from "@/types";
import { ImageAsset } from "@/components/Compounds/";
import { ProjectDescription } from "./ProjectDescription";

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

type ProjectWithoutVideo = Omit<Project, "date" | "description">;

export function ProjectBlock({
  name = "",
  asset,
  github = "",
  demo = "",
  technologies = [],
  summary = ""
}: ProjectWithoutVideo) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`${DEFAULT_PROJECT_BLOCK_STYLE} overflow-hidden relative group`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      <ImageAsset
        className="object-cover"
        asset={asset}
      />
      <ProjectDescription
        show={show}
        name={name}
        github={github}
        demo={demo}
        technologies={technologies}
        summary={summary}
      />
    </div>
  );
}
