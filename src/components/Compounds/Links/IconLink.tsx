import { Link } from "react-router-dom";
import { SVGIcon } from "../SVGIcon";
import { Card } from "../../Atoms/Card";

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
  svg: string;
  width?: string;
}

export function IconLink({ url, svg, width = "w-12", ...props }: IconLinkProps) {
  return (
    <Link
      {...props}
      className=""
      target="_blank"
      to={url}>
      <div className={`${DEFAULT_ICON_LINK_STYLE} bg-white rounded-lg`}>
        <SVGIcon
          fileName={svg}
          width={width}
        />
      </div>
    </Link>
  );
}
