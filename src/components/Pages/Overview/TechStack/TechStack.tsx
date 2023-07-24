import { technologies } from "../../../../text";
import { ProfileTitle } from "../../../Compounds/ProfileTitle";
import { TechStackRow } from "./TechStackRow";

export function TechStack() {
  return (
    <div className="flex flex-col items-start gap-2">
      <ProfileTitle label="tech stack" />
      <TechStackRow technologies={technologies.languages.filter((technology) => technology.isSkill)} />
      <TechStackRow technologies={technologies.frameworks.filter((technology) => technology.isSkill)} />
      <TechStackRow technologies={technologies.software.filter((technology) => technology.isSkill)} />
    </div>
  );
}
