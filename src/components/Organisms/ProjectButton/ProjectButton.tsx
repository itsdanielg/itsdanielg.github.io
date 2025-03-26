import { LinkButton } from "@/components/Atoms";

interface ProjectButtonProps {
  category: "Github" | "Demo";
  to: string;
}

export function ProjectButton({ category, to }: ProjectButtonProps) {
  const disabled = to === "" ? true : false;
  const label = disabled ? `${category} Not Available` : `View ${category}`;

  return (
    <LinkButton
      className={`text-sm`}
      disabled={disabled}
      animated
      to={to}
      target>
      {label}
    </LinkButton>
  );
}
