import { Image } from "../Atoms";

interface StaticImageProps {
  url: string;
  width?: string;
}

export function StaticImage({ url, width = "w-full" }: StaticImageProps) {
  return (
    <div className={`${width} aspect-square shrink-0 rounded-lg overflow-hidden`}>
      <Image
        src={url}
        alt={`${url} photo`}
      />
    </div>
  );
}
