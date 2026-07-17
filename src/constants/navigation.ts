//src/constants/navigation.ts

import { HeaderCTA, NavigationItem } from "@/types/navigation";

export const NAVIGATION: NavigationItem[] = [
  {
    id: 1,
    labelTW: "最新活動",
    labelEN: "Activities",
    href: "/activities",
  },
  {
    id: 2,
    labelTW: "撲克交流站",
    labelEN: "Poker Exchange",
    href: "/poker-exchange",
  },
  {
    id: 3,
    labelTW: "教學中心",
    labelEN: "Teaching Center",
    href: "/teaching-center",
  },
  {
    id: 4,
    labelTW: "關於我們",
    labelEN: "About",
    href: "/about",
  },
];

export const HEADER_ACTIONS: HeaderCTA[] = [
  {
    labelTW: "註冊 WPT Global",
    labelEN: "Register",
    href: "/register",
    variant: "secondary",
  },
  {
    labelTW: "下載 WPT Global",
    labelEN: "Download",
    href: "/download",
    variant: "primary",
  },
];

export const HEADER_HEIGHT = 80;

export const HEADER_SCROLL_THRESHOLD = 10;