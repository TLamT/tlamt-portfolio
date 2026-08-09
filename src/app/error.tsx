"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-4 px-4 py-16">
      <p className="text-destructive">載入失敗，請稍後再試</p>
      <Button onClick={reset}>重試</Button>
    </main>
  )
}
