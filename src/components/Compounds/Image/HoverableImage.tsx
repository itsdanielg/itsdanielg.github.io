import { Image, ImageProps } from "Atoms/";

interface HoverableImageProps extends ImageProps {
  src: string;
  width?: string;
  square?: boolean;
}

export function HoverableImage({ src, width = "w-80", square = true, ...props }: HoverableImageProps) {
  return (
    <div className={`${width} ${square ? "aspect-square" : ""}`}>
      <Image
        {...props}
        className="transition-all duration-500 md:hover:scale-110"
        src={src}
      />
    </div>
  );
}
