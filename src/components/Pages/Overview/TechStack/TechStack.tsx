import { languages, frameworks, software } from "@/text";
import { BorderedLabel } from "@/components/Compounds";
import { TechStackRow } from "./TechStackRow";

export function TechStack() {
  return (
    <div className="flex flex-col items-start gap-4">
      <BorderedLabel label="tech stack" />
      <TechStackRow technologies={languages.filter((technology) => technology.isSkill)} />
      <TechStackRow technologies={frameworks.filter((technology) => technology.isSkill)} />
      <TechStackRow technologies={software.filter((technology) => technology.isSkill)} />
    </div>
  );
}
