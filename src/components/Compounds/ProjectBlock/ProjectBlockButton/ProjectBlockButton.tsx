import { LinkButton } from "../../../Atoms";

interface ProjectBlockButtonProps {
  label: string;
  to: string;
}

export function ProjectBlockButton({ to, label }: ProjectBlockButtonProps) {
  const disabled = to === "" ? true : false;
  return (
    <LinkButton
      className={`text-sm`}
      disabled={disabled}
      animated
      label={label}
      to={to}
      target
    />
  );
}
