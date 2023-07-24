import { Image } from "../../Atoms/Image";

interface ProjectsSlideshowProps {
  image: string;
}

export function ProjectSlideshow({ image }: ProjectsSlideshowProps) {
  return (
    <Image
      className="object-cover"
      src={image}
    />
  );
}
