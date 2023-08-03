import { Image } from "../Atoms";

export interface SVGIconProps {
  fileName: string;
  width?: string;
}

export function SVGIcon({ fileName, width = "w-5" }: SVGIconProps) {
  const svg = `/svg/${fileName}.svg`;

  return (
    <div className={`${width} aspect-square`}>
      <Image
        src={svg}
        alt={fileName}
      />
    </div>
  );
}
