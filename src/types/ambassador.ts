export interface Media {
  id: number;
  url: string;
  alternativeText?: string;
}


export interface SocialLink {
  id:number;
  Platform:string;
  URL:string;
  Icon?:Media;
  DisplayOrder:number;
  Active:boolean;
}


export interface Ambassador {

  id:number;

  documentId:string;

  Name:string;

  Country:string;

  Position:string;

  Bio:string;

  Photo:Media[];

  CoverImage:Media;

  SocialLinks:SocialLink[];

}