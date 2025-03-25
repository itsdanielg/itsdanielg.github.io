import { Experience } from "@/types";
import { Accordion, BorderedLabel } from "@/components/Compounds";

interface ExperiencesProps {
  experiences: Experience[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <BorderedLabel label="experience" />
      <Accordion>
        {experiences.map((experience) => (
          <Accordion.Disclosure
            key={experience.url}
            title={<ExperiencesTitle experience={experience} />}>
            {experience.positions.map((position, index) => (
              <ul
                key={position.name + index}
                className="list-disc list-outside ml-6">
                {position.description.map((bulletPoint) => (
                  <li key={bulletPoint}>{bulletPoint}</li>
                ))}
              </ul>
            ))}
          </Accordion.Disclosure>
        ))}
      </Accordion>
    </div>
  );
}

interface ExperiencesTitleProps {
  experience: Experience;
}

function ExperiencesTitle({ experience }: ExperiencesTitleProps) {
  return (
    <span className="flex items-center w-full justify-between mr-2 group">
      <span className="flex items-center gap-1">
        <strong>{experience.positions[0].name}</strong>@<span>{experience.location}</span>
      </span>
      <span>{experience.positions[0].date}</span>
    </span>
  );
}
