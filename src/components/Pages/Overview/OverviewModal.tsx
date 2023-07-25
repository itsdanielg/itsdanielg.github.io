import { Dispatch, MouseEvent, SetStateAction } from "react";
import portrait from "../../../assets/portrait.jpg";
import { experiences, projects } from "../../../text";
import { AnimatedLinkButton } from "../../Compounds/AnimatedButton";
import { StaticImage } from "../../Compounds/StaticImage";
import { Experiences } from "./Experiences";
import { OverviewEducation } from "./OverviewEducation";
import { Info } from "./Info";
import { Projects } from "./Projects";
import { TechStack } from "./TechStack";
import { Contact } from "../Contact";
import { StandardModal } from "../../Compounds/Modals/StandardModal";
import { Button } from "../../Atoms/Button";

interface OverviewModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export function OverviewModal({ show, setShow }: OverviewModalProps) {
  return (
    <StandardModal
      className="flex flex-col w-full md:w-auto h-full md:h-auto overflow-hidden"
      show={show}
      setShow={setShow}>
      <div className="flex flex-col md:flex-row w-full h-full gap-12 md:gap-0 p-8 overflow-auto">
        <div className="flex flex-col items-start gap-4 w-full md:w-80 md:pr-6 md:mr-6 md:border-r md:border-black">
          <StaticImage url={portrait} />
          <Info />
          <OverviewEducation />
        </div>
        <div className="relative flex flex-col w-full items-start gap-12 md:gap-4">
          <Experiences experiences={[experiences[0]]} />
          <Projects projects={[projects[0], projects[1], projects[3]]} />
          <TechStack />
          <div className="hidden md:flex gap-4 absolute bottom-0 right-0">
            <AnimatedLinkButton
              label="View All Projects"
              to="/projects"
            />
            <Contact />
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center w-full p-4 bg-white-1 border-t-2">
        <Button
          label="Close"
          onClick={() => setShow(false)}
        />
        <div className="flex items-center gap-2 ml-auto">
          <AnimatedLinkButton
            label="View All Projects"
            to="/projects"
          />
          <Contact />
        </div>
      </div>
    </StandardModal>
  );
}
