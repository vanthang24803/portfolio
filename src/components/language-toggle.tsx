"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const isJa = pathname.startsWith("/ja");

  const toggleLanguage = () => {
    let newPathname;
    if (isJa) {
      newPathname = pathname.replace(/^\/ja/, "") || "/en";
    } else {
      newPathname = pathname.replace(/^\/en/, "");
      newPathname = `/ja${newPathname}`;
    }

    router.push(newPathname);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="px-2"
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      <span className="text-xs font-semibold tracking-wide">
        {isJa ? "EN" : "JA"}
      </span>
    </Button>
  );
}
