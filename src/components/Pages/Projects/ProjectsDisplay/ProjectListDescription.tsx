import { GithubButton, DemoButton } from "../../../Compounds/ProjectBlock/ProjectBlockButton";

interface ProjectListDescriptionProps {
  name: string;
  github: string;
  demo: string;
  description: string[];
}

export function ProjectListDescription({ name, github, demo, description }: ProjectListDescriptionProps) {
  return (
    <div className="flex flex-col items-start gap-4 grow w-full md:w-auto md:h-full overflow-hidden">
      <span className="text-xl font-bold font-expletusSans">{name.toUpperCase()}</span>
      <div className="list-inside list-disc w-full grow md:overflow-y-auto">
        {description.map((bullet) => (
          <div className="flex gap-2">
            <span>❖</span>
            <span>{bullet}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end md:justify-start gap-2 w-full">
        <GithubButton to={github} />
        <DemoButton to={demo} />
      </div>
    </div>
  );
}
