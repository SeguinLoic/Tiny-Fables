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
    label: "Posts",
  },
  projects: {
    path: "/projects",
    label: "Projects",
  },
};
