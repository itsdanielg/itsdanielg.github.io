import { ProjectBlockButton } from "./ProjectBlockButton";

interface DemoButtonProps {
  to: string;
}

export function DemoButton({ to }: DemoButtonProps) {
  return (
    <ProjectBlockButton
      label="View Demo"
      to={to}
    />
  );
}
