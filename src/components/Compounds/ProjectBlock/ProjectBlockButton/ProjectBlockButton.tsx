import { AnimatedLinkButton } from "../../AnimatedButton";

interface ProjectBlockButtonProps {
  label: string;
  to: string;
}

export function ProjectBlockButton({ to, label }: ProjectBlockButtonProps) {
  const disabled = to === "" ? true : false;
  return (
    <AnimatedLinkButton
      className={`text-sm`}
      disabled={disabled}
      label={label}
      to={to}
      target
    />
  );
}
