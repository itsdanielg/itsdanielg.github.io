import { SVG_File } from "@/types";
import { LinkButton } from "@/components/Atoms";
import { Icon } from "@/components/Compounds";
interface IconLinkProps {
  url: string;
  name: SVG_File;
  width?: string;
  label?: string;
}

export function IconLink({ url, name, width = "w-10", label = "", ...props }: IconLinkProps) {
  return (
    <LinkButton
      {...props}
      to={url}>
      <div className="flex items-center gap-2 bg-white rounded-lg">
        <Icon
          name={name}
          width={width}
        />
        {label}
      </div>
    </LinkButton>
  );
}
