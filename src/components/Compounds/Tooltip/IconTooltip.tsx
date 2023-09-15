import { JSXElementConstructor, ReactElement } from "react";
import { SVG_File } from "@/types";
import { Tooltip } from "@/components/Atoms";
import { Icon } from "@/components/Compounds";

interface IconTooltipProps {
  asset: SVG_File;
  width?: string;
  isRectangle?: boolean;
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
}

export function IconTooltip({ asset, width = "w-28", isRectangle = true, children }: IconTooltipProps) {
  return (
    <Tooltip
      content={
        <div className="hidden md:flex overflow-hidden w-auto h-20 p-2 bg-white">
          <Icon
            asset={asset}
            width={width}
            isRectangle={isRectangle}
          />
        </div>
      }>
      {children}
    </Tooltip>
  );
}
