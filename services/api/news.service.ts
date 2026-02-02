import {http} from "./http";

export type News = {
    Id: number;

    TitleAr: string;
    TitleEn: string;

    ShortDescriptionAr: string;
    ShortDescriptionEn: string;

    LongDescriptionAr: string;
    LongDescriptionEn: string;

    imageUrl: string;
}
export const NewsService = {
    getAll: () => http<News[]>("/api/News"),  
}