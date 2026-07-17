export interface SocialLink {
  id: number;

  Platform: string;

  URL: string;

  Icon?: {
    id: number;
    url: string;
    alternativeText?: string;
  };
}

export interface QuickLink {
  title: string;
  href: string;
}

export interface FooterData {
  id: number;

  Description: string;

  Copyright: string;

  QuickLinks: QuickLink[];

  SocialLinks: SocialLink[];
}