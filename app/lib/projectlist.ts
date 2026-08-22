import { Project } from "./type";

import { CUESYNC_CASE_STUDY, SHOP_PROJECT } from "./projects";

export const PROJECTS_DATA: Project[] = [
  {
    id: CUESYNC_CASE_STUDY.id,
    number: "01",
    title: CUESYNC_CASE_STUDY.title,
    category: "Study Project",
    description:
      "一個給非專業人士使用的活動排程系統",
    tags: CUESYNC_CASE_STUDY.stack,
    role: "Lead Engineer",
    link: CUESYNC_CASE_STUDY.id,
    image: CUESYNC_CASE_STUDY.heroImages[0]
  },
  {
    id: SHOP_PROJECT.id,
    number: "03",
    title: SHOP_PROJECT.title,
    category: "Product Engineering",
    description:
      "一個輕量化的商城系統",
    tags: SHOP_PROJECT.stack,
    role: "Product Engineer",
    link: SHOP_PROJECT.id,
    image: SHOP_PROJECT.heroImages[0]
  }
];