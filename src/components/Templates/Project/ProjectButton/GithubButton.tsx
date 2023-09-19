import { ProjectButton } from "./ProjectButton";

interface GithubButtonProps {
  to: string;
}

export function GithubButton({ to }: GithubButtonProps) {
  return (
    <ProjectButton
      label="View Github"
      to={to}
    />
  );
}
