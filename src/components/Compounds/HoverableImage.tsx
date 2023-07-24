import { Image } from "../Atoms/Image";

interface HoverableImageProps {
  url: string;
  alt?: string;
  width?: string;
  square?: boolean;
}

export function HoverableImage({ url, alt, width = "w-80", square = true }: HoverableImageProps) {
  return (
    <div className={`${width} ${square ? "aspect-square" : ""}`}>
      <Image
        className="transition-all md:hover:scale-110"
        src={url}
        alt={alt ?? "Hoverable image"}
      />
    </div>
  );
}
