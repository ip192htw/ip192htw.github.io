export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  role: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProjectMeta {
  id: string;
  number: string;

  title: string;
  subtitle: string;

  stack: string[];

  status: string;

  heroImage: string;
  heroImageAlt: string;

  links?: {
    demo?: string;
    github?: string;
  };

  content: string;
}


export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

export const PROFILE_DATA = {
  name: "張勛宥",
  title: "Full-Stack Engineer & Product Builder",
  location: "Taipei",
  bio: "I build web products from idea to production.",
  status: "Student · Product Builder · Developer",
  portraitSrc:
    "https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-19/536386136_17976093080913702_322849280310297940_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDI0LkMzIn0%3D&_nc_ohc=ox2wzGV6p9AQ7kNvwGafrFL&_nc_oc=AdrelTkd-R7YIBENdDjQtM-g9zz8zObUYzOher1608AZHqFmnsl0jTkYqy-_JgqVxRs&_nc_zt=24&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=V4GeT-PfOrkmSgQnbYDgGw&_nc_ss=7b6a8&oh=00_AQFW0nbYmaKAJX6LytqARq4J6ngw-i7VxBVYTtRKAqJMyQ&oe=6A845481",
  portraitAlt: "Portrait photo of Kevin Chang",
  about:
    "I am a technical product builder deeply interested in the intersection of systems engineering and human-computer interaction. Currently focused on crafting high-performance web applications and robust distributed systems. My approach centers on extreme ownership—taking technical concepts from mere ideas to fully deployed, scalable production environments.",
  contact: {
    email: "ip192htw@gmail.com",
    github: "https://github.com/ip192htw",
    linkedin: "linkedin.com/in/ip192htw",
  },
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "nexus-telemetry",
    number: "01",
    title: "Nexus Telemetry",
    category: "Enterprise Tool",
    description:
      "A high-throughput distributed tracing and observability platform designed for microservices architectures.",
    tags: ["Go", "React", "Kafka"],
    role: "Lead Engineer",
    link: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nexus Telemetry Dashboard Interface",
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
    imageSrc:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Aether Sync Network Topology Visualization",
  },
  {
    id: "cuesync",
    number: "03",
    title: "CueSync",
    category: "Product Engineering",
    description:
      "Campus Event Management Platform streamlining scheduling, ticketing, and real-time venue synchronization.",
    tags: ["Next.js", "Supabase", "Vercel"],
    role: "Product Engineer",
    link: "/projects/cuesync",
    imageSrc:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    imageAlt: "CueSync Event Management Dashboard",
  },
];

export const CUESYNC_CASE_STUDY: ProjectMeta = {
  id: "cuesync",

  number: "2",

  title: "CueSync",
  subtitle: "Campus Event Management Platform",
  stack: ["Next.js", "Supabase", "Vercel"],
  status: "Unavailable",
  heroImage:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  heroImageAlt: "CueSync Event Management Dashboard Interface",
  content: `
## 專案資料

專案名稱：Cuesync

定位：一個給非專業人士使用的活動排程系統

類型：學習專案

狀態：原始程式不可考(unavailable)，已停止維護

架構：React + Firebase

---

# Overview

CueSync 起源於我參與校園活動時對現場資訊流動的觀察。當時的活動流程往往依賴 Word 或試算表手動維護節目表，不只調整順序時容易牽一髮動全身，節目表、催場、場地異動與工作人員資訊也經常分散在不同工具中。

我因此嘗試做一個給非專業人士使用的活動排程系統。CueSync 刻意捨棄專業活動製作工具中學生或一般活動主辦者用不到的複雜功能，只保留節目編輯、排序與匯出等核心能力，並進一步嘗試讓主辦端、工作人員與現場顯示設備共享即時資訊。

這也是我第一次嘗試把一個想法從產品概念一路做到可以部署的 Web Product。過程中，我第一次實際接觸 Firebase、GCP、Next.js 與 Vercel，也開始理解現代 Web Product 不只是把畫面做出來，而是需要同時處理資料、部署與使用情境。

## 我做了什麼

CueSync 的核心功能圍繞「節目表」建立。

### 節目流程管理

- 拖曳調整節目順序
- 設定節目間隔與緩衝時間
- 連結表演者資料
- 匯出活動流程表

### 表演者管理

以表演者或團體為單位管理活動資料，可以查看：

- 參與的節目
- 聯絡資訊
- 活動相關資料

### 實驗性功能

在核心功能之外，我也嘗試過一些當時認為可能有價值的功能：

- 多語言介面（i18n）
- 電視牆即時顯示
- 多人即時編輯


## 我的角色

這是一個個人專案，因此從產品構想到實作、部署與後續迭代皆由我負責，但當時的我還沒有建立完整的工程規範。

我主要參與：

- 產品需求與功能設計
- 前端介面與互動
- Firebase 資料與身份系統
- Web Application 開發
- 部署與服務設定
- 實驗性功能開發

---

## 技術選擇

當時選擇 Firebase 作為後端，主要是因為我希望把更多時間放在產品本身，而不是先建立完整的後端基礎設施。

Firebase 提供了 Authentication、資料儲存與即時同步等能力，對當時的我來說，可以用相對低的開發成本快速驗證產品想法。

資料層則採用 Firestore 的 NoSQL 模型。以當時 CueSync 的資料規模與需求來看，這樣的選擇足以支撐早期實驗。

這個選擇也讓我第一次實際理解 BaaS 與傳統自行建立 Backend 的差異。

---

## 問題與限制

這個專案最大的問題其實不是技術選型，而是工程結構。

當時我對 React 的專案架構還沒有足夠經驗，同時大量依賴 AI 工具產生程式碼，卻沒有建立明確的檔案結構、責任邊界與開發規範。

隨著功能不斷增加，程式碼逐漸變成一個難以維護的「組合怪」：功能可以運作，但我開始無法清楚回答某段邏輯應該放在哪裡、哪些程式可以重複利用，以及修改一個功能會影響到哪些地方。

這也是我第一次真正感受到：

> 「能跑」和「能維護」是兩件完全不同的事情。

---

## 我學到什麼

### 技術

第一次完整接觸現代 Web Product 的開發流程，從 React 前端、Firebase Backend，到 GCP 與 Vercel 部署。

### 架構

Firebase 讓我第一次理解 BaaS 的開發模式，也讓我看到「快速建立產品」與「長期維護系統」其實是兩個不同的問題。

### 工程

更重要的是，我第一次真正遇到程式碼規模超過自己管理能力的情況。這成為後來我開始重視架構、模組化與程式碼責任邊界的重要原因。

---

## 回頭看

如果現在重新做一次，我不會先追求把功能全部做出來，而會先建立清楚的專案結構與開發邊界。

當時的 CueSync 確實留下了一個不容易維護的程式碼庫，但它也讓我第一次親身體會到：架構不是為了讓程式看起來漂亮，而是在專案開始變大之後，讓自己仍然有能力理解與修改它。

## 結果

CueSync 最終沒有進入正式使用，專案也因時間與後續方向調整而停止維護，目前原始程式已不可考。

但它對我後續的開發影響反而比一個成功上線的專案更大。

它是我第一次把一個產品想法完整帶到可部署狀態，也讓我第一次實際碰到架構失控、BaaS、Cloud Deployment 與 AI 輔助開發所帶來的工程問題。

後來在 Shop 等專案中，我開始重新處理這些問題，而 CueSync 可以算是這段學習的起點。
    `
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: "2026 - Present",
    role: "Product Engineer",
    company: "Project",
    bullets: [
      "Led development of core infrastructure, improving API response times by 40%.",
      "Designed and implemented a scalable microservices architecture using Go and gRPC.",
    ],
  },
  {
    period: "2024 - 2025",
    role: "Student Developer",
    company: "Open Source",
    bullets: [
      "Contributed to open-source projects and built full-stack applications.",
    ],
  },
];

export const RESUME_PROJECTS_DATA = [
  {
    period: "2025",
    title: "Developer Portfolio System",
    description: "A semantic, highly dense portfolio template for engineers.",
  },
  {
    period: "2024",
    title: "Data Pipeline Automation",
    description: "Automated ETL pipelines using Python and Docker.",
  },
];

export const SKILLS_DATA = {
  languages: ["TypeScript", "Go", "Python", "Rust"],
  frameworks: ["React", "Next.js", "Tailwind CSS", "Express"],
  tools: ["Docker", "Git", "AWS", "Vercel"],
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    period: "2020 - 2024",
    degree: "B.S. Computer Science",
    institution: "University of Technology",
  },
];
