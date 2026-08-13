"use client"

import { useT } from "@/lib/i18n"

export function ProjectsHeading() {
  const t = useT()

  return (
    <div className="max-w-xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
        {t("projects.eyebrow")}
      </p>
      <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
        {t("projects.titleA")}{" "}
        <span className="text-gradient">{t("projects.titleB")}</span>
      </h2>
      <p className="mt-3 text-muted-foreground">{t("projects.desc")}</p>
    </div>
  )
}
