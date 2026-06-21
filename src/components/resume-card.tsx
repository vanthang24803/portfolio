"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ResumeCardProps } from "@/types";

function parsePeriodDate(dateStr: string): Date | null {
  const s = dateStr.trim();
  if (s === "Present" || s === "現在") return new Date();

  // JP: "2025年1月"
  const jpMatch = s.match(/(\d{4})年(\d{1,2})/);
  if (jpMatch) return new Date(parseInt(jpMatch[1]), parseInt(jpMatch[2]) - 1, 1);

  // EN: "Jan 2025", "July 2025"
  const monthMap: Record<string, number> = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, july: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
  };
  const enMatch = s.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (enMatch) {
    const m = monthMap[enMatch[1].toLowerCase()];
    if (m !== undefined) return new Date(parseInt(enMatch[2]), m, 1);
  }
  return null;
}

function calculateDuration(period: string): string {
  const parts = period.split(" - ");
  if (parts.length !== 2) return "";
  const start = parsePeriodDate(parts[0]);
  const end = parsePeriodDate(parts[1]);
  if (!start || !end) return "";
  const total = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (total <= 0) return "";
  const yrs = Math.floor(total / 12);
  const mos = total % 12;
  return [yrs > 0 ? `${yrs} yr${yrs > 1 ? "s" : ""}` : "", mos > 0 ? `${mos} mo` : ""].filter(Boolean).join(" ");
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  status,
  project,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (project) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex bg-card border border-hairline hover:shadow-[0_0_0_1px_#e6e6e6,0_2px_8px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-200 p-4 gap-4">
        <Link href={href || "#"} className="flex-none" onClick={(e) => e.stopPropagation()}>
          <Avatar className="border border-hairline size-12 bg-canvas-soft">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback className="text-xs font-medium">{altText[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-grow items-center flex-col group min-w-0">
          <CardHeader className="p-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-x-2 text-base">
              <h3 className="inline-flex items-center font-medium leading-snug text-sm text-foreground">
                {title}
                {project && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 ml-1 text-muted-foreground translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                )}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                {status && (
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                    {status}
                  </Badge>
                )}
                {period && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="text-xs text-muted-foreground whitespace-nowrap cursor-default">
                        {period}
                      </div>
                    </TooltipTrigger>
                    {calculateDuration(period) && (
                      <TooltipContent side="top" collisionPadding={10} avoidCollisions>
                        <span className="text-xs">{calculateDuration(period)}</span>
                      </TooltipContent>
                    )}
                  </Tooltip>
                )}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs text-muted-foreground mt-0.5">{subtitle}</div>
            )}
          </CardHeader>
          {project && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-4 text-xs sm:text-sm overflow-hidden"
            >
              <div className="relative ml-2 space-y-8 border-l border-hairline">
                {project.map((item, index) => (
                  <div key={index} className="relative pl-6">
                    <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary ring-2 ring-background" />

                    <div className="space-y-2">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                        <h3 className="font-medium leading-snug text-xs sm:text-sm text-foreground">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                          <TooltipProvider>
                            <div className="flex items-center">
                              {item.client.slice(0, 4).map((client, index) => (
                                <div key={index} className="-ml-2 first:ml-0">
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Link
                                        href={client.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block size-7 rounded-full"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <span className="block size-7 rounded-full">
                                          <Avatar className="size-7 border-2 border-background bg-muted">
                                            <AvatarImage src={client.img} alt={client.name} />
                                            <AvatarFallback>{client.name[0]}</AvatarFallback>
                                          </Avatar>
                                        </span>
                                      </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">
                                      <span className="text-xs">{client.name}</span>
                                    </TooltipContent>
                                  </Tooltip>
                                </div>
                              ))}
                            </div>
                          </TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="text-xs text-muted-foreground whitespace-nowrap cursor-default">
                                {item.start} - {item.end}
                              </span>
                            </TooltipTrigger>
                            {calculateDuration(`${item.start} - ${item.end}`) && (
                              <TooltipContent side="top">
                                <span className="text-xs">{calculateDuration(`${item.start} - ${item.end}`)}</span>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </div>
                      </div>

                      {item.location && (
                        <div className="text-xs text-muted-foreground">
                          {item.location}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5">
                        {item.badges.map((badge, i) => (
                          <Badge key={i} variant="outline" className="text-[10px] px-1.5 py-0 border-border text-muted-foreground">
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1 leading-relaxed">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};
