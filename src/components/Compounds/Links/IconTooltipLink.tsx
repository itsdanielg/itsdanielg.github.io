import { Link } from "react-router-dom";
import { SVG_File } from "@/types";
import { IconTooltip } from "@/components/Compounds";

interface IconTooltipLink {
  asset: SVG_File;
  url: string;
  label: string;
}

export function IconTooltipLink({ asset, url, label }: IconTooltipLink) {
  return (
    <IconTooltip asset={asset}>
      <Link
        className="text-blue text-lg"
        target="_blank"
        to={url}>
        {label}
      </Link>
    </IconTooltip>
  );
}
