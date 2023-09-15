import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Label } from "@/components/Atoms";

interface LabelLinkProps {
  label: string;
  url: string;
  className?: string;
}

export function LabelLink({ label, url, className = "", ...props }: LabelLinkProps) {
  return (
    <Link
      {...props}
      className="group"
      target="_blank"
      to={url}>
      <Label
        className={twMerge(className)}
        label={label}
      />
    </Link>
  );
}
