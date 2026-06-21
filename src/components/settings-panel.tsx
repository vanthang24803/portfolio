"use client";

import { useState, useEffect } from "react";
import { Settings, RotateCcw } from "lucide-react";
import { useTheme } from "next-themes";
import { useClientLocale } from "@/components/locale-provider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const UI_FONTS = [
  { id: "inter", label: "Inter", value: "Inter, sans-serif", url: null },
  {
    id: "dm-sans",
    label: "DM Sans",
    value: "'DM Sans', sans-serif",
    url: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap",
  },
  {
    id: "plus-jakarta",
    label: "Plus Jakarta Sans",
    value: "'Plus Jakarta Sans', sans-serif",
    url: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
  },
  {
    id: "nunito",
    label: "Nunito",
    value: "'Nunito', sans-serif",
    url: "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap",
  },
];

const PRIMARY_COLORS = [
  { id: "blue",   label: "Blue",   hsl: "208 100% 44%", activeHsl: "208 100% 34%" },
  { id: "green",  label: "Green",  hsl: "142 71% 45%",  activeHsl: "142 71% 35%" },
  { id: "purple", label: "Purple", hsl: "262 83% 58%",  activeHsl: "262 83% 48%" },
  { id: "orange", label: "Orange", hsl: "25 95% 53%",   activeHsl: "25 95% 43%"  },
  { id: "red",    label: "Red",    hsl: "0 84% 60%",    activeHsl: "0 84% 50%"   },
  { id: "pink",   label: "Pink",   hsl: "323 72% 65%",  activeHsl: "323 72% 55%" },
];

const KANJI_FONTS = [
  { id: "system", label: "OS Default", labelJa: "OSデフォルト", value: "system-ui, sans-serif", url: null },
  {
    id: "zen-maru",
    label: "Zen Maru Gothic",
    value: "'Zen Maru Gothic', sans-serif",
    url: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap",
  },
  {
    id: "noto-jp",
    label: "Noto Sans JP",
    value: "'Noto Sans JP', sans-serif",
    url: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap",
  },
  {
    id: "biz-ud",
    label: "BIZ UDGothic",
    value: "'BIZ UDGothic', sans-serif",
    url: "https://fonts.googleapis.com/css2?family=BIZ+UDGothic:wght@400;700&display=swap",
  },
];

function injectFont(url: string) {
  if (typeof document === "undefined" || document.querySelector(`link[href="${url}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors",
        checked ? "bg-primary" : "bg-foreground/20"
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block size-4 rounded-full bg-white shadow-sm transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
}

const t = {
  en: {
    title: "Interface Settings",
    language: "Language",
    darkMode: "Dark Mode",
    darkModeDesc: "Toggle light/dark theme",
    primaryColor: "Primary Color",
    fontKanji: "Font Kanji",
    uiFont: "UI Font",
    reset: "Reset all settings",
  },
  ja: {
    title: "インターフェース設定",
    language: "言語",
    darkMode: "ダークモード",
    darkModeDesc: "ライト/ダークテーマの切り替え",
    primaryColor: "テーマカラー",
    fontKanji: "漢字フォント",
    uiFont: "UIフォント",
    reset: "設定をリセット",
  },
};

export function SettingsPanel() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useClientLocale();
  const isJa = locale === "ja";
  const i = isJa ? t.ja : t.en;

  const [uiFont, setUiFont] = useState("inter");
  const [kanjiFont, setKanjiFont] = useState("system");
  const [primaryColor, setPrimaryColor] = useState("blue");
  const [open, setOpen] = useState(false);

  // restore + apply saved font on mount / locale change
  useEffect(() => {
    const uf = localStorage.getItem("ui-font") || "inter";
    const kf = localStorage.getItem("kanji-font") || "system";
    setUiFont(uf);
    setKanjiFont(kf);
    const active = isJa
      ? KANJI_FONTS.find((f) => f.id === kf)
      : UI_FONTS.find((f) => f.id === uf);
    if (active?.url) injectFont(active.url);
    document.body.style.fontFamily = active && active.id !== "inter" && active.id !== "system"
      ? active.value
      : "";
  }, [isJa]);

  // restore + apply saved primary color on mount
  useEffect(() => {
    const saved = localStorage.getItem("primary-color") || "blue";
    setPrimaryColor(saved);
    const color = PRIMARY_COLORS.find((c) => c.id === saved);
    if (color) {
      document.documentElement.style.setProperty("--primary", color.hsl);
      document.documentElement.style.setProperty("--primary-active", color.activeHsl);
      document.documentElement.style.setProperty("--ring", color.hsl);
    }
  }, []);

  // preload all font previews when dialog opens
  useEffect(() => {
    if (!open) return;
    (isJa ? KANJI_FONTS : UI_FONTS).forEach((f) => {
      if (f.url) injectFont(f.url);
    });
  }, [open, isJa]);

  const handleUiFont = (id: string) => {
    const font = UI_FONTS.find((f) => f.id === id)!;
    setUiFont(id);
    localStorage.setItem("ui-font", id);
    if (font.url) injectFont(font.url);
    document.body.style.fontFamily = id === "inter" ? "" : font.value;
  };

  const handleKanjiFont = (id: string) => {
    const font = KANJI_FONTS.find((f) => f.id === id)!;
    setKanjiFont(id);
    localStorage.setItem("kanji-font", id);
    if (font.url) injectFont(font.url);
    document.body.style.fontFamily = id === "system" ? "" : font.value;
  };

  const handleLang = (lang: "en" | "ja") => {
    setLocale(lang);
  };

  const handlePrimaryColor = (id: string) => {
    const color = PRIMARY_COLORS.find((c) => c.id === id)!;
    setPrimaryColor(id);
    localStorage.setItem("primary-color", id);
    document.documentElement.style.setProperty("--primary", color.hsl);
    document.documentElement.style.setProperty("--primary-active", color.activeHsl);
    document.documentElement.style.setProperty("--ring", color.hsl);
  };

  const handleReset = () => {
    setUiFont("inter");
    setKanjiFont("system");
    setPrimaryColor("blue");
    localStorage.removeItem("ui-font");
    localStorage.removeItem("kanji-font");
    localStorage.removeItem("primary-color");
    document.body.style.fontFamily = "";
    document.documentElement.style.removeProperty("--primary");
    document.documentElement.style.removeProperty("--primary-active");
    document.documentElement.style.removeProperty("--ring");
    setTheme("light");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "px-2")}>
          <Settings className="size-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[86vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{i.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          {/* Language */}
          <section>
            <p className="text-sm font-semibold mb-2">{i.language}</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { lang: "en", flag: "🇺🇸", label: "English" },
                { lang: "ja", flag: "🇯🇵", label: "日本語" },
              ].map(({ lang, flag, label }) => {
                const active = isJa ? lang === "ja" : lang === "en";
                return (
                  <button
                    key={lang}
                    onClick={() => handleLang(lang as "en" | "ja")}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition-all text-left",
                      active
                        ? "border-primary bg-primary/8 text-primary font-medium"
                        : "border-hairline hover:border-muted-foreground/40 text-foreground"
                    )}
                  >
                    <span className="text-base">{flag}</span>
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Dark Mode */}
          <section className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{i.darkMode}</p>
              <p className="text-xs text-muted-foreground">{i.darkModeDesc}</p>
            </div>
            <Toggle
              checked={theme === "dark"}
              onChange={(v) => setTheme(v ? "dark" : "light")}
            />
          </section>

          {/* Primary Color */}
          <section>
            <p className="text-sm font-semibold mb-3">{i.primaryColor}</p>
            <div className="flex items-center justify-between w-full">
              {PRIMARY_COLORS.map((color) => {
                const active = primaryColor === color.id;
                return (
                  <button
                    key={color.id}
                    title={color.label}
                    onClick={() => handlePrimaryColor(color.id)}
                    className={cn(
                      "size-8 rounded-full transition-all ring-offset-2 ring-offset-background",
                      active ? "ring-2 ring-foreground scale-110" : "hover:scale-110"
                    )}
                    style={{ backgroundColor: `hsl(${color.hsl})` }}
                  />
                );
              })}
            </div>
          </section>

          {/* Kanji Font — JA only */}
          {isJa && (
            <section>
              <p className="text-sm font-semibold mb-2">{i.fontKanji}</p>
              <div className="grid grid-cols-2 gap-2">
                {KANJI_FONTS.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => handleKanjiFont(font.id)}
                    className={cn(
                      "flex flex-col items-start rounded-xl border px-3 py-3 transition-all text-left",
                      kanjiFont === font.id
                        ? "border-primary bg-primary/8"
                        : "border-hairline hover:border-muted-foreground/40"
                    )}
                  >
                    <span
                      className="text-[28px] leading-[1.2] text-foreground"
                      style={{ fontFamily: font.value }}
                    >
                      漢字
                    </span>
                    <span className="text-[11px] text-muted-foreground mt-1">{isJa && "labelJa" in font ? font.labelJa : font.label}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* UI Font — EN only */}
          {!isJa && (
            <section>
              <p className="text-sm font-semibold mb-2">{i.uiFont}</p>
              <div className="grid grid-cols-2 gap-2">
                {UI_FONTS.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => handleUiFont(font.id)}
                    className={cn(
                      "flex flex-col items-start rounded-xl border px-3 py-3 transition-all text-left",
                      uiFont === font.id
                        ? "border-primary bg-primary/8"
                        : "border-hairline hover:border-muted-foreground/40"
                    )}
                  >
                    <span
                      className="text-[15px] font-medium leading-snug text-foreground"
                      style={{ fontFamily: font.value }}
                    >
                      Aa Bb 123
                    </span>
                    <span className="text-[11px] text-muted-foreground mt-1">{font.label}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Reset */}
          <div className="pt-4 border-t border-hairline">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto"
            >
              <RotateCcw className="size-3.5" />
              {i.reset}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
