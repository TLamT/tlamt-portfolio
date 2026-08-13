"use client"

import * as React from "react"

export type Locale = "zh-HK" | "en"

export const LOCALES: Locale[] = ["zh-HK", "en"]

type Card = { title: string; text: string }
export type Dict = {
  "header.projects": string
  "header.github": string
  "header.contact": string
  "header.about": string
  "hero.badge": string
  "hero.titleA": string
  "hero.titleB": string
  "hero.subtitle": string
  "hero.doing": string
  "hero.ctaProjects": string
  "hero.ctaGithub": string
  "typewriter.phrases": string[]
  "marquee.aria": string
  "marquee.items": string[]
  "projects.eyebrow": string
  "projects.titleA": string
  "projects.titleB": string
  "projects.desc": string
  "projects.empty": string
  "projects.search": string
  "projects.all": string
  "projects.none": string
  "vibe.eyebrow": string
  "vibe.title": string
  "vibe.cards": Card[]
  "about.eyebrow": string
  "about.title": string
  "about.p1": string
  "about.p2": string
  "about.skills": string
  "footer.by": string
  "footer.side": string
  "contact.title": string
  "contact.desc": string
  "contact.close": string
  "contact.hint": string
  "project.back": string
  "project.play": string
  "project.source": string
  "project.updated": string
  "project.language": string
  "project.readme": string
  "notFound.sub": string
  "notFound.back": string
  "easter.unlocked": string
}

export const dictionaries: Record<Locale, Dict> = {
  "zh-HK": {
    "header.projects": "專案",
    "header.github": "GitHub",
    "header.contact": "聯絡",
    "header.about": "關於我",
    "hero.badge": "香港人 · 前端自學 · 整靚仔嘢",
    "hero.titleA": "我嘅 side projects，",
    "hero.titleB": "有種霓虹 vibe",
    "hero.subtitle":
      "由壽司郎排隊到 2048 怪奇物語，全部係我閒時整嚟玩嘅嘢。撳入去感受下每個專案嘅味道。",
    "hero.doing": "我做緊嘅嘢：",
    "hero.ctaProjects": "睇下我嘅專案",
    "hero.ctaGithub": "GitHub 主頁",
    "typewriter.phrases": [
      "壽司郎排隊 app",
      "2048 怪奇物語版",
      "港鐵即時數據",
      "天氣實時資訊",
      "霓虹 vibe 網站",
    ],
    "marquee.aria": "常用技術",
    "marquee.items": [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "JavaScript",
      "GitHub API",
      "繁體中文",
      "香港人做㗎",
      "霓虹色",
      "Vite",
      "HTML / CSS",
    ],
    "projects.eyebrow": "Projects",
    "projects.titleA": "每個專案，都有自己嘅",
    "projects.titleB": "vibe",
    "projects.desc":
      "下面全部都係我喺 GitHub 公開嘅作品。撳入去可以睇埋 README 同原始碼。",
    "projects.empty": "GitHub 暫時攞唔到資料，稍後再嚟睇下？",
    "projects.search": "搜尋專案…",
    "projects.all": "全部",
    "projects.none": "搵唔到相符嘅專案。",
    "vibe.eyebrow": "The Vibe",
    "vibe.title": "我做緊啲咩嘢",
    "vibe.cards": [
      {
        title: "即時數據獵人",
        text: "鍾意用公開 API 砌啲有真實數據、即時更新嘅嘢，例如排隊人數、天氣、交通。",
      },
      {
        title: "玩味至上",
        text: "鍾意整啲好玩、有主題嘅小遊戲，將鍾意嘅 pop culture 融入去。",
      },
      {
        title: "靚仔控",
        text: "用 Tailwind + shadcn/ui 砌到靚靚仔仔，連霓虹色都配埋畀你。",
      },
      {
        title: "香港元素",
        text: "好多專案都以香港做主角，壽司郎、港鐵、巴士，本地嘢特別有親切感。",
      },
      {
        title: "即刻上線",
        text: "整完就即刻部署上 Vercel 畀人用，唔鍾意留喺 localhost 度生草。",
      },
      {
        title: "自己動手學",
        text: "自學路線，由 HTML 到 React，全部靠 side project 練返嚟。",
      },
    ],
    "about.eyebrow": "關於我",
    "about.title": "由壽司郎排隊開始，砌出一片霓虹",
    "about.p1":
      "我係 TLamT，香港前端自學者。由 HTML 到 React，一路靠 side project 練返嚟 —— 鍾意用公開 API 砌啲有真實數據、即時更新嘅嘢。",
    "about.p2":
      "而家主力玩 Next.js、TypeScript 同 Tailwind，整靚仔、好玩、即刻可以畀人用嘅嘢。",
    "about.skills": "用緊嘅技術",
    "footer.by": "用",
    "footer.side": "砌嘅 side projects",
    "contact.title": "搵我傾偈",
    "contact.desc": "揀個你方便嘅方法，我都會覆你。",
    "contact.close": "關閉",
    "contact.hint": "通常一日內回覆，急事用 WhatsApp 最快。",
    "project.back": "返去全部專案",
    "project.play": "去玩下",
    "project.source": "GitHub 原始碼",
    "project.updated": "最近更新",
    "project.language": "語言",
    "project.readme": "README",
    "notFound.sub": "呢度咩都冇，或者未砌好。",
    "notFound.back": "返去主頁",
    "easter.unlocked": "彩蛋解鎖！霓虹之力全開 ✨",
  },
  en: {
    "header.projects": "Projects",
    "header.github": "GitHub",
    "header.contact": "Contact",
    "header.about": "About",
    "hero.badge": "Hong Kong · Self-taught Frontend · Building neat things",
    "hero.titleA": "My side projects,",
    "hero.titleB": "with a neon vibe",
    "hero.subtitle":
      "From Sushiro queue trackers to a Stranger Things 2048 — everything I build in my spare time. Click in and taste each project's vibe.",
    "hero.doing": "What I'm building:",
    "hero.ctaProjects": "See my projects",
    "hero.ctaGithub": "GitHub Home",
    "typewriter.phrases": [
      "Sushiro queue app",
      "2048 Stranger Things",
      "MTR live data",
      "Real-time weather",
      "Neon vibe websites",
    ],
    "marquee.aria": "Tech stack",
    "marquee.items": [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "JavaScript",
      "GitHub API",
      "Chinese",
      "Made in HK",
      "Neon vibes",
      "Vite",
      "HTML / CSS",
    ],
    "projects.eyebrow": "Projects",
    "projects.titleA": "Every project has its own",
    "projects.titleB": "vibe",
    "projects.desc":
      "All public projects on my GitHub. Click through for the README and source code.",
    "projects.empty": "Can't reach GitHub right now — check back later?",
    "projects.search": "Search projects…",
    "projects.all": "All",
    "projects.none": "No matching projects.",
    "vibe.eyebrow": "The Vibe",
    "vibe.title": "What I'm into",
    "vibe.cards": [
      {
        title: "Live data hunter",
        text: "I love building things with real, live data from public APIs — queues, weather, transport.",
      },
      {
        title: "Fun first",
        text: "I like making themed mini-games and mixing my favourite pop culture into code.",
      },
      {
        title: "Pixel perfectionist",
        text: "Tailwind + shadcn/ui until it looks just right — with neon colours to match.",
      },
      {
        title: "Hong Kong flavour",
        text: "Many projects are proudly local: Sushiro, MTR, buses. Home turf just hits different.",
      },
      {
        title: "Ship it",
        text: "Once it works, it goes live on Vercel. No projects left rotting on localhost.",
      },
      {
        title: "Self-taught",
        text: "HTML to React, learned through side projects one deploy at a time.",
      },
    ],
    "about.eyebrow": "About",
    "about.title": "From Sushiro queues to a neon skyline",
    "about.p1":
      "I'm TLamT, a self-taught frontend developer from Hong Kong. From HTML to React, I've learned it all through side projects — I love building things with real, live data from public APIs.",
    "about.p2":
      "These days I work mainly with Next.js, TypeScript and Tailwind, building things that look good, feel fun, and ship fast.",
    "about.skills": "Tech I use",
    "footer.by": "Made with",
    "footer.side": "side projects",
    "contact.title": "Let's talk",
    "contact.desc": "Pick whatever works for you — I'll get back to you.",
    "contact.close": "Close",
    "contact.hint":
      "I usually reply within a day; WhatsApp is fastest for anything urgent.",
    "project.back": "Back to all projects",
    "project.play": "Try it",
    "project.source": "Source on GitHub",
    "project.updated": "Last updated",
    "project.language": "Language",
    "project.readme": "README",
    "notFound.sub": "Nothing here — or not built yet.",
    "notFound.back": "Back home",
    "easter.unlocked": "Easter egg unlocked! Neon power, activate ✨",
  },
}

export const LocaleContext = React.createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
} | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>("zh-HK")

  React.useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null
    if (saved && LOCALES.includes(saved)) {
      setLocale(saved)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("locale", locale)
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): Locale {
  const ctx = React.useContext(LocaleContext)
  return ctx?.locale ?? "zh-HK"
}

export function useLocaleContext() {
  const ctx = React.useContext(LocaleContext)
  return ctx ?? { locale: "zh-HK" as Locale, setLocale: () => {} }
}

export function useT() {
  const locale = useLocale()
  return React.useCallback(
    <K extends keyof Dict>(key: K): Dict[K] =>
      dictionaries[locale][key] as Dict[K],
    [locale]
  )
}
