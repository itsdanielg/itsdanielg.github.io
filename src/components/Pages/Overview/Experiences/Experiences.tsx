import { Experience } from "@/types";
import { Disclosure } from "@/components/Atoms";
import { BorderedLabel } from "@/components/Compounds";

interface ExperiencesProps {
  experiences: Experience[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <BorderedLabel label="experience" />
      {experiences.map((experience) => (
        <Disclosure title={<ExperiencesTitle experience={experience} />}>
          {experience.positions.map((position, index) => (
            <ul
              key={position.name + index}
              className="list-disc list-outside ml-6">
              {position.description.map((bulletPoint) => (
                <li key={bulletPoint}>{bulletPoint}</li>
              ))}
            </ul>
          ))}
        </Disclosure>
      ))}
    </div>
  );
}

interface ExperiencesTitleProps {
  experience: Experience;
}

function ExperiencesTitle({ experience }: ExperiencesTitleProps) {
  return (
    <span className={` flex items-center w-full mr-2`}>
      <strong>{experience.positions[0].name}</strong> @ {experience.location}
      <span className="ml-auto">{experience.positions[0].date}</span>{" "}
    </span>
  );
}
