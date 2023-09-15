import { useState } from "react";
import { Image_File } from "@/types";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectSlideshow } from "./ProjectSlideshow";
import { StaticImage } from "@/components/Compounds";

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
      image: Image_File;
      name?: string;
      github?: string;
      demo?: string;
      summary?: string;
    }
  | {
      showVideo: false;
      image: Image_File;
      name: string;
      github: string;
      demo: string;
      summary: string;
    };

export function ProjectBlock({
  showVideo = false,
  image,
  name = "",
  github = "",
  demo = "",
  summary = ""
}: ProjectBlockProps) {
  const [show, setShow] = useState(false);
  // const { thumbnail, video } = useProject(fileName);

  // if (showVideo) {
  //   return (
  //     <div className={`${DEFAULT_PROJECT_BLOCK_STYLE} bg-red-100`}>
  //       <ProjectSlideshow name={thumbnail} />
  //     </div>
  //   );
  // }

  return (
    <div
      className={`${DEFAULT_PROJECT_BLOCK_STYLE} overflow-hidden relative group`}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}>
      <StaticImage name={image} />
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
