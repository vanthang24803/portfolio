import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Thắng Nguyễn Văn",
  initials: "May",
  url: "http://localhost:3000",
  location: "Ha noi, VN",
  locationLink: "https://www.google.com/maps/place/hanoi",
  description:
    "Software Engineer passionate about exploring new technologies and building products for a global audience.",
  summary:
    "Over the past **2+ years**, I’ve worked as a **Backend Engineer**, building and maintaining **e-wallet and payment systems** with **Node.js, C#, and microservices**, focusing on scalability, reliability, and clean backend design.",

  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Mongo Database",
    "Docker",
    "Java",
    "C#",
    "ASP .NET Core",
    "Microservices"
  ],
  navbar: [
    { href: "/en", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "maynguyen24.work@gmail.com",
    tel: "+84916627917",
    social: {
      Email: {
        name: "Email",
        url: "",
        icon: Icons.gmail,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "",
        icon: Icons.linkedin,

        navbar: true,
      },
      Line: {
        name: "Line",
        url: "",
        icon: Icons.line,

        navbar: true,
      },
      Gmail: {
        name: "Gmail",
        url: "",
        icon: Icons.email,
        navbar: false,
      }
    },
  },

  work: [
    {
      company: "JITS Innovation Labs",
      title: "Software Engineer",
      href: "https://jitsinnovationlabs.com/",
      project: [
        {
          name: "Digital Banking",
          client: [{
            name: "TMDS",
            href: "https://www.thaicreditfoundation.org/en",
            img: "/tmds.svg"
          }, {
            name: "Momoney",
            href: "https://www.mo.com.mm/momoney/",
            img: "/momoney.svg"
          }],
          badges: ["Node.js", "Sails.js", "MongoDB", "React", "Angular"],
          location: "Ha Noi, VN",
          start: "Jan 2025",
          end: "Present",
          description: [
            "Led a zero-downtime migration from MongoDB 6 to MongoDB 8 for a production financial system.",
            "Developed core banking features including interbank transfers, bill payments, reconciliation, and online merchant regulatory reporting.",
            "Designed and optimized secure, high-availability backend services for financial transactions.",
            "Built and maintained scalable backend services and React applications serving 50,000+ monthly users, delivering features 15% ahead of schedule.",
            "Implemented unit testing with Mocha and Chai, achieving 90%+ code coverage to ensure system reliability and maintainability."
          ]
        }, {
          name: "V-Smart Pay",
          client: [{
            name: "VinSmart",
            img: "/vsmart.webp",
            href: "https://itviec.com/companies/vinsmart-future"
          }],
          badges: ["Node.js", "MongoDB", "Microservices", "React"],
          location: "Onsite",
          start: "Nov 2025",
          end: "Present",
          description: [
            "Developed bill payment features, integrating multiple service providers and payment workflows.",
            "Developed core banking features: SBV regulatory reports, reconciliation, and bill payments.",
            "Built and maintained microservices-based backend systems, conducting load testing and performance optimization to support high-volume payment processing"
          ]
        }],
      logoUrl: "/jt.webp",
      start: "Jan 2025",
      end: "Present",
    },
    {
      company: "NCC Software",
      title: "Backend Engineer",
      href: "https://ncc.plus/index.html",
      project: [
        {
          name: "Trudi",
          client: [{
            name: "Trudi",
            href: "https://www.trudi.ai/",
            img: "/trudi.webp"
          }],
          badges: ["Express.js,", "PostgreSQL", "Kafka", "Redis", "AWS/Minio", "Docker"],
          location: "Ha Noi, VN",
          start: "Mar 2024",
          end: "Dec 2024",
          description: [
            "Architected a CRM reporting service with Redis caching, reducing database load by 30%.",
            "Automated scheduled reports via Kafka, enabling flexible weekly/monthly customizations.",
            "Led migration from AWS S3 to Minio, cutting storage costs by 20% without compromising reliability.",
            "Partnered with the frontend team to integrate Angular components, ensuring seamless UX."
          ]
        }, {
          name: "Timesheet",
          client: [],
          badges: ["C#", "ASP .NET Core", "PostgreSQL", "Angular", "AWS/Minio", "Docker"],
          location: "Onsite",
          start: "Nov 2023",
          end: "Mar 2024",
          description: [
            "Architected a CRM reporting service with Redis caching, reducing database load by 30%.",
            "Automated scheduled reports via Kafka, enabling flexible weekly/monthly customizations.",
            "Led migration from AWS S3 to Minio, cutting storage costs by 20% without compromising reliability.",
            "Partnered with the frontend team to integrate Angular components, ensuring seamless UX."
          ]
        }],
      logoUrl: "/ncc.jpeg",
      start: "Nov 2023",
      end: "Dec 2024",
    },
  ],
  education: [
    {
      school: "Hanoi University of Mining and Geology",
      href: "https://humg.edu.vn/Pages/home.aspx",
      degree: "Software Engineering",
      logoUrl: "/humg.jpg",
      start: "2021",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    }
  ],

};
