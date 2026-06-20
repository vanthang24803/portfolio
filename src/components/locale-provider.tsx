"use client";

import { NextIntlClientProvider, useTranslations } from "next-intl";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import enMessages from "@/messages/en.json";
import jaMessages from "@/messages/ja.json";

type Locale = "en" | "ja";
const MESSAGES: Record<Locale, typeof enMessages> = { en: enMessages, ja: jaMessages as any };

interface LocaleCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleCtx>({ locale: "en", setLocale: () => {} });

function TitleSync() {
  const t = useTranslations("Metadata");
  useEffect(() => {
    document.title = t("title");
  }, [t]);
  return null;
}

export function ClientLocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: string;
}) {
  const [locale, setLocaleState] = useState<Locale>(
    (initialLocale === "ja" ? "ja" : "en") as Locale
  );

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "ja") setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider key={locale} locale={locale} messages={MESSAGES[locale]}>
        <TitleSync />
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useClientLocale() {
  return useContext(LocaleContext);
}
