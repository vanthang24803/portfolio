import { ReactNode } from "react";

type SocialLink = {
  name: string;
  url: string;
  icon: ReactNode;
  navbar: boolean;
};

type Contact = {
  email: string;
  tel: string;
  social: Record<string, SocialLink>;
};

type NavbarItem = {
  href: string;
  icon: ReactNode;
  label: string;
};

type Client = {
  name: string;
  href?: string;
  img?: string;
};

type Project = {
  name: string;
  client: Client[];
  badges: string[];
  location: string;
  start: string;
  end: string;
  description: string[];
};

type Work = {
  company: string;
  title: string;
  href: string;
  logoUrl: string;
  start: string;
  end: string;
  project: Project[];
};

type EducationProject = Project;

type Education = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
  project: EducationProject[];
  status?: string;
};

export type DataType = {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: NavbarItem[];
  contact: Contact;
  work: Work[];
  education: Education[];
  projects: SideProjecr[];
  certification: Education[];
};

export interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  status?: string;
  href?: string;
  period: string;
  project?: ProjectProps[];
}

export interface ClientProps {
  name: string;
  href: string;
  img: string;
}

export interface SideProjecr {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export interface ProjectProps {
  name: string;
  client: ClientProps[];
  badges: string[];
  location: string;
  start: string;
  end?: string;
  description: string[];
}