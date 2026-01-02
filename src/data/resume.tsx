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
    "Microservices",
    "AWS"
  ],
  navbar: [
    { href: "/en", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "maynguyen24.work@gmail.com",
    tel: "+84916627917",
    social: {
      Gmail: {
        name: "Gmail",
        url: "mailto:maynguyen24.work@gmail.com",
        icon: Icons.gmail,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vanthang24803",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/may-nguyen-143488256/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Line: {
        name: "Line",
        url: "https://line.me/ti/p/3yQ9aBNW-r",
        icon: Icons.line,

        navbar: true,
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
          location: "Thailand, Myanmar Bank",
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
          location: "VinGroup",
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
          location: "Autrilia",
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
          location: "Internal",
          start: "Nov 2023",
          end: "Mar 2024",
          description: [
            "Developed HRM features for project tracking, attendance, and leave management, serving 500+ users.",
            "Optimized SQL queries, improving report generation speed by 25%.",
            "Migrated AWS S3 services to Minio, maintaining 100% uptime during transition.",
            "Wrote robust unit tests using NUnit, Moq, and Testcontainers, achieving 90% code coverage."
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
      start: "Sep 2021",
      end: "Aug 2025",
      project: [
        {
          name: "Scientific research",
          client: [],
          badges: ["Express.js", "Node.js", "MongoDB", "React"],
          location: "Student research",
          start: "Feb 2023",
          end: "Aug 2023",
          description: [
            "Developed a geological map website for Bac Kan province, showcasing geotourism sites using WebGL.",
            "Served as the Team Leader of the scientific research project.",
            "Collaborated and developed the project based on real geological data from Bac Kan province."
          ]
        }],
    }
  ],
  projects: [
    {
      title: "Manga Ecommerce",
      href: "https://github.com/vanthang24803/AMAK_Store_V2",
      dates: "Oct 2024 - Mar 2025",
      active: true,
      description:
        "",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "ASP.NET Core",
        "Docker",
        "AWS",
        "TailwindCSS",
        "Shadcn UI",
        "Domain Driver Design"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/vanthang24803/AMAK_Store_V2",
          icon: "github"
        },
      ],
      image: "",
      video:
        "https://cdn.llm.report/openai-demo.mp4",
    }
  ],
  certification: [
    {
      school: "Toeic IIG - 550",
      href: "https://iigvietnam.com/vi/",
      degree: "Reading, Listening",
      logoUrl: "/iig.png",
      start: "Tue 2023",
      status: "active",
      end: "Tue 2025",
    }
  ],

};

export const DATA_JP = {
  name: "Thắng Nguyễn Văn",
  initials: "May",
  url: "http://localhost:3000",
  location: "ハノイ, ベトナム",
  locationLink: "https://www.google.com/maps/place/hanoi",
  description:
    "新しい技術を探求し、グローバルなユーザー向けに製品を構築することに情熱を持つソフトウェアエンジニアです。",
  summary:
    "過去**2年以上**にわたり、**バックエンドエンジニア**として、**Node.js、C#、マイクロサービス**を使用した**電子ウォレットおよび決済システム**の構築と保守に従事してきました。スケーラビリティ、信頼性、クリーンなバックエンド設計に注力しています。",

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
    "Microservices",
    "AWS"
  ],
  navbar: [
    { href: "/en", icon: HomeIcon, label: "ホーム" },
  ],
  contact: {
    email: "maynguyen24.work@gmail.com",
    tel: "+84916627917",
    social: {
      Email: {
        name: "メール",
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
      title: "ソフトウェアエンジニア",
      href: "https://jitsinnovationlabs.com/",
      project: [
        {
          name: "デジタルバンキング",
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
          location: "タイ、ミャンマー銀行",
          start: "2025年1月",
          end: "現在",
          description: [
            "本番の金融システムでMongoDB 6からMongoDB 8へのゼロダウンタイム移行を主導しました。",
            "銀行間送金、請求書支払い、照合、オンライン加盟店規制レポートなどのコアバンキング機能を開発しました。",
            "金融取引向けの安全で高可用性なバックエンドサービスを設計・最適化しました。",
            "月間50,000以上のユーザーに提供するスケーラブルなバックエンドサービスとReactアプリケーションを構築・保守し、機能を予定より15%早く提供しました。",
            "MochaとChaiを使用した単体テストを実装し、コードカバレッジ90%以上を達成してシステムの信頼性と保守性を確保しました。"
          ]
        }, {
          name: "V-Smart Pay",
          client: [{
            name: "VinSmart",
            img: "/vsmart.webp",
            href: "https://itviec.com/companies/vinsmart-future"
          }],
          badges: ["Node.js", "MongoDB", "マイクロサービス", "React"],
          location: "VinGroup",
          start: "2025年11月",
          end: "現在",
          description: [
            "複数のサービスプロバイダーと決済ワークフローを統合した請求書支払い機能を開発しました。",
            "コアバンキング機能（SBV規制レポート、照合、請求書支払い）を開発しました。",
            "マイクロサービスベースのバックエンドシステムを構築・保守し、高負荷決済処理をサポートするためのロードテストとパフォーマンス最適化を実施しました。"
          ]
        }],
      logoUrl: "/jt.webp",
      start: "2025年1月",
      end: "現在",
    },
    {
      company: "NCC Software",
      title: "バックエンドエンジニア",
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
          location: "オーストラリア",
          start: "2024年3月",
          end: "2024年12月",
          description: [
            "Redisキャッシュを使用したCRMレポートサービスを設計し、データベース負荷を30%削減しました。",
            "Kafkaを使用してスケジュールレポートを自動化し、週次/月次の柔軟なカスタマイズを可能にしました。",
            "AWS S3からMinioへの移行を主導し、信頼性を損なうことなくストレージコストを20%削減しました。",
            "フロントエンドチームと協力してAngularコンポーネントを統合し、シームレスなUXを実現しました。"
          ]
        }, {
          name: "タイムシート",
          client: [],
          badges: ["C#", "ASP .NET Core", "PostgreSQL", "Angular", "AWS/Minio", "Docker"],
          location: "社内",
          start: "2023年11月",
          end: "2024年3月",
          description: [
            "プロジェクト追跡、出勤管理、休暇管理のためのHRM機能を開発し、500人以上のユーザーに提供しました。",
            "SQLクエリを最適化し、レポート生成速度を25％向上させました。",
            "AWS S3サービスをMinioに移行し、移行中も100％の稼働率を維持しました。",
            "NUnit、Moq、Testcontainersを使用して堅牢なユニットテストを作成し、コードカバレッジ90％を達成しました。"
          ]
        }],
      logoUrl: "/ncc.jpeg",
      start: "2023年11月",
      end: "2024年12月",
    },
  ],
  education: [
    {
      school: "ハノイ鉱山地質大学",
      href: "https://humg.edu.vn/Pages/home.aspx",
      degree: "ソフトウェア工学",
      logoUrl: "/humg.jpg",
      start: "2021年9月",
      end: "2025年8月",
      project: [
        {
          name: "科学研究",
          client: [],
          badges: ["Express.js", "Node.js", "MongoDB", "React"],
          location: "学生研究",
          start: "2023年2月",
          end: "2023年8月",
          description: [
            "バックカン省の地質マップウェブサイトを開発し、WebGLを使用してジオツーリズムサイトを紹介。",
            "科学研究プロジェクトのチームリーダーを務める。",
            "バックカン省の実際の地質データに基づいてプロジェクトを共同開発。"
          ]
        }
      ]
    }
  ],
  projects: [
    {
      title: "マンガEコマース",
      href: "https://github.com/vanthang24803/AMAK_Store_V2",
      dates: "2024年10月 - 2025年3月",
      active: true,
      description: "",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "ASP.NET Core",
        "Docker",
        "AWS",
        "TailwindCSS",
        "Shadcn UI",
        "Domain Driver Design"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/vanthang24803/AMAK_Store_V2",
          icon: "github"
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    }
  ],
  certification: [
    {
      school: "Toeic IIG - 550",
      href: "https://iigvietnam.com/vi/",
      degree: "リーディング、リスニング",
      logoUrl: "/iig.png",
      start: "2023年2月",
      status: "有効",
      end: "2025年2月",
    }
  ],



};

