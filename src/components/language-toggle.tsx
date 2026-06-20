"use client";

import { Button } from "@/components/ui/button";
import { useClientLocale } from "@/components/locale-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useClientLocale();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="px-2"
      onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
      aria-label="Toggle language"
    >
      <span className="text-xs font-semibold tracking-wide">
        {locale === "ja" ? "EN" : "日本"}
      </span>
    </Button>
  );
}
