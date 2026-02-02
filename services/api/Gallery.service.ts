import {http} from "./http"

export type Gallery = {
    Id: number;

    TitleAr: string;
    TitleEn: string;

    DescriptionAr: string;
    DescriptionEn: string;

    ImageUrl: string;
}

export const GalleryService = {
    getAll:  () => http<Gallery[]>("/api/Gallery"),      
};