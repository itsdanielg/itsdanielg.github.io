import { useState } from "react";
import { Image_File, Project } from "@/types";
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

type ProjectBlockProps =
  | {
      showVideo: true;
      asset: Image_File;
      name?: string;
      github?: string;
      demo?: string;
      technologies?: [];
      summary?: string;
    }
  | (ProjectWithoutVideo & {
      showVideo: false;
    });

export function ProjectBlock({
  showVideo = false,
  asset,
  name = "",
  github = "",
  demo = "",
  technologies = [],
  summary = ""
}: ProjectBlockProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`${DEFAULT_PROJECT_BLOCK_STYLE} overflow-hidden relative group`}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}>
      <ImageAsset
        className="object-cover"
        asset={asset}
      />
      {!showVideo && (
        <ProjectDescription
          show={show}
          name={name}
          github={github}
          demo={demo}
          technologies={technologies}
          summary={summary}
        />
      )}
    </div>
  );
}
