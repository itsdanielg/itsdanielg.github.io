import { Link } from "react-router-dom";

import { ImageTooltip } from "../ImageTooltip";

interface ImageTooltipLinkProps {
  name: string;
  url: string;
  imageUrl: string;
}

export function ImageTooltipLink({ name, url, imageUrl }: ImageTooltipLinkProps) {
  return (
    <ImageTooltip url={imageUrl}>
      <Link
        className="text-blue text-lg"
        target="_blank"
        to={url}>
        {name}
      </Link>
    </ImageTooltip>
  );
}
