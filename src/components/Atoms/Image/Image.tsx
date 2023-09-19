import { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
}

export function Image({ src, className = "", ...props }: ImageProps) {
  return (
    <img
      {...props}
      className={twMerge("object-contain w-full h-full select-none", className)}
      src={src}
    />
  );
}
