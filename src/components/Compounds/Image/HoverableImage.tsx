import { twMerge } from "tailwind-merge";
import { Image_File } from "@/types";
import { ImageAsset } from "@/components/Compounds";

interface HoverableImageProps {
  asset: Image_File;
  isSquare?: boolean;
  className?: string;
}

export function HoverableImage({ asset, isSquare = false, className = "" }: HoverableImageProps) {
  const squareStyle = isSquare ? "aspect-square" : "";

  return (
    <div className={twMerge("w-full transition-all duration-500 md:hover:scale-110", squareStyle, className)}>
      <ImageAsset asset={asset} />
    </div>
  );
}
