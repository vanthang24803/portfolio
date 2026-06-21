import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getTranslations } from "next-intl/server";
import { Toaster } from "@/components/ui/toaster";
import { ClientLocaleProvider } from "@/components/locale-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const BASE_URL = "https://cv.thangnguyen.io.vn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Thang Nguyen Van", url: BASE_URL }],
    creator: "Thang Nguyen Van",
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        "en-US": `${BASE_URL}/en`,
        "ja-JP": `${BASE_URL}/ja`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${BASE_URL}/${locale}`,
      siteName: t("title"),
      locale: locale === "ja" ? "ja_JP" : "en_US",
      alternateLocale: locale === "ja" ? "en_US" : "ja_JP",
      type: "website",
      images: [
        {
          url: "/me.jpeg",
          width: 800,
          height: 800,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
      images: ["/me.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <div className="max-w-3xl mx-auto min-h-screen py-12 sm:py-20 px-6">
          <ClientLocaleProvider initialLocale={locale}>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
              <TooltipProvider delayDuration={0}>
                {children}
                <Navbar />
                <Toaster />
              </TooltipProvider>
            </ThemeProvider>
          </ClientLocaleProvider>
        </div>
      </body>
    </html>
  );
}
