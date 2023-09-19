import { Dispatch, SetStateAction } from "react";
import { experiences, projects } from "@/text";
import { LinkButton, Button } from "@/components/Atoms";
import { StandardModal, StaticImage } from "@/components/Compounds";
import { Contact } from "@/components/Pages";
import { Education } from "./Education";
import { Experiences } from "./Experiences";
import { Info } from "./Info";
import { Projects } from "./Projects";
import { TechStack } from "./TechStack";

interface OverviewModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export function OverviewModal({ show, setShow }: OverviewModalProps) {
  const experiencesToShow = [experiences[0]];
  const projectsToShow = [projects[0], projects[1], projects[3]];

  return (
    <StandardModal
      className="flex flex-col w-full md:w-auto h-full md:h-auto overflow-hidden"
      show={show}
      setShow={setShow}>
      <div className="flex flex-col md:flex-row w-full h-full gap-12 md:gap-0 p-8 overflow-auto">
        <div className="flex flex-col items-start gap-4 w-full md:w-80 md:pr-6 md:mr-6 md:border-r md:border-black">
          <StaticImage asset="portrait" />
          <Info />
          <Education />
        </div>
        <div className="relative flex flex-col w-full items-start gap-12 md:gap-4">
          <Experiences experiences={experiencesToShow} />
          <Projects projects={projectsToShow} />
          <TechStack />
          <div className="hidden md:flex gap-4 absolute bottom-0 right-0">
            <LinkButton
              to="/projects"
              animated>
              View All Projects
            </LinkButton>
            <Contact />
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center w-full p-4 bg-white-1 border-t-2">
        <Button onClick={() => setShow(false)}>Close</Button>
        <div className="flex items-center gap-2 ml-auto">
          <LinkButton
            to="/projects"
            animated>
            View All Projects
          </LinkButton>
          <Contact />
        </div>
      </div>
    </StandardModal>
  );
}
