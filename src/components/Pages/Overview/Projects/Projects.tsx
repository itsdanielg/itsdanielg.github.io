import { Project } from "@/types";
import { BorderedLabel } from "@/components/Compounds";
import { ProjectBlock } from "@/components/Templates";
import { Carousel, CarouselProps } from "@/components/Atoms/Carousel";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <BorderedLabel label="projects" />
      <Projects.Carousel
        content={projects}
        element={ProjectBlock}
      />
    </div>
  );
}

function ProjectsCarousel(props: CarouselProps<Project>) {
  return <Carousel {...props} />;
}

Projects.Carousel = ProjectsCarousel;
