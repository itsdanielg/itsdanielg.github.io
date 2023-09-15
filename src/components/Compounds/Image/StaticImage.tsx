import { IMAGE_ASSET } from "@/assets";
import { Image_File } from "@/types";
import { Image } from "@/components/Atoms";

interface StaticImageProps {
  name: Image_File;
  width?: string;
  isSquare?: boolean;
}

export function StaticImage({ name, width = "w-full", isSquare = true, ...props }: StaticImageProps) {
  return (
    <div className={`${width} ${isSquare ? "aspect-square" : ""} shrink-0 rounded-lg overflow-hidden`}>
      <Image
        {...props}
        src={IMAGE_ASSET[name]}
      />
    </div>
  );
}
