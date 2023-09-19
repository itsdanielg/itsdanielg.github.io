import { twMerge } from "tailwind-merge";
import { Image_File } from "@/types";
import { ImageAsset } from "@/components/Compounds";

interface StaticImageProps {
  asset: Image_File;
  isSquare?: boolean;
  className?: string;
}

export function StaticImage({ asset, isSquare = false, className = "" }: StaticImageProps) {
  const squareStyle = isSquare ? "aspect-square" : "";

  return (
    <div className={twMerge("w-full shrink-0 overflow-hidden rounded-lg", squareStyle, className)}>
      <ImageAsset asset={asset} />
    </div>
  );
}
