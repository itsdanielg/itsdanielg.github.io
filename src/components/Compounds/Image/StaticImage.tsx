import { IMAGE_ASSET } from "@/assets";
import { Image_File } from "@/types";
import { Image } from "@/components/Atoms";
import { twMerge } from "tailwind-merge";

interface StaticImageProps {
  asset: Image_File;
  isSquare?: boolean;
  className?: string;
}

export function StaticImage({ asset, isSquare = true, className = "", ...props }: StaticImageProps) {
  const squareStyle = isSquare ? "aspect-square" : "";
  return (
    <div className={twMerge("w-full shrink-0 rounded-lg overflow-hidden", squareStyle, className)}>
      <Image
        {...props}
        src={IMAGE_ASSET[asset]}
      />
    </div>
  );
}
