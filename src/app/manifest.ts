import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TLamT · 霓虹 Side Projects",
    short_name: "TLamT",
    description:
      "香港人 TLamT 嘅 side projects 大集合，全部有種霓虹 vibe。",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0b1a",
    theme_color: "#0f0b1a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  }
}
