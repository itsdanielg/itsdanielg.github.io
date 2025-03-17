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

const experiencesToShow = [experiences[0]];
const projectsToShow = [projects[0], projects[1], projects[3]];

interface OverviewModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}
export function OverviewModal({ show, setShow }: OverviewModalProps) {
  return (
    <StandardModal
      className="flex flex-col w-full md:w-[90%] h-full md:h-[90%] overflow-hidden"
      show={show}
      setShow={setShow}>
      <div className="flex w-full grow p-8 overflow-hidden">
        <OverviewModal.LeftSideColumn />
        <OverviewModal.RightSideColumn />
      </div>
      <OverviewModal.MobileBottomBar setShow={setShow} />
    </StandardModal>
  );
}

function LeftSideColumn() {
  return (
    <div className="flex flex-col items-start gap-4 w-full md:w-80 md:pr-6 md:mr-6 md:border-r md:border-black overflow-y-auto">
      <StaticImage asset="portrait" />
      <Info />
      <Education />
    </div>
  );
}

function RightSideColumn() {
  return (
    <div className="relative flex flex-col w-full items-start gap-12 md:gap-4 overflow-y-auto">
      <Experiences experiences={experiencesToShow} />
      <Projects projects={projectsToShow} />
      <TechStack />
      <div className="hidden md:flex md:ml-auto gap-4 bottom-0 right-0">
        <LinkButton
          to="/projects"
          animated>
          View All Projects
        </LinkButton>
        <Contact />
      </div>
    </div>
  );
}

function MobileBottomBar({ setShow }: Pick<OverviewModalProps, "setShow">) {
  return (
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
  );
}

OverviewModal.LeftSideColumn = LeftSideColumn;
OverviewModal.RightSideColumn = RightSideColumn;
OverviewModal.MobileBottomBar = MobileBottomBar;
