import { ProjectButton } from "./ProjectButton";

interface DemoButtonProps {
  to: string;
}

export function DemoButton({ to }: DemoButtonProps) {
  return (
    <ProjectButton
      category="Demo"
      to={to}
    />
  );
}
