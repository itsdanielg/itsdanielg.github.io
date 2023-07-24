import { useSVG } from "../../hooks/useSVG";
import { Image } from "../Atoms/Image";

export interface SVGLogoProps {
  fileName: string;
  width?: string;
}

export function SVGLogo({ fileName, width = "w-6" }: SVGLogoProps) {
  const svg = useSVG("logos", fileName);

  return (
    <div className={`${width} h-auto`}>
      <Image
        src={svg}
        alt={fileName}
      />
    </div>
  );
}
