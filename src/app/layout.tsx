import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { CursorGlow } from "@/components/cursor-glow";
import { Konami } from "@/components/konami";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tlamt-portfolio.vercel.app"),
  title: {
    default: "TLamT · 霓虹 Side Projects",
    template: "%s · TLamT",
  },
  description:
    "香港人 TLamT 嘅 side projects 大集合 —— 由壽司郎排隊到 2048 怪奇物語，全部有種霓虹 vibe。",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0f0b1a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-HK" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-svh flex-col antialiased`}
      >
        <LocaleProvider>
          <CursorGlow />
          <Konami />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  );
}
