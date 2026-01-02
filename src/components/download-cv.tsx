"use client";

import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { useLocale, useTranslations } from "next-intl";
import confetti from "canvas-confetti";
import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function DownloadCV() {
      const locale = useLocale();
      const btnRef = useRef<HTMLButtonElement>(null);
      const { toast } = useToast();
      const n = useTranslations("Notification");
      const a = useTranslations("Actions");

      const handlerDownloadCV = () => {
            // Download file
            // const filePath =
            //       locale === "ja"
            //             ? "/cv/CV_NguyenVanThang_SE_ja.pdf"
            //             : "/cv/CV_NguyenVanThang_SE.pdf";

            // const link = document.createElement("a");
            // link.href = filePath;
            // link.download = filePath.split("/").pop()!;
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);

            // Bắn confetti từ nút
            if (btnRef.current) {
                  const rect = btnRef.current.getBoundingClientRect();
                  confetti({
                        particleCount: 50,
                        spread: 60,
                        origin: {
                              x: (rect.left + rect.width / 2) / window.innerWidth,
                              y: (rect.top + rect.height / 2) / window.innerHeight,
                        },
                  });
                  toast({
                        title: a("Notification"),
                        description: n("Download CV"),
                        duration: 2000,

                  });
            }
      };

      return (
            <Button
                  ref={btnRef}
                  variant="ghost"
                  type="button"
                  size="icon"
                  className="px-2"
                  onClick={handlerDownloadCV}
            >
                  <DownloadIcon className="h-[1.1rem] w-[1.1rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
            </Button>
      );
}
