export type NavigationItem = {
  id: number;
  labelTW: string;
  labelEN: string;
  href: string;
};

export type HeaderCTA = {
  labelTW: string;
  labelEN: string;
  href: string;
  variant: "primary" | "secondary";
};

export type Language = "zh-Hant-TW" | "en";