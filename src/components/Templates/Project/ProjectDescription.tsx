import { DemoButton, GithubButton } from "./ProjectButton";

interface ProjectDescriptionProps {
  show: boolean;
  name: string;
  github: string;
  demo: string;
  summary: string;
}

export function ProjectDescription({ show = false, name, github, demo, summary }: ProjectDescriptionProps) {
  const showStyle = show ? "select-auto opacity-1" : "select-none opacity-0";
  return (
    <div
      className={`${showStyle} absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-start gap-2 p-4 bg-white-1-t transition duration-300`}>
      <span className="text-xl text-center font-bold font-expletusSans">{name.toUpperCase()}</span>
      <span className="text-md text-center">{summary}</span>
      <div className="flex items-center justify-center gap-4 mt-auto">
        <DemoButton to={demo} />
        <GithubButton to={github} />
      </div>
    </div>
  );
}
