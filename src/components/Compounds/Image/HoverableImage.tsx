import { IMAGE_ASSET } from "@/assets";
import { Image_File } from "@/types";
import { Image } from "@/components/Atoms";
import { twMerge } from "tailwind-merge";

interface HoverableImageProps {
  asset: Image_File;
  isSquare?: boolean;
  className?: string;
}

export function HoverableImage({ asset, isSquare = true, className = "", ...props }: HoverableImageProps) {
  const squareStyle = isSquare ? "aspect-square" : "";

  return (
    <div className={twMerge("w-full", squareStyle, className)}>
      <Image
        {...props}
        className="transition-all duration-500 md:hover:scale-110"
        src={IMAGE_ASSET[asset]}
      />
    </div>
  );
}
