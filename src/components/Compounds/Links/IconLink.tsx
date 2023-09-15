import { SVG_File } from "@/types";
import { LinkButton } from "@/components/Atoms";
import { Icon } from "@/components/Compounds";
interface IconLinkProps {
  url: string;
  asset: SVG_File;
  width?: string;
  label?: string;
}

export function IconLink({ url, asset, width = "w-10", label = "", ...props }: IconLinkProps) {
  return (
    <LinkButton
      {...props}
      to={url}
      animated>
      <div className="flex items-center gap-2 rounded-lg">
        <Icon
          asset={asset}
          width={width}
        />
        {label}
      </div>
    </LinkButton>
  );
}
