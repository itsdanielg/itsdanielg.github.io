import { Image } from "../Atoms";

export interface SVGLogoProps {
  fileName: string;
  width?: string;
}

export function SVGLogo({ fileName, width = "w-6" }: SVGLogoProps) {
  const svg = `/svg/${fileName}.svg`;

  return (
    <div className={`${width} h-auto`}>
      <Image
        src={`/svg/${fileName}.svg`}
        alt={fileName}
      />
    </div>
  );
}
