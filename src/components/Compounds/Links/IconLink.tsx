import { Link } from "react-router-dom";
import { Icon } from "../";
import { Asset } from "@/types";

const DEFAULT_ICON_LINK_STYLE = [
  "p-1",
  "bg-gradient-to-r",
  "from-blue",
  "to-blue",
  "bg-no-repeat",
  "[background-position:0_100%]",
  "[background-size:0_100%]",
  "md:hover:[background-size:100%_100%]",
  "transition-all",
  "duration-300"
].join(" ");

interface IconLinkProps {
  url: string;
  svg: Asset;
  width?: string;
}

export function IconLink({ url, svg, width = "w-10", ...props }: IconLinkProps) {
  return (
    <Link
      {...props}
      className=""
      target="_blank"
      to={url}>
      <div className={`${DEFAULT_ICON_LINK_STYLE} flex items-center gap-2 bg-white rounded-lg`}>
        <Icon
          fileName={svg}
          width={width}
        />
      </div>
    </Link>
  );
}
