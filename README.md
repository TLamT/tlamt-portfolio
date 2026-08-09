# TLamT · 霓虹 Side Projects ✨

> 🔗 網址：**[https://tlamt-portfolio.vercel.app](https://tlamt-portfolio.vercel.app)**

香港人 **TLamT** 嘅 side projects 展示網站。以霓虹色為主題，將 GitHub 上嘅公開專案一次過晒出嚟，每個專案都帶住自己嘅 **vibe**。

## 功能

- **首頁（`/`）** — 霓虹 hero + 技術 marquee + 專案卡片網格 + 「我做緊啲咩嘢」vibe 區
- **專案詳情頁（`/projects/[slug]`）** — 每個專案嘅描述、標籤、vibe、GitHub 連結，仲有渲染出嚟嘅 README
- **資料自動同步** — 專案清單同 README 直接由 **GitHub API** 攞，無快取（`no-store`），改完 GitHub 即刻反映，唔使手動維護
- **繁體中文內容** — 全站廣東話/中文

## 技術棧

| 技術 | 用途 |
| --- | --- |
| Next.js 16 (App Router) | 框架（Server Components） |
| React 19 | UI |
| TypeScript | 類型安全 |
| Tailwind CSS v4 | 霓虹樣式 |
| shadcn/ui (Radix) | 元件（button, badge） |
| lucide-react | 圖示 |
| GitHub REST API | 專案 + README 資料 |
| react-markdown | README 渲染 |

## 點樣跑

```bash
npm install
npm run dev
```

開 `http://localhost:3000`。

## 資料來源

- **專案列表**：`https://api.github.com/users/TLamT/repos`（跳過 fork / archived / 指定嘅 repo）
- **README**：`https://raw.githubusercontent.com/TLamT/<repo>/<branch>/README.md`
- **中文資料**：每個專案嘅中文名、vibe、描述寫死喺 `src/lib/projects.ts`，方便自己執。

> GitHub API 冇 token 嘅話每小時限 60 次。網站係「每次開頁即時攞」、冇快取，多人瀏覽／狂 F5 有可能撞限額（頁面會顯示暫時攞唔到資料）。想安心可以喺環境變數加 `GITHUB_TOKEN`，喺 `src/lib/github.ts` 加上 `Authorization` header 即可。

## 項目結構

```
src/
├── app/
│   ├── layout.tsx              # 根 layout（強制暗色霓虹）
│   ├── page.tsx                # 首頁
│   ├── projects/[slug]/page.tsx# 專案詳情頁
│   ├── manifest.ts             # PWA manifest
│   └── globals.css             # 霓虹主題 + 動畫
├── components/
│   ├── hero.tsx                # 首頁 hero
│   ├── vibe-marquee.tsx        # 技術跑馬燈
│   ├── project-card.tsx        # 專案卡片
│   ├── markdown.tsx            # README 渲染
│   └── ui/                     # shadcn/ui 元件
└── lib/
    ├── projects.ts             # 中文資料 + vibe 設定
    ├── github.ts               # GitHub API 資料層
    └── utils.ts
```

## 加新專案

1. 喺 GitHub push 一個公開 repo
2. 喺 `src/lib/projects.ts` 加一項 meta（中文名、vibe、描述、顏色）
3. 完成 — 首頁同詳情頁會自動出現
