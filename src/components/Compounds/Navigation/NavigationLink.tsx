import { Link, useLocation } from "react-router-dom";
import { Label } from "../../Atoms/Label";
import { AnimatedLinkButton } from "../AnimatedButton";

interface NavigationLinkProps {
  label: string;
  url: string;
}

export function NavigationLink({ label, url }: NavigationLinkProps) {
  const pathname = useLocation().pathname;

  const linkStyle = pathname == url ? "bg-blue" : "bg-blue";
  const disabled = pathname == url ? "pointer-events-none" : "pointer-events-auto";

  return (
    <AnimatedLinkButton
      className={`${linkStyle} ${disabled}`}
      label={label}
      to={url}
    />
  );
}
