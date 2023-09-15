import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { SVG_File } from "@/types";
import { Label } from "@/components/Atoms";
import { IconTooltip } from "@/components/Compounds";

interface IconTooltipLink {
  asset: SVG_File;
  url: string;
  label: string;
  className?: string;
}

export function IconTooltipLink({ asset, url, label, className = "" }: IconTooltipLink) {
  return (
    <IconTooltip asset={asset}>
      <Link
        target="_blank"
        to={url}>
        <Label
          className={twMerge("text-lg", className)}
          label={label}
        />
      </Link>
    </IconTooltip>
  );
}
