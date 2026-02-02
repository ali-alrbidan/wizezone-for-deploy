
import { useEffect, useState } from "react";
import { CoursesService, type CourseApi } from "@/services/api/courses.service";

export type CourseUI = {
  id: number;
  title: string;
  description: string[];
};

function descriptionToPoints(text: string): string[] {
  return (text ?? "")
    .split("\n")
    .map(line => line.trim())
    .map(line => line.replace(/^\s*-\s*/, ""))
    .filter(Boolean);
}

function mapCourseToUI(item: CourseApi): CourseUI {
  const title =
    item.TitleEn?.trim() ||
    "";

  const description =
    item.DescriptionEn?.trim() ||
    "";

  return {
    id: item.Id,
    title,
    description: descriptionToPoints(description),
  };
}

export function useCourses() {
  const [courses, setCourses] = useState<CourseUI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    CoursesService.getAll()
      .then(data => {
              console.log("API RAW DATA:", data); // 👈 أضف هذا
        const mapped = data.map(mapCourseToUI);
              console.log("MAPPED DATA:", mapped); // 👈 وهذا

        setCourses(mapped);
      })
      .catch(() => {
        setError("Failed to load courses");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { courses, loading, error };
}
