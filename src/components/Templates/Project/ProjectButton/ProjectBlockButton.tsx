import { LinkButton } from "@/components/Atoms";

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
      to={to}
      target>
      {label}
    </LinkButton>
  );
}
