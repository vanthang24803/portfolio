"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import axios from "axios";
import { DataType, ProjectProps } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import confetti from "canvas-confetti";
import { toast } from "@/hooks/use-toast";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const t = useTranslations("Home");
  const s = useTranslations("Section");
  const a = useTranslations("Actions");
  const btnRef = useRef<HTMLButtonElement>(null);
  const n = useTranslations("Notification");


  const locale = useLocale();

  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/profile", {
          headers: {
            "Accept-Language": locale,
          },
        });

        setData(response.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locale]);

  const handlerDownloadCV = () => {
    const filePath =
      locale === "ja"
        ? "/cv/CV_NguyenVanThang_SE_ja.pdf"
        : "/cv/CV_NguyenVanThang_SE.pdf";

    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop()!;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

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
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${t("title")} ${t("name")} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-base"
                delay={BLUR_FADE_DELAY}
                text={t("description")}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-32 border">
                <AvatarImage alt={data?.name} src={data?.avatarUrl} className="object-cover object-top" />
                <AvatarFallback>{data?.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id={s("about")}>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{s("about")}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {t("summary")}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{s("work")}</h2>
          </BlurFade>
          {data && data.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                project={work.project as ProjectProps[]}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{s("education")}</h2>
          </BlurFade>
          {data && data.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                project={education.project as ProjectProps[]}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="certification">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{s("certification")}</h2>
          </BlurFade>
          {data && data.certification.map((certification, id) => (
            <BlurFade
              key={certification.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={certification.school}
                href={certification.href}
                logoUrl={certification.logoUrl}
                altText={certification.school}
                title={certification.school}
                subtitle={certification.degree}
                period={`${certification.start} - ${certification.end}`}
                project={certification.project as ProjectProps[]}
                status={certification.status}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{s("skills")}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {data && data.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {s("projects")}
                </h2>
                <p className="text-muted-foreground text-sm md:text-sm lg:text-sm xl:text-base leading-snug max-w-2xl mx-auto text-center">
                  {s("projectsDescription")}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {data && data.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {s("contact")}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground text-sm md:text-sm lg:text-sm xl:text-base leading-relaxed text-center">
                {s("wantToChat")}{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  {s("linkText")}
                </Link>{" "}
                {s("ignoreSoliciting")}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="downloadCv">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {s("downloadCV")}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground text-sm md:text-sm lg:text-sm xl:text-base leading-relaxed text-center">
                {s("downloadCVDescription")}
              </p>
              <Button
                ref={btnRef}
                variant="default"
                onClick={handlerDownloadCV}
              >
                {a("Download CV")} <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
