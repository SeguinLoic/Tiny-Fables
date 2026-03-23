import type {
  SiteConfiguration,
  NavigationLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "TinyFables",
  description: "Des aventures de petites souris.",
  href: "https://tinyfables.netlify.app/",
  author: "LeMJ",
  locale: "fr",
};

export const NAV_LINKS: NavigationLinks = {
  posts: {
    path: "/posts",
    label: "La revue",
  },
  personnages: {
    path: "/personnages",
    label: "Les personnages",
  },
};
