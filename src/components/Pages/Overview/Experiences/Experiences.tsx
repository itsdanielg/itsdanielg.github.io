import { Experience } from "../../../../types";
import { ImageTooltipLink } from "../../../Compounds/Links";
import { ProfileTitle } from "../../../Compounds/ProfileTitle";
import { ExperiencesRow } from "./ExperiencesRow";

interface ExperiencesProps {
  experiences: Experience[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <ProfileTitle label="experience" />
      {experiences.map((experience) => (
        <div
          key={experience.location}
          className="">
          <ImageTooltipLink
            name={experience.location}
            url={experience.url}
            imageUrl={"/svg/defmethod.svg"}
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
