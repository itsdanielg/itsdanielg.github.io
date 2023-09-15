import { JSXElementConstructor, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { SVG_File } from "@/types";
import { Tooltip } from "@/components/Atoms";
import { Icon } from "@/components/Compounds";

interface IconTooltipProps {
  asset: SVG_File;
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  isRectangle?: boolean;
  className?: string;
}

export function IconTooltip({ asset, children, isRectangle = true, className = "" }: IconTooltipProps) {
  return (
    <Tooltip
      content={
        <div className={twMerge("hidden md:flex overflow-hidden w-36 h-20 p-2 bg-transparent", className)}>
          <Icon
            asset={asset}
            isRectangle={isRectangle}
          />
        </div>
      }>
      {children}
    </Tooltip>
  );
}
