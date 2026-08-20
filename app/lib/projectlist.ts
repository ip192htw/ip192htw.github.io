import { Project } from "./type";

import { CUESYNC_CASE_STUDY, SHOP_PROJECT } from "./projects";

export const PROJECTS_DATA: Project[] = [
  {
    id: "cuesync",
    number: "01",
    title: CUESYNC_CASE_STUDY.title,
    category: "Study Project",
    description:
      "A high-throughput distributed tracing and observability platform designed for microservices architectures.",
    tags: CUESYNC_CASE_STUDY.stack,
    role: "Lead Engineer",
    link: "#",
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
    id: "shop",
    number: "03",
    title: SHOP_PROJECT.title,
    category: "Product Engineering",
    description:
      "Campus Event Management Platform streamlining scheduling, ticketing, and real-time venue synchronization.",
    tags: SHOP_PROJECT.stack,
    role: "Product Engineer",
    link: "/projects/shop",
    image: SHOP_PROJECT.heroImages[0]
  }
];