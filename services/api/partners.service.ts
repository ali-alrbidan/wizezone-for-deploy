import {http} from "./http";

export type Partner = {
    Id: number;

    NameEn: string;
    NameAr: string;

    DescriptionEn: string;
    DescriptionAr: string;  

    LogoUrl: string;
    url?:string;
}

export const PartnersService = {
    getAll: () => http<Partner[]>("/api/partners"), 
} ;