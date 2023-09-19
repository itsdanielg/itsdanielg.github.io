import { Image_File } from "@/types";
import { ImageAsset } from "@/components/Compounds";

interface ProjectsSlideshowProps {
  thumbnail: Image_File;
}

export function ProjectSlideshow({ thumbnail }: ProjectsSlideshowProps) {
  return (
    <ImageAsset
      className="object-cover"
      asset={thumbnail}
    />
  );
}
