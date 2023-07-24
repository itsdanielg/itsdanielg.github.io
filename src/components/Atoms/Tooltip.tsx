import { Image } from "./Image";

interface TooltipProps {
  url: string;
  alt?: string;
}

export function Tooltip({ url, alt = "tooltip" }: TooltipProps) {
  return (
    <div className="hidden md:flex overflow-hidden w-auto h-20 p-2 bg-white">
      <Image
        src={url}
        alt={alt}
      />
    </div>
  );
}
