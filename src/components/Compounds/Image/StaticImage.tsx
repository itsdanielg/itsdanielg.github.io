import { Image, ImageProps } from "Atoms/";

interface StaticImageProps extends ImageProps {
  src: string;
  width?: string;
  square?: boolean;
}

export function StaticImage({ src, width = "w-full", square = true, ...props }: StaticImageProps) {
  return (
    <div className={`${width} ${square ? "aspect-square" : ""} shrink-0 rounded-lg overflow-hidden`}>
      <Image
        {...props}
        src={src}
      />
    </div>
  );
}
