import { Link } from "react-router-dom";
import { Label } from "../../Atoms";

interface LabelLinkProps {
  label: string;
  url: string;
  size?: string;
}

export function LabelLink({ label, url, size = "", ...props }: LabelLinkProps) {
  return (
    <Link
      {...props}
      className="group"
      target="_blank"
      to={url}>
      <Label
        className={`${size} text-blue`}
        label={label}
      />
    </Link>
  );
}
