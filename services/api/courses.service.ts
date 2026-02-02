import {http} from "./http"

export type CourseApi = {
  Id: number;
  
  TitleAr: string;
  TitleEn: string;
  
  DescriptionAr: string;
  DescriptionEn: string;
};

export const CoursesService ={
    getAll: () => http<CourseApi[]>("/api/Courses"),
};