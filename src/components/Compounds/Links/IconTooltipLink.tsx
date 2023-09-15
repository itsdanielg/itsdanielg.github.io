import { Link } from "react-router-dom";
import { SVG_File } from "@/types";
import { IconTooltip } from "@/components/Compounds";

interface IconTooltipLink {
  name: SVG_File;
  url: string;
  label: string;
}

export function IconTooltipLink({ name, url, label }: IconTooltipLink) {
  return (
    <IconTooltip name={name}>
      <Link
        className="text-blue text-lg"
        target="_blank"
        to={url}>
        {label}
      </Link>
    </IconTooltip>
  );
}
