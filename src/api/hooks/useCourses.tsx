import { useEffect, useState } from "react";
import { courses } from "@/text";
import { Course } from "@/types";

export function useCourses(coursesToShow?: number[]) {
  const [visibleCourses, setVisibleCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      if (!coursesToShow) {
        setVisibleCourses(
          courses.map((courseId) => {
            return {
              name: courseId.name,
              url: courseId.url
            } as Course;
          })
        );
        return;
      }
      const newCourses = coursesToShow.map((courseId) => {
        const newCourse = courses.find((course) => parseInt(course.name.substring(4, 7)) === courseId);
        return {
          name: newCourse?.name,
          url: newCourse?.url
        } as Course;
      });
      setVisibleCourses(newCourses);
    };
    getCourses();
  }, []);

  return visibleCourses;
}
