import { CourseApi } from "@/app/types";
import { useEffect, useState } from "react";


export interface CourseUI {
  id: number;
  title: string;
  description: string[];
}

function descriptionToPoints(text: string): string[] {
  return (text ?? "")
    .split("\n")
    .map(line => line.trim())
    .map(line => line.replace(/^\s*-\s*/, ""))
    .filter(Boolean);
}

function mapCourseToUI(item: CourseApi): CourseUI {
  const title = item.TitleEn?.trim() || "";
  const description = item.DescriptionEn?.trim() || "";

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