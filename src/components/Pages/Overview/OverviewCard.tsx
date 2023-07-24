import profilePicture from "../../../assets/images/profile.jpg";
import { experiences, projects } from "../../../text";
import { AnimatedLinkButton } from "../../Compounds/AnimatedButton";
import { StaticImage } from "../../Compounds/StaticImage";
import { Experiences } from "./Experiences";
import { OverviewEducation } from "./OverviewEducation";
import { Info } from "./Info";
import { Projects } from "./Projects";
import { TechStack } from "./TechStack";
import { Contact } from "../Contact";

export function OverviewCard() {
  return (
    <div className="flex w-full h-full p-8">
      <div className="flex flex-col items-start gap-4 w-80 pr-6 mr-6 border-r border-black">
        <StaticImage url={profilePicture} />
        <Info />
        <OverviewEducation />
      </div>
      <div className="relative flex flex-col w-full items-start gap-4 overflow-hidden">
        <Experiences experiences={[experiences[0]]} />
        <Projects projects={[projects[0], projects[1], projects[3]]} />
        <TechStack />
        <div className="flex gap-4 absolute bottom-0 right-0">
          <AnimatedLinkButton
            label="View All Projects"
            to="/projects"
          />
          <Contact />
        </div>
      </div>
    </div>
  );
}
