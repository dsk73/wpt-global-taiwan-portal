export interface Activity {
  id: number;
  documentId: string;

  Title: string;
  Slug: string;

  Summary: string;
  Content: string;

  Featured: boolean;
  PublishDate: string;

  Tags: string[];

  ReadingTime: number;

  DisplayOrder: number;

  Active: boolean;

  Thumbnail?: {
    id: number;
    url: string;
    alternativeText?: string;
  }[];

  Banner?: {
    DesktopImage?: {
      id: number;
      url: string;
    };

    MobileImage?: {
      id: number;
      url: string;
    };

    AltEN?: string;
    AltTW?: string;
  }[];

  categories?: any[];

  authors?: any[];
}