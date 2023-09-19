import { LinkButton } from "@/components/Atoms";

interface ProjectButtonProps {
  label: string;
  to: string;
}

export function ProjectButton({ to, label }: ProjectButtonProps) {
  const disabled = to === "" ? true : false;
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
