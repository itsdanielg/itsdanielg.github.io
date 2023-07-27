import { ProjectBlockButton } from "./ProjectBlockButton";

interface GithubButtonProps {
  to: string;
}

export function GithubButton({ to }: GithubButtonProps) {
  return (
    <ProjectBlockButton
      label="View Github"
      to={to}
    />
  );
}
