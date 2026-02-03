export type ClientApi = {
    id: number,
    ArName: string,
    EnName: string,
    LogoUrl: string,
    Order: number,
    Links: string,
}
export type CourseApi = {
  Id: number;
  
  TitleAr: string;
  TitleEn: string;
  
  DescriptionAr: string;
  DescriptionEn: string;
};
export type Gallery = {
    Id: number;

    TitleAr: string;
    TitleEn: string;

    DescriptionAr: string;
    DescriptionEn: string;

    ImageUrl: string;
}

export type News = {
    Id: number;

    TitleAr: string;
    TitleEn: string;
    CreatedAt:  string;

    ShortDescriptionAr: string;
    ShortDescriptionEn: string;

    LongDescriptionAr: string;
    LongDescriptionEn: string;

    imageUrl: string;
}
export type Partner = {
    Id: number;

    NameEn: string;
    NameAr: string;

    DescriptionEn: string;
    DescriptionAr: string;  

    LogoUrl: string;
    url?:string;
}