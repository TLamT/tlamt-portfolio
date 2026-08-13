"use client"

import { Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LOCALES, useLocaleContext } from "@/lib/i18n"

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocaleContext()

  const next = LOCALES.find((l) => l !== locale) ?? "en"

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={locale === "zh-HK" ? "切換到英文" : "Switch to Chinese"}
      onClick={() => setLocale(next)}
      className="gap-1.5"
    >
      <Languages className="size-3.5" />
      {next === "zh-HK" ? "中" : "EN"}
    </Button>
  )
}
