import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
}

export function Image({ src, className = "", ...props }: ImageProps) {
  return (
    <img
      {...props}
      className={`${className} object-contain w-full h-full select-none`}
      src={src}
    />
  );
}
