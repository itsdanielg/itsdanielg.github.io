import { Experience } from "@/types";
import { BorderedLabel, LabelLink } from "@/components/Compounds";
import { ExperiencesRow } from "./ExperiencesRow";

interface ExperiencesProps {
  experiences: Experience[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <BorderedLabel label="experience" />
      {experiences.map((experience) => (
        <div key={experience.location}>
          <LabelLink
            className="text-lg"
            label={experience.location}
            url={experience.url}
          />
          {experience.positions.map((position, index) => (
            <ExperiencesRow
              key={position.name + index}
              name={position.name}
              date={position.date}
              description={position.description}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
