import { Project } from "./type";

import { CUESYNC_CASE_STUDY, SHOP_PROJECT } from "./projects";

export const PROJECTS_DATA: Project[] = [
  {
    id: CUESYNC_CASE_STUDY.id,
    number: "01",
    title: CUESYNC_CASE_STUDY.title,
    category: "Study Project",
    description:
      "A high-throughput distributed tracing and observability platform designed for microservices architectures.",
    tags: CUESYNC_CASE_STUDY.stack,
    role: "Lead Engineer",
    link: CUESYNC_CASE_STUDY.id,
    image: CUESYNC_CASE_STUDY.heroImages[0]
  },
  {
    id: "aether-sync",
    number: "02",
    title: "Aether Sync",
    category: "Open Source",
    description:
      "Real-time conflict-free replicated data type (CRDT) engine for seamless offline-first web applications.",
    tags: ["Rust", "WebAssembly", "TypeScript"],
    role: "Creator",
    link: "#",
    image: {
      src:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      alt: "Aether Sync Network Topology Visualization",
    }
  },
  {
    id: SHOP_PROJECT.id,
    number: "03",
    title: SHOP_PROJECT.title,
    category: "Product Engineering",
    description:
      "Campus Event Management Platform streamlining scheduling, ticketing, and real-time venue synchronization.",
    tags: SHOP_PROJECT.stack,
    role: "Product Engineer",
    link: SHOP_PROJECT.id,
    image: SHOP_PROJECT.heroImages[0]
  }
];