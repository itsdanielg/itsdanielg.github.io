import { twMerge } from "tailwind-merge";
import { SVG_ASSET } from "@/assets";
import { SVG_File } from "@/types";
import { Image, ImageProps } from "@/components/Atoms";

export interface SVGAssetProps extends Omit<ImageProps, "src"> {
  asset: SVG_File;
  className?: string;
}

export function SVGAsset({ asset, className = "", ...props }: SVGAssetProps) {
  return (
    <Image
      {...props}
      className={twMerge(className)}
      src={SVG_ASSET[asset]}
      alt={asset}
    />
  );
}
