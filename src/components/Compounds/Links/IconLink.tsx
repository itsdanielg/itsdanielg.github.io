import { twMerge } from "tailwind-merge";
import { SVG_File } from "@/types";
import { LinkButton } from "@/components/Atoms";
import { Icon } from "@/components/Compounds";

interface IconLinkProps {
  url: string;
  asset: SVG_File;
  label?: string;
  className?: string;
  iconClassName?: string;
}

export function IconLink({ url, asset, label = "", className = "", iconClassName = "", ...props }: IconLinkProps) {
  return (
    <LinkButton
      className={twMerge("p-1", className)}
      {...props}
      to={url}
      animated>
      <div className="flex items-center gap-2 rounded-lg">
        <Icon
          className={twMerge("w-10", iconClassName)}
          asset={asset}
        />
        {label}
      </div>
    </LinkButton>
  );
}
