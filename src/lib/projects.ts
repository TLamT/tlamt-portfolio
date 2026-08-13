export type ProjectMeta = {
  id: string
  name: string
  vibe: string
  tagline: string
  description: string
  tags: string[]
  accent: string
  emoji: string
  featured?: boolean
  liveUrl?: string
  nameEn: string
  vibeEn: string
  taglineEn: string
  descriptionEn: string
}

export const PROJECT_META: Record<string, ProjectMeta> = {
  sushiro: {
    id: "sushiro",
    name: "壽司郎排隊",
    vibe: "排隊之魂",
    tagline: "唔使捱餓等位",
    description:
      "實時追蹤全港壽司郎分店嘅叫號同等候時間，仲內置地圖同電話。等人排隊可以排得精明啲。",
    tags: ["Next.js", "shadcn/ui", "即時數據", "React"],
    accent: "oklch(0.68 0.26 335)",
    emoji: "🍣",
    featured: true,
    liveUrl: "https://sushiro-kohl.vercel.app",
    nameEn: "Sushiro Queue Watch",
    vibeEn: "Queue spirit",
    taglineEn: "Skip the hunger, know the queue",
    descriptionEn:
      "Real-time queue numbers and wait times for every Sushiro branch in Hong Kong, with maps and phone numbers built in. Queue smarter, eat happier.",
  },
  weather: {
    id: "weather",
    name: "天氣報到",
    vibe: "風雨同行",
    tagline: "今日帶唔帶遮？",
    description:
      "靚仔天氣應用，一眼睇晒今日同未來幾日天氣，仲有雷達圖，出街前開一開就知點著衫。",
    tags: ["Next.js", "Tailwind", "API", "TypeScript"],
    accent: "oklch(0.79 0.16 200)",
    emoji: "⛈️",
    featured: true,
    nameEn: "Weather Report",
    vibeEn: "Rain or shine",
    taglineEn: "Bring an umbrella or not?",
    descriptionEn:
      "A clean weather app showing today and the coming days, complete with radar maps. One glance before heading out and you'll know what to wear.",
  },
  Transport: {
    id: "Transport",
    name: "交通速查",
    vibe: "都市脈搏",
    tagline: "搭車永遠有後著",
    description:
      "港版交通小助手，睇實巴士同交通工具嘅動向，唔使喺巴士站乾等。",
    tags: ["JavaScript", "交通", "API", "Vite"],
    accent: "oklch(0.75 0.19 60)",
    emoji: "🚌",
    featured: true,
    nameEn: "Transport Quick Check",
    vibeEn: "Urban pulse",
    taglineEn: "Always have a ride lined up",
    descriptionEn:
      "A Hong Kong transport helper that tracks buses and live movements, so you never wait at the stop wondering where the bus is.",
  },
  "MTR.JS": {
    id: "MTR.JS",
    name: "港鐵小工具",
    vibe: "鐵路迷日常",
    tagline: "港鐵路線玩到盡",
    description:
      "以港鐵為主題嘅小工具，畀鐵路迷睇路線、查車程，返工放工都多啲樂趣。",
    tags: ["JavaScript", "MTR", "前端練習"],
    accent: "oklch(0.72 0.21 155)",
    emoji: "🚇",
    featured: true,
    liveUrl: "https://mtr-js.vercel.app",
    nameEn: "MTR Tools",
    vibeEn: "Railfan daily",
    taglineEn: "Ride the MTR to the max",
    descriptionEn:
      "MTR-themed mini tools for rail fans — explore routes, check journey times, and add a little fun to the daily commute.",
  },
  "2048-Stranger-Thing-": {
    id: "2048-Stranger-Thing-",
    name: "2048 怪奇物語",
    vibe: "復古怪誕",
    tagline: "倒轉世界嘅2048",
    description:
      "經典 2048 遊戲配上《怪奇物語》主題，由顛倒世界（The Upside Down）到霓虹配色，中毒性十足。",
    tags: ["HTML", "CSS", "JavaScript", "遊戲"],
    accent: "oklch(0.68 0.22 320)",
    emoji: "🌀",
    featured: true,
    liveUrl: "https://2048-stranger-thing.vercel.app",
    nameEn: "2048 Stranger Things",
    vibeEn: "Retro weirdness",
    taglineEn: "2048 from the Upside Down",
    descriptionEn:
      "The classic 2048 with a Stranger Things twist — from the Upside Down to neon colours, dangerously addictive.",
  },
  Click_game: {
    id: "Click_game",
    name: "點擊大魔王",
    vibe: "手速至上",
    tagline: "撳到手指都斷",
    description:
      "純粹嘅點擊遊戲，睇你一秒可以撳幾多下，挑戰朋友嘅極速。",
    tags: ["JavaScript", "遊戲", "Canvas"],
    accent: "oklch(0.78 0.18 45)",
    emoji: "🖱️",
    featured: true,
    nameEn: "Click Boss",
    vibeEn: "Speed matters",
    taglineEn: "Click till your fingers break",
    descriptionEn:
      "A pure clicker game — see how many times you can click in one second and challenge your friends' limits.",
  },
  "Todo-List": {
    id: "Todo-List",
    name: "待辦清單",
    vibe: "整理控必備",
    tagline: "一件事都唔漏",
    description:
      "輕量待辦清單，加、剔、刪，簡單直接。做人最緊要齊整，寫 code 都係。",
    tags: ["JavaScript", "CRUD", "練習"],
    accent: "oklch(0.85 0.17 95)",
    emoji: "✅",
    liveUrl: "https://todo-list-kappa-nine-49.vercel.app",
    nameEn: "Todo List",
    vibeEn: "For the organised",
    taglineEn: "Never miss a thing",
    descriptionEn:
      "A lightweight todo list — add, tick, delete. Simple and direct. Stay tidy in life and in code.",
  },
}

export const GITHUB_USERNAME = "TLamT"

export const GITHUB_HOME = `https://github.com/${GITHUB_USERNAME}`
