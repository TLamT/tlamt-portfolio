"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, X } from "lucide-react"
import { Dialog } from "radix-ui"

import { Button } from "@/components/ui/button"
import { LinkedinIcon, WhatsappIcon } from "@/components/icons"
import { CONTACT } from "@/lib/contact"
import { useT } from "@/lib/i18n"

export function ContactDialog() {
  const t = useT()
  const [open, setOpen] = React.useState(false)

  const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(CONTACT.emailSubject)}`
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="default" size="sm">
          <Mail />
          {t("header.contact")}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-6 shadow-2xl backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-40 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Dialog.Title className="text-xl font-bold tracking-tight">
                    {t("contact.title")}
                  </Dialog.Title>
                  <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                    {t("contact.desc")}
                  </Dialog.Description>
                </div>
                <Dialog.Close asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="-mr-1.5 -mt-1 text-muted-foreground"
                  >
                    <X />
                    <span className="sr-only">{t("contact.close")}</span>
                  </Button>
                </Dialog.Close>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <Link
                  href={mailtoUrl}
                  aria-label="Email"
                  title="Email"
                  className="group flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60 transition-all hover:border-fuchsia-400/60 hover:bg-fuchsia-400/5 hover:shadow-[0_0_24px_-8px_rgba(232,121,249,0.6)]"
                >
                  <Mail className="size-5 text-fuchsia-300" />
                </Link>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="group flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60 transition-all hover:border-lime-400/60 hover:bg-lime-400/5 hover:shadow-[0_0_24px_-8px_rgba(163,230,53,0.6)]"
                >
                  <WhatsappIcon className="size-5 text-lime-300" />
                </Link>

                <Link
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="group flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/5 hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.6)]"
                >
                  <LinkedinIcon className="size-5 text-cyan-300" />
                </Link>
              </div>

              <p className="mt-5 text-center text-xs text-muted-foreground">
                {t("contact.hint")}
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
