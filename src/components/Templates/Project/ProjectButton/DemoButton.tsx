import { ProjectButton } from "./ProjectButton";

interface DemoButtonProps {
  to: string;
}

export function DemoButton({ to }: DemoButtonProps) {
  return (
    <ProjectButton
      label="View Demo"
      to={to}
    />
  );
}
