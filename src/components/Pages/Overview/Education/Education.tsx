import { useCourses } from "@/api/hooks";
import { Card } from "@/components/Atoms";
import { Icon, LabelLink } from "@/components/Compounds";

export function Education() {
  const coursesToShow = [416, 381, 328, 373];
  const courses = useCourses(coursesToShow);

  return (
    <Card className="flex flex-col items-start gap-6 w-full md:mt-auto p-4">
      <Icon
        className="w-36 md:w-full"
        asset="sbu"
        isRectangle
      />
      <div className="flex flex-col">
        <span className="text-lg font-bold">Relevant Courses</span>
        {courses.map((course) => (
          <LabelLink
            key={course.name}
            label={course.name}
            url={course.url}
            className="text-md"
          />
        ))}
      </div>
    </Card>
  );
}
