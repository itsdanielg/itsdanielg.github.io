import { twMerge } from "tailwind-merge";
import { IMAGE_ASSET } from "@/assets";
import { Image_File } from "@/types";
import { Image, ImageProps } from "@/components/Atoms";

interface ImageAssetProps extends Omit<ImageProps, "src"> {
  asset: Image_File;
  className?: string;
}

export function ImageAsset({ asset, className = "", ...props }: ImageAssetProps) {
  return (
    <Image
      {...props}
      className={twMerge(className)}
      src={IMAGE_ASSET[asset]}
      alt={asset}
    />
  );
}
