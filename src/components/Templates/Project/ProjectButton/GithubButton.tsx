import { ProjectButton } from "./ProjectButton";

interface GithubButtonProps {
  to: string;
}

export function GithubButton({ to }: GithubButtonProps) {
  return (
    <ProjectButton
      category="Github"
      to={to}
    />
  );
}
