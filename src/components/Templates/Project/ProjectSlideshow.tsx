import { Image } from "@/components/Atoms";
import { Image_File } from "@/types";

interface ProjectsSlideshowProps {
  name: Image_File;
}

export function ProjectSlideshow({ name }: ProjectsSlideshowProps) {
  return (
    <Image
      className="object-cover"
      src={name}
    />
  );
}
