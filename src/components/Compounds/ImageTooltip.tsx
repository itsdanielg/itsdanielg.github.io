import { ReactElement, JSXElementConstructor } from "react";
import { Image, Tooltip } from "../Atoms";

interface ImageTooltipProps {
  url: string;
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
}

export function ImageTooltip({ url, children }: ImageTooltipProps) {
  return (
    <Tooltip
      content={
        <div className="hidden md:flex overflow-hidden w-auto h-20 p-2 bg-white">
          <Image
            src={url}
            alt="tooltip"
          />
        </div>
      }>
      {children}
    </Tooltip>
  );
}
