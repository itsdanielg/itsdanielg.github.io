import { useCourses } from "../../../hooks/useCourses";
import { Card } from "../../Atoms";
import { LabelLink } from "../../Compounds/Links";
import { SVGLogo } from "../../Compounds/SVGLogo";

export function OverviewEducation() {
  const coursesToShow = [416, 381, 328, 373];
  const courses = useCourses(coursesToShow);

  return (
    <Card className="flex flex-col items-start gap-6 w-full md:mt-auto p-4">
      <SVGLogo
        fileName="sbu"
        width="w-36 md:w-full"
      />
      <div className="flex flex-col">
        <span className="text-lg font-bold">Relevant Courses</span>
        {courses.map((course) => (
          <LabelLink
            key={course.name}
            label={course.name}
            url={course.url}
            size="text-md"
          />
        ))}
      </div>
    </Card>
  );
}