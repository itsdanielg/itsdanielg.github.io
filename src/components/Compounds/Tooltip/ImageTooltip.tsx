import { JSXElementConstructor, ReactElement } from "react";
import { Image_File } from "@/types";
import { Tooltip } from "@/components/Atoms";
import { StaticImage } from "@/components/Compounds";

interface ImageTooltipProps {
  name: Image_File;
  width?: string;
  isSquare?: boolean;
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
}

export function ImageTooltip({ name, width = "w-full", isSquare = false, children }: ImageTooltipProps) {
  return (
    <Tooltip
      content={
        <div className="hidden md:flex overflow-hidden w-auto h-20 p-2 bg-white">
          <StaticImage
            name={name}
            width={width}
            isSquare={isSquare}
          />
        </div>
      }>
      {children}
    </Tooltip>
  );
}
