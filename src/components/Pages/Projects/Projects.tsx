import { useState } from "react";
import { projects } from "@/text";
import { PageLayout } from "@/components/Templates/";
import { ProjectsDisplay } from "./ProjectsDisplay";
import { ProjectsBar } from "./ProjectsBar";

export function Projects() {
  const [filters, setFilters] = useState<string[]>([]);
  const [isGrid, setIsGrid] = useState(true);

  const filteredProjects = projects.filter((project) => {
    for (const filter of filters) {
      if (project.technologies.includes(filter)) return true;
    }
    return false;
  });

  return (
    <PageLayout className="flex flex-col items-center gap-8 py-8 px-4 md:px-80">
      <ProjectsBar
        filters={filters}
        isGrid={isGrid}
        setFilters={setFilters}
        setIsGrid={setIsGrid}
      />
      <ProjectsDisplay
        projects={filters.length === 0 ? projects : filteredProjects}
        isGrid={isGrid}
      />
    </PageLayout>
  );
}
