import { IMAGE_ASSET } from "@/assets";
import { Image_File } from "@/types";
import { Image } from "@/components/Atoms";

interface HoverableImageProps {
  name: Image_File;
  width?: string;
  isSquare?: boolean;
}

export function HoverableImage({ name, width = "w-80", isSquare = true, ...props }: HoverableImageProps) {
  return (
    <div className={`${width} ${isSquare ? "aspect-square" : ""}`}>
      <Image
        {...props}
        className="transition-all duration-500 md:hover:scale-110"
        src={IMAGE_ASSET[name]}
      />
    </div>
  );
}
