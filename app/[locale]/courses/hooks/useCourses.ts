
import { useEffect, useState } from "react";
import { CourseApi } from "../../types";


export type CourseUI = {
  id: number;
  descriptionAr: string[];
  descriptionEn: string[];  
  titleEn: string;    
  titleAr: string;
};

function descriptionToPoints(text: string): string[] {
  return (text ?? "")
    .split("\n")
    .map(line => line.trim())
    .map(line => line.replace(/^\s*-\s*/, ""))
    .filter(Boolean);
}

function mapCourseToUI(item: CourseApi): CourseUI {
  const titleEn =
    item.TitleEn?.trim() ||
    "";
  const titleAr =
    item.TitleAr?.trim() ||
    "";

  const descriptionEn =
    item.DescriptionEn?.trim() ||
    "";
  const descriptionAr =
    item.DescriptionAr?.trim() ||
    "";

  return {
    id: item.Id,
    titleEn,
    titleAr,
    descriptionEn: descriptionToPoints(descriptionEn),
    descriptionAr: descriptionToPoints(descriptionAr),
  };
}

export function   useCourses() {
  const [courses, setCourses] = useState<CourseUI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log("Fetching courses from /api/courses...");
        
        const response = await fetch("/api/courses", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`Failed to fetch courses: HTTP ${response.status}`);
        }

        const data: CourseApi[] = await response.json();
        console.log("API RAW DATA:", data);

        const mapped = data.map(mapCourseToUI);
        console.log("MAPPED DATA:", mapped);

        setCourses(mapped);
      } catch (err) {
        console.error("Courses fetch error:", err);
        setError(err instanceof Error ? err.message : "Failed to load courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
}
