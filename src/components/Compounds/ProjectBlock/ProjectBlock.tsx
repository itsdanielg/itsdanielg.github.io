import { useState } from "react";
import { useProject } from "../../../hooks/useProject";
import { Image } from "../../Atoms/Image";
import { HoverableVideo } from "../HoverableVideo";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectSlideshow } from "./ProjectSlideshow";

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

type ProjectBlockProps =
  | {
      showVideo: true;
      fileName: string;
      name?: string;
      github?: string;
      demo?: string;
      summary?: string;
    }
  | {
      showVideo: false;
      fileName: string;
      name: string;
      github: string;
      demo: string;
      summary: string;
    };

export function ProjectBlock({
  showVideo = false,
  fileName,
  name = "",
  github = "",
  demo = "",
  summary = ""
}: ProjectBlockProps) {
  const { image, video } = useProject(fileName);

  if (showVideo) {
    return (
      <div className={`${DEFAULT_PROJECT_BLOCK_STYLE} bg-red-100`}>
        <ProjectSlideshow image={image} />
      </div>
    );
  }

  const [show, setShow] = useState(false);

  return (
    <div
      className={`${DEFAULT_PROJECT_BLOCK_STYLE} overflow-hidden relative group`}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}>
      <Image
        className="object-cover"
        src={image}
      />
      <ProjectDescription
        show={show}
        name={name}
        github={github}
        demo={demo}
        summary={summary}
      />
    </div>
  );
}
