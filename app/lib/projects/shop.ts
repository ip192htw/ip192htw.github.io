import { ProjectMeta } from "../type";

export const SHOP_PROJECT: ProjectMeta = {
  id: "Shop",

  number: "2",

  title: "Shop",
  subtitle: "E-commerce Platform",
    stack: ["Next.js", "Supabase", "Google Cloud", "Vercel", "PostgreSQL"],
  status: "Archived",
  heroImages: [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      alt: "CueSync Event Management Dashboard Interface"
    }
  ],
  content: `
## 專案資料

專案代號：shop

定位：一個輕量化的商城系統

類型：學習專案

狀態：已停止維護，進入公開封存

架構：React + Firebase

---

# Overview

Shop 最初是以一個相對直接的電商需求開始：

建立一個可以讓使用者瀏覽商品、加入購物車並完成訂單流程的校園型電商系統。

但實際開發後，我逐漸意識到，商城並不是由幾張商品與訂單資料表組成的簡單系統，而是許多彼此存在依賴關係的 domain 所共同構成：

- 商品

- SKU

- 庫存

- 購物車

- 訂單

- 使用者

- Authentication

- Authorization

- RLS

- 後台管理

- 批次出貨

- 不同商品狀態

- 資料模型


## What I Built

### 已完成

- 商品瀏覽

- 商品詳細資訊

- 商品管理

- SKU / 商品規格選擇

- 購物車

- 訂單建立

- SKU

- Inventory

- User authentication

- 使用者檔案

- RLS


### 已規劃

- 庫存管理

- 訂單 / 出貨流程的基礎架構

- IAM


# From Prototype to System

開發初期，我習慣以功能為單位直接組合元件、資料存取與商業邏輯。這種方式在需求還很小的時候非常有效，但隨著商品、SKU、庫存與使用者權限逐漸增加，原本的結構開始出現大量重複與隱性耦合。這時候，問題已經不再是「下一個功能怎麼做」，而是「這個系統要怎麼繼續存在」。我需要一個完整有結構規劃的架構，而不是一道臨時砌起來的牆。

## Architecture Refactoring

### Domain-Driven Design

DDD 並不是一開始就採用的架構，而是在系統規模增加後，為了解決 domain logic 分散與責任不清而逐步引入。對我而言，DDD 在這個專案裡並不是一套需要完整照搬的架構，而是一種重新思考「這段邏輯到底屬於誰」的方法。

#### Type System & Reusability: Building for Reuse

最初的實作有大量針對單一情境撰寫的 code。隨著不同 domain 出現類似需求，我開始把相似部分開始抽象化，減少重複。我開始將 Repository、Service、資料存取模式與 Generic Types 等重複結構抽象化，讓不同 domain 可以共享相同的處理方式。
重構的目的並不是單純減少程式碼，而是讓相同的 domain operation 能夠被一致地處理。

#### Authentication & Authorization**

Authentication 主要由 Supabase Auth 負責，應用程式則將 auth.users 作為 canonical identity，再由 application layer 管理 profile 與其他 domain information。隨著 server-side rendering 與資料存取需求增加，我也開始區分 server 與 browser client，並使用 @supabase/ssr 處理不同 runtime 下的 authentication context。

**What I Overbuilt**

一開始我為系統設計了較完整的 Role / Permission 架構，但隨著實際需求逐漸明確，我發現這套授權模型在目前產品階段並沒有實際需求。因此後續重新檢視架構時，我開始把「未來可能需要」與「現在真的需要」分開。這也讓我第一次意識到，工程上的複雜度本身也是一種成本。

## Data Modeling

我原本以為商品就是 Product，後來才發現實際 commerce system 裡，Product、Variant、SKU 與 Inventory 是不同概念。

Product
│
├── SKU
│ ├── Variant
│ └── Price
│
└── Inventory
    ├── Available
    ├── Reserved
    └── Incoming



這個結構並不是一開始就存在，而是在實際處理商品規格與庫存狀態後逐漸形成。尤其 SKU 與 Inventory 的拆分，讓我第一次真正理解到，一個「商品」在商業系統裡可能同時存在多種規格、價格與庫存狀態。

## Security & Data Access

當商品、庫存與使用者資料開始具有不同的存取需求後，我第一次真正需要思考「誰可以看到什麼資料」。最初我曾經設計較完整的 Role / Permission 模型，但重新檢視 MVP 的實際需求後，發現這會帶來超出產品需求的複雜度。因此後續更傾向讓資料庫層的 RLS 處理實際需要的資料隔離，而不是提前建立完整的 IAM 系統。

# Problems & Constraints

## Prototype inheritance

最大的問題其實不是技術選型，而是早期開發留下的結構。早期的做法對快速驗證想法非常有效，但這些決策在系統規模增加後開始產生反作用。一開始為了快速驗證需求，大量程式碼直接以功能為中心組合。當系統變大後：之間開始出現大量隱性耦合。因此後續大量時間並不是在新增功能，而是在：**整理以前為了快速前進而留下的技術債。**

**10. What I Learned**

**Engineering**

我開始理解大型程式碼庫中的 abstraction、

domain boundaries、generic types 與 reusable architecture。

**System Design**

我開始理解 authentication、authorization、RLS、inventory、SKU 等系統之間其實存在複雜的相依關係。

**Product**

> 我開始理解「把功能做出來」和「設計一個能持續演進的產品」是兩件不同的事情

**What I Would Do Differently**

如果重新開始，我不會一開始就建立完整的 authorization、permission 或 automation 架構。

我會先從 Product → SKU → Inventory → Cart → Order 這條真正的使用者流程開始，再根據實際出現

的問題增加抽象層。

這個專案讓我開始意識到，好的架構不只是預測未來，而是讓系統能夠在需求改變時低成本地改變。

**Outcome**

Shop 最終沒有以最初規劃的完整電商產品形式完成，而是在重新檢視產品定位後轉為公開封存。雖然未能真正被使用，但它也是目前對我工程能力影響最大的專案之一。

在這個過程中，我第一次真正面對一個「已經不能靠快速拼湊繼續維持」的 codebase，並開始透過 domain modeling、type system、data modeling 與 access control 重新整理系統。

    `
};