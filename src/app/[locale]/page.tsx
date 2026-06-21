"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState, type ComponentType } from "react";
import Markdown from "react-markdown";
import axios from "axios";
import { DataType, ProjectProps } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send, ChevronDown } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import Marquee from "react-fast-marquee";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LayoutGrid } from "lucide-react";
import { ClaudeCode, Codex } from "@lobehub/icons";

type SkillIconType = string | ComponentType<{ size?: number }>;

function SkillIcon({ icon, name }: { icon: SkillIconType; name: string }) {
  const [err, setErr] = useState(false);
  if (typeof icon !== "string") {
    const Icon = icon;
    return <Icon size={20} />;
  }
  if (err) return <span className="size-full flex items-center justify-center text-[9px] font-bold text-foreground/50">{name[0]}</span>;
  return <img src={icon} alt={name} className="size-full object-contain" onError={() => setErr(true)} />;
}

const SKILL_ICONS = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", href: "https://www.typescriptlang.org/" },
  { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg", href: "https://go.dev/" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", href: "https://nodejs.org/" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", href: "https://nestjs.com/" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", href: "https://nextjs.org/" },
  { name: "Sails.js", icon: "/tech/sails.png", href: "https://sailsjs.com/" },
  { name: "ASP.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", href: "https://dotnet.microsoft.com/" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", href: "https://www.postgresql.org/" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", href: "https://www.mongodb.com/" },
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg", href: "https://kafka.apache.org/" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", href: "https://redis.io/" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", href: "https://www.docker.com/" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", href: "https://vuejs.org/" },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", href: "https://spring.io/" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", href: "https://aws.amazon.com/" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", href: "https://www.java.com/" },
  { name: "Claude Code", icon: ClaudeCode.Color, href: "https://claude.ai/code" },
  { name: "Codex", icon: Codex.Color, href: "https://platform.openai.com/docs/guides/code" },
];

type SkillItem = { name: string; icon: SkillIconType; href: string };
type SkillCategory = { label: string; labelJa: string; skills: SkillItem[] };

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Language",
    labelJa: "言語",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", href: "https://www.typescriptlang.org/" },
      { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg", href: "https://go.dev/" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", href: "https://www.java.com/" },
    ],
  },
  {
    label: "Backend",
    labelJa: "バックエンド",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", href: "https://nodejs.org/" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", href: "https://nestjs.com/" },
      { name: "Sails.js", icon: "/tech/sails.png", href: "https://sailsjs.com/" },
      { name: "ASP.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", href: "https://dotnet.microsoft.com/" },
      { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", href: "https://spring.io/" },
    ],
  },
  {
    label: "Frontend",
    labelJa: "フロントエンド",
    skills: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", href: "https://nextjs.org/" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", href: "https://vuejs.org/" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", href: "https://react.dev/" },
    ],
  },
  {
    label: "Other",
    labelJa: "その他",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", href: "https://www.postgresql.org/" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", href: "https://www.mongodb.com/" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", href: "https://redis.io/" },
      { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg", href: "https://kafka.apache.org/" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", href: "https://www.docker.com/" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", href: "https://aws.amazon.com/" },
    ],
  },
  {
    label: "AI",
    labelJa: "AI",
    skills: [
      { name: "Claude Code", icon: ClaudeCode.Color, href: "https://claude.ai/code" },
      { name: "Codex", icon: Codex.Color, href: "https://platform.openai.com/docs/guides/code" },
    ],
  },
];

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const t = useTranslations("Home");
  const s = useTranslations("Section");
  const a = useTranslations("Actions");
  const btnRef = useRef<HTMLButtonElement>(null);
  const n = useTranslations("Notification");

  const locale = useLocale();

  const [data, setData] = useState<DataType | null>(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState("about");
  const toggleSection = (id: string) => setCollapsed((p) => ({ ...p, [id]: !p[id] }));

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

  useEffect(() => {
    const ids = ["about", "work", "education", "certification", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = contactForm;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:maynguyen24.work@gmail.com?subject=${subject}&body=${body}`);
  };

  const handlerDownloadCV = () => {
    const filePath =
      locale === "ja"
        ? "/cv/CV_NguyenVanThang_SE_ja.pdf"
        : "/cv/CV_NguyenVanThang_SE_en.pdf";

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

  const TOC_ITEMS = [
    { id: "about", label: s("about") },
    { id: "work", label: locale === "ja" ? "職務経験" : "Work" },
    { id: "education", label: locale === "ja" ? "学歴" : "Education" },
    { id: "certification", label: locale === "ja" ? "資格" : "Certification" },
    { id: "skills", label: locale === "ja" ? "スキル" : "Skills" },
    { id: "projects", label: locale === "ja" ? "プロジェクト" : "Projects" },
    { id: "contact", label: locale === "ja" ? "お問い合わせ" : "Contact" },
  ];

  return (
    <>
      {/* Fixed TOC sidebar — visible only on wide screens */}
      <aside className="hidden xl:flex fixed top-1/2 -translate-y-1/2 left-[calc(50%+420px)] flex-col gap-1 w-36">
        <p className="text-[10px] font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-2 px-2">
          {locale === "ja" ? "このページ" : "On this page"}
        </p>
        {TOC_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={cn(
              "text-left text-[12px] px-2 py-1 rounded-md transition-all",
              activeSection === item.id
                ? "text-primary font-semibold bg-primary/8"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </button>
        ))}
      </aside>

    <main className="flex flex-col min-h-[100dvh] space-y-16 pb-24">

      {/* Hero */}
      <section id="hero" className="pt-4">
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="flex-1 space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-[-0.033em] leading-[1.05] break-keep text-foreground"
              yOffset={8}
              text={`${t("title")} ${t("name")}`}
            />
            <BlurFadeText
              className="text-[15px] text-muted-foreground leading-[1.33] max-w-lg"
              delay={BLUR_FADE_DELAY * 2}
              text={t("description")}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 sm:size-32 border border-hairline shadow-sm">
              <AvatarImage alt={data?.name} src={data?.avatarUrl} className="object-cover object-top" />
              <AvatarFallback className="text-xl font-semibold">{data?.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-hairline pt-10 overflow-x-hidden">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <button className="w-full flex items-center justify-between group mb-4" onClick={() => toggleSection("about")}>
            <h2 className="text-[22px] font-bold tracking-[-0.011em] leading-[1.27] text-foreground">{s("about")}</h2>
            <ChevronDown className={cn("size-4 text-muted-foreground transition-transform duration-300", collapsed.about && "-rotate-90")} />
          </button>
        </BlurFade>
        <motion.div initial={false} animate={{ height: collapsed.about ? 0 : "auto", opacity: collapsed.about ? 0 : 1 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 4} className="w-full min-w-0" yOffset={0}>
            <div className="w-full min-w-0 font-sans text-[15px] text-muted-foreground leading-[1.33] [&_strong]:font-semibold [&_strong]:text-foreground [&_p]:m-0">
              <Markdown>{t("summary")}</Markdown>
            </div>
          </BlurFade>
        </motion.div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-hairline pt-10">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <button className="w-full flex items-center justify-between mb-5" onClick={() => toggleSection("work")}>
            <h2 className="text-[22px] font-bold tracking-[-0.011em] leading-[1.27] text-foreground">{s("work")}</h2>
            <ChevronDown className={cn("size-4 text-muted-foreground transition-transform duration-300", collapsed.work && "-rotate-90")} />
          </button>
        </BlurFade>
        <motion.div initial={false} animate={{ height: collapsed.work ? 0 : "auto", opacity: collapsed.work ? 0 : 1 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
          <div className="flex min-h-0 flex-col gap-y-5 pt-[5px]">
            {data && data.work.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ResumeCard
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
        </motion.div>
      </section>

      {/* Education */}
      <section id="education" className="border-t border-hairline pt-10">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <button className="w-full flex items-center justify-between mb-4" onClick={() => toggleSection("education")}>
            <h2 className="text-[22px] font-bold tracking-[-0.011em] leading-[1.27] text-foreground">{s("education")}</h2>
            <ChevronDown className={cn("size-4 text-muted-foreground transition-transform duration-300", collapsed.education && "-rotate-90")} />
          </button>
        </BlurFade>
        <motion.div initial={false} animate={{ height: collapsed.education ? 0 : "auto", opacity: collapsed.education ? 0 : 1 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
          <div className="flex min-h-0 flex-col gap-y-4 pt-[5px]">
            {data && data.education.map((education, id) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <ResumeCard
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
        </motion.div>
      </section>

      {/* Certification */}
      <section id="certification" className="border-t border-hairline pt-10">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <button className="w-full flex items-center justify-between mb-4" onClick={() => toggleSection("certification")}>
            <h2 className="text-[22px] font-bold tracking-[-0.011em] leading-[1.27] text-foreground">{s("certification")}</h2>
            <ChevronDown className={cn("size-4 text-muted-foreground transition-transform duration-300", collapsed.certification && "-rotate-90")} />
          </button>
        </BlurFade>
        <motion.div initial={false} animate={{ height: collapsed.certification ? 0 : "auto", opacity: collapsed.certification ? 0 : 1 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
          <div className="flex min-h-0 flex-col gap-y-4 pt-[5px]">
            {data && data.certification.map((certification, id) => (
              <BlurFade key={certification.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <ResumeCard
                  href={certification.href}
                  logoUrl={certification.logoUrl}
                  altText={certification.school}
                  title={certification.school}
                  subtitle={certification.degree}
                  period={
                    certification.status === "active" || certification.status === "有効"
                      ? `${certification.start} - ${certification.end}`
                      : ""
                  }
                  project={certification.project as ProjectProps[]}
                  status={undefined}
                />
              </BlurFade>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-hairline pt-10">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[22px] font-bold tracking-[-0.011em] leading-[1.27] text-foreground">
                {s("skills")}
              </h2>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-hairline bg-canvas-soft text-[12px] font-medium text-ink-secondary hover:border-primary/40 hover:text-primary transition-all">
                    <LayoutGrid className="size-3.5" />
                    {s("viewAll")}
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{s("skills")}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    {SKILL_CATEGORIES.map((cat) => (
                      <div key={cat.label}>
                        <p className="text-[11px] font-semibold tracking-[0.06em] uppercase text-muted-foreground mb-3">
                          {locale === "ja" ? cat.labelJa : cat.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill) => (
                            <a
                              key={skill.name}
                              href={skill.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-2 rounded-full bg-canvas-soft border border-hairline hover:border-primary/50 hover:shadow-sm transition-all group"
                            >
                              <span className="flex shrink-0 size-4 items-center justify-center">
                                <SkillIcon icon={skill.icon} name={skill.name} />
                              </span>
                              <span className="text-[12px] font-medium leading-none text-foreground whitespace-nowrap group-hover:text-primary transition-colors">
                                {skill.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="-mx-4 sm:-mx-6 lg:-mx-8">
              <Marquee pauseOnHover speed={40} gradient={false} className="py-2">
                {SKILL_ICONS.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 mx-2.5 px-4 py-2.5 rounded-full bg-canvas-soft border border-hairline hover:border-primary/50 hover:shadow-sm transition-all group"
                  >
                    <span className="flex shrink-0 size-5 items-center justify-center">
                      <SkillIcon icon={skill.icon} name={skill.name} />
                    </span>
                    <span className="text-[13px] font-medium leading-none text-foreground whitespace-nowrap group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </Marquee>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-hairline pt-10">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <button className="w-full text-left mb-0" onClick={() => toggleSection("projects")}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[12px] font-semibold tracking-[0.01em] leading-[1.33] uppercase text-muted-foreground mb-2">
                  Featured Work
                </p>
                <h2 className="text-[26px] font-bold tracking-[-0.024em] leading-[1.23] text-foreground">
                  {s("projects")}
                </h2>
              </div>
              <ChevronDown className={cn("size-4 text-muted-foreground transition-transform duration-300 mt-2 shrink-0", collapsed.projects && "-rotate-90")} />
            </div>
          </button>
        </BlurFade>
        <motion.div initial={false} animate={{ height: collapsed.projects ? 0 : "auto", opacity: collapsed.projects ? 0 : 1 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <p className="mt-3 mb-8 text-[15px] text-muted-foreground max-w-lg leading-[1.33]">
              {s("projectsDescription")}
            </p>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data && data.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ProjectCard
                  href={project.href}
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
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-hairline pt-10">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="rounded-xl bg-secondary px-8 py-10">
            <div className="max-w-lg mx-auto">
              <h2 className="text-[26px] font-bold tracking-[-0.024em] leading-[1.23] mb-2 text-white text-center">
                {s("contact")}
              </h2>
              <p className="text-[14px] text-white/70 text-center mb-8 leading-[1.4]">
                {s("contactSubtitle")}
              </p>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-medium text-white/80 tracking-[0.01em]">
                      {s("yourName")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={s("namePlaceholder")}
                      value={contactForm.name}
                      onChange={(e) => setContactForm((f) => ({ ...f, name: e.target.value }))}
                      className="rounded-lg bg-white/10 border border-white/20 px-3 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-medium text-white/80 tracking-[0.01em]">
                      {s("yourEmail")}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={s("emailPlaceholder")}
                      value={contactForm.email}
                      onChange={(e) => setContactForm((f) => ({ ...f, email: e.target.value }))}
                      className="rounded-lg bg-white/10 border border-white/20 px-3 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-white/80 tracking-[0.01em]">
                    {s("yourMessage")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={s("messagePlaceholder")}
                    value={contactForm.message}
                    onChange={(e) => setContactForm((f) => ({ ...f, message: e.target.value }))}
                    className="rounded-lg bg-white/10 border border-white/20 px-3 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-white text-secondary font-semibold text-[14px] px-6 py-2.5 rounded-full hover:bg-white/90 active:scale-95 transition-all"
                  >
                    {s("sendMessage")} <Send className="inline ml-1.5 h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Download CV */}
      <section id="downloadCv">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="rounded-xl bg-canvas-soft border border-hairline px-8 py-12 text-center">
            <h2 className="text-[26px] font-bold tracking-[-0.024em] leading-[1.23] text-foreground mb-3">
              {s("downloadCV")}
            </h2>
            <p className="text-[15px] text-ink-muted max-w-md mx-auto mb-6 leading-[1.33]">
              {s("downloadCVDescription")}
            </p>
            <Button
              ref={btnRef}
              onClick={handlerDownloadCV}
              className="bg-primary hover:bg-primary-active text-white rounded-full font-medium active:scale-90 transition-all"
            >
              {a("Download CV")} <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </BlurFade>
      </section>
    </main>
    </>
  );
}
