import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "./icons";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-hairline bg-card hover:shadow-[0_0_0_1px_#e6e6e6,0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200 h-full shadow-none rounded-xl">
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-4 pt-4 pb-2">
        <div className="space-y-1.5">
          <CardTitle className="mt-1 text-[15px] font-semibold text-foreground leading-snug tracking-[-0.006em]">
            {title}
          </CardTitle>
          <time className="text-[12px] font-semibold tracking-[0.01em] text-ink-faint">{dates}</time>
          <div className="hidden text-[12px] underline print:visible text-ink-muted">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="text-[14px] text-ink-muted leading-[1.43] line-clamp-3">
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4 pb-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-canvas-soft border border-hairline px-2 py-0.5 text-[11px] font-semibold tracking-[0.01em] text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1.5">
            {links.map((linkItem, idx) => {
              const IconComponent = Icons[linkItem.icon as keyof typeof Icons];
              return (
                <Link key={idx} href={linkItem.href || "#"} target="_blank">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-canvas-soft border border-hairline px-2.5 py-1 text-[11px] font-medium text-ink-secondary hover:bg-muted transition-colors">
                    {IconComponent && <IconComponent className="size-3" />}
                    {linkItem.type}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
