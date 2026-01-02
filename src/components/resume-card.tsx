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
      <Card className="flex">
        <Link href={href || "#"} className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground tracking-tight whitespace-nowrap text-right">
                {period}
              </div>

            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
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
              className="mt-2 text-xs sm:text-sm"
            >
              <div className="relative ml-4 space-y-8 border-l border-muted-foreground/30">
                {project.map((item, index) => (
                  <div key={index} className="relative pl-6">
                    <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary" />

                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                            {item.name}
                          </h3>
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
                        </div>

                        <span className="text-xs text-muted-foreground">
                          {item.start} - {item.end}
                        </span>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        {item.location}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {item.badges.map((badge, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      <ul className="list-disc pl-4 text-xs sm:text-sm text-muted-foreground space-y-1">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-xs">{desc}</li>
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
