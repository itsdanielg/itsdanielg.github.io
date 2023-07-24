import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { Tooltip } from "../../Atoms/Tooltip";
import "tippy.js/dist/tippy.css"; // optional for styling
import "tippy.js/animations/shift-away.css";

interface TooltipLinkProps {
  name: string;
  url: string;
  imageUrl: string;
}

export function TooltipLink({ name, url, imageUrl, ...props }: TooltipLinkProps) {
  return (
    <Tippy
      arrow={true}
      animation="shift-away"
      placement="right"
      content={<Tooltip url={imageUrl} />}>
      <Link
        className="text-blue-1 text-lg"
        target="_blank"
        to={url}>
        {name}
      </Link>
    </Tippy>
  );
}
