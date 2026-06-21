import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Thắng Nguyễn Văn",
  initials: "May",
  url: "https://cv.thangnguyen.io.vn",
  location: "Ha noi, VN",
  locationLink: "https://www.google.com/maps/place/hanoi",
  description:
    "Software Engineer passionate about exploring new technologies and building products for a global audience.",
  summary:
    "**Fullstack Engineer** with **3+ years** in fintech, building **e-wallet and digital banking systems** with **Node.js, Golang, and microservices**, including core banking integrations **(T24 Temenos, NAPAS)** for clients across **Vietnam, Asia, and Australia**.",

  avatarUrl: "/me.jpeg",
  skills: [
    "JavaScript",
    "TypeScript",
    "Golang",
    "Node.js",
    "NestJS",
    "Next.js",
    "Sails.js",
    "ASP.NET",
    "PostgreSQL",
    "MongoDB",
    "Kafka",
    "Redis",
    "Docker",
    "Microservices",
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
      title: "Mid-level Full-stack Developer",
      href: "https://jitsinnovationlabs.com/",
      project: [
        {
          name: "Digital Wallet Core",
          client: [{
            name: "TMDS",
            href: "https://www.thaicreditfoundation.org/en",
            img: "/cowork/tmds.svg"
          }, {
            name: "Momoney",
            href: "https://www.mo.com.mm/momoney/",
            img: "/cowork/momoney.svg"
          },],
          badges: ["Sails.js", "MongoDB", "Next.js", "Golang", "NestJS"],
          location: "Thailand, Myanmar",
          start: "Jan 2025",
          end: "Present",
          description: [
            "Built and maintained scalable backend and frontend services serving 50,000+ monthly users, delivering features 15% ahead of schedule.",
            "Led zero-downtime migration from MongoDB 6 to 8 for a production financial system.",
            "Migrated core transaction logic to Golang, achieving a 45% increase in concurrent transaction performance.",
            "Developed core banking features: interbank transfers, regulatory reports, reconciliation, and bill payments.",
            "Participated in frontend migration from AngularJS to Next.js, utilizing AI-assisted tools to improve development efficiency.",
            "Implemented unit testing with Mocha & Chai, achieving 80%+ code coverage."
          ]
        },
        {
          name: "BNF Digital Banking",
          client: [{
            name: "BNF",
            href: "https://bnf.tl/",
            img: "/cowork/bnf.png"
          }],
          badges: ["Sails.js", "MongoDB", "Microservices", "Kafka", "Next.js"],
          location: "Timosleste",
          start: "Jan 2026",
          end: "Present",
          description: [
            "Led a small team of developers (5 members), mentoring junior/fresher engineers to improve code quality, problem-solving skills, and development best practices.",
            "Integrated interbank transfer flows via NAPAS, handling transaction routing, status tracking, and reconciliation with T24 Core Banking System.",
            "Developed and integrated real-time transaction processing with T24 Temenos Core Banking System.",
            "Built event-driven transaction pipelines using Kafka to handle asynchronous processing of banking events with guaranteed delivery and idempotency."
          ]
        },
        {
          name: "VSF VPAY E-wallet",
          client: [{
            name: "VinSmart",
            img: "/cowork/vsmart.webp",
            href: "https://itviec.com/companies/vinsmart-future"
          }],
          badges: ["Sails.js", "MongoDB", "Microservices"],
          location: "VinGroup -  VietNam",
          start: "Aug 2025",
          end: "Present",
          description: [
            "Integrated cash-in/cash-out flows with Techcombank and NAPAS, handling bank transfer reconciliation and real-time balance synchronization.",
            "Developed bill payment features and integrated multiple third-party service providers (electricity, water, telecom) with idempotent transaction handling and failure recovery.",
            "Developed transaction history and statement features with advanced filtering, pagination, and date-range queries for high-volume e-wallet data.",
            "Optimized State Bank regulatory reporting using MongoDB Aggregation Pipeline, reducing report generation time for large-scale transaction datasets.",
            "Extended core e-wallet platform with Vietnam-specific features and compliance with State Bank of Vietnam regulations."
          ]
        },
        {
          name: "Fintech AI Context Engine",
          client: [{
            name: "SCB Bank",
            img: "/cowork/scb.svg",
            href: "https://www.scb.co.th/en/personal-banking"
          }, {
            name: "McKinsey",
            img: "/cowork/mck.ico",
            href: "https://www.mckinsey.com/"
          }],
          badges: ["NestJS", "Kafka", "PostgreSQL", "Temporal", "Grafana"],
          location: "Thailand",
          start: "Apr 2026",
          end: "Jul 2026",
          description: [
            "Built an AI context engine for an electronic transaction platform to provide contextual data processing and orchestration for AI services.",
            "Implemented Kafka-based CDC streaming between core banking systems and the AI contextual engine.",
            "Managed workflow orchestration and distributed state handling using Temporal, and integrated AI caller SDKs for service communication.",
            "Monitored system metrics, observability, and performance dashboards using Grafana and Prometheus."
          ]
        }
      ],
      logoUrl: "/company/jt.webp",
      start: "Jan 2025",
      end: "Present",
    },
    {
      company: "NCC ASIA",
      title: "Backend Developer",
      href: "https://ncc.plus/index.html",
      project: [
        {
          name: "TRUDI",
          client: [{
            name: "Trudi",
            href: "https://www.trudi.ai/",
            img: "/cowork/trudi.webp"
          }],
          badges: ["ASP.NET 8", "PostgreSQL", "Kafka", "Redis", "Angular", "Express.js"],
          location: "Australia",
          start: "Mar 2024",
          end: "Dec 2024",
          description: [
            "Architected CRM reporting service with Redis caching, reducing database load by 30%.",
            "Led migration from AWS S3 to Minio, cutting storage costs by 20%.",
            "Optimized PostgreSQL performance through query tuning, indexing strategies, and table partitioning, improving reporting query speed for large datasets.",
            "Designed Kafka-based data pipeline to synchronize and process system data across services, reducing data processing latency.",
            "Integrated third-party VoIP service into a Node.js backend to manage and track inbound/outbound calls between sales agents and customers within the CRM workflow."
          ]
        }
      ],
      logoUrl: "/company/ncc.jpeg",
      start: "Nov 2023",
      end: "Dec 2024",
    },
  ],
  education: [
    {
      school: "Hanoi University of Mining and Geology",
      href: "https://humg.edu.vn/Pages/home.aspx",
      degree: "Software Engineering",
      logoUrl: "/school/humg.jpg",
      start: "Sep 2021",
      end: "July 2025",
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
      school: "Toeic IIG - 575",
      href: "https://iigvietnam.com/vi/",
      degree: "Reading, Listening",
      logoUrl: "/certificate/iig.png",
      start: "Feb 2023",
      status: "inactive",
      end: "Feb 2025",
    },
    {
      school: "JLPT N4",
      href: "https://www.jlpt.jp/e/",
      degree: "Reading, Listening",
      logoUrl: "/certificate/jlpt.jpg",
      start: "July 2026",
      status: "active",
      end: "Present",
    }
  ],

};

export const DATA_JP = {
  name: "Thắng Nguyễn Văn",
  initials: "May",
  url: "https://cv.thangnguyen.io.vn",
  location: "ハノイ, ベトナム",
  locationLink: "https://www.google.com/maps/place/hanoi",
  description:
    "新しい技術を探求し、グローバルなユーザー向けに製品を構築することに情熱を持つソフトウェアエンジニアです。",
  summary:
    "**フルスタックエンジニア**として**3年以上**のフィンテック経験を持ち、**Node.js、Golang、マイクロサービス**を用いた**電子ウォレット・デジタルバンキングシステム**の構築に携わってきました。**T24 Temenos・NAPAS**等のコアバンキング統合を含む、**ベトナム、タイ、オーストラリア**のクライアント向けシステム開発の実績があります。",

  avatarUrl: "/me.jpeg",
  skills: [
    "JavaScript",
    "TypeScript",
    "Golang",
    "Node.js",
    "NestJS",
    "Next.js",
    "Sails.js",
    "ASP.NET",
    "PostgreSQL",
    "MongoDB",
    "Kafka",
    "Redis",
    "Docker",
    "Microservices",
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
      title: "ミドルレベル・フルスタックデベロッパー",
      href: "https://jitsinnovationlabs.com/",
      project: [
        {
          name: "デジタルウォレットコア",
          client: [{
            name: "TMDS",
            href: "https://www.thaicreditfoundation.org/en",
            img: "/cowork/tmds.svg"
          }, {
            name: "Momoney",
            href: "https://www.mo.com.mm/momoney/",
            img: "/cowork/momoney.svg"
          }],
          badges: ["Sails.js", "MongoDB", "Next.js", "Golang", "NestJS"],
          location: "タイ、ミャンマー",
          start: "2025年1月",
          end: "現在",
          description: [
            "月間50,000人以上のユーザーにサービスを提供するスケーラブルなバックエンド・フロントエンドを構築・保守し、機能を予定より15%早く提供しました。",
            "本番の金融システムでMongoDB 6から8へのゼロダウンタイム移行を主導しました。",
            "コアトランザクションロジックをGolangに移行し、同時トランザクション処理性能を45%向上させました。",
            "銀行間送金、規制レポート、照合、請求書支払いなどのコアバンキング機能を開発しました。",
            "AngularJSからNext.jsへのフロントエンド移行に参加し、AIツールを活用して開発効率を向上させました。",
            "MochaとChaiを使用した単体テストを実装し、コードカバレッジ80%以上を達成しました。"
          ]
        },
        {
          name: "BNFデジタルバンキング",
          client: [{
            name: "BNF",
            href: "https://bnf.tl/",
            img: "/cowork/bnf.png"
          }],
          badges: ["Sails.js", "MongoDB", "マイクロサービス", "Kafka", "Next.js"],
          location: "東ティモール",
          start: "2026年1月",
          end: "現在",
          description: [
            "開発者チーム（5名）をリードし、ジュニアエンジニアにコード品質・問題解決・開発ベストプラクティスを指導しました。",
            "NAPASを介した銀行間送金フローを統合し、T24コアバンキングシステムとのトランザクションルーティング・照合を実装しました。",
            "T24 Temenosコアバンキングシステムとのリアルタイムトランザクション処理を開発・統合しました。",
            "Kafkaを使用したイベント駆動型トランザクションパイプラインを構築し、銀行イベントの非同期処理を保証付きで実現しました。"
          ]
        },
        {
          name: "VSF VPAYエレクトロニックウォレット",
          client: [{
            name: "VinSmart",
            img: "/cowork/vsmart.webp",
            href: "https://itviec.com/companies/vinsmart-future"
          }],
          badges: ["Sails.js", "MongoDB", "マイクロサービス"],
          location: "VinGroup",
          start: "2025年8月",
          end: "現在",
          description: [
            "TechcombankおよびNAPASとのキャッシュイン・アウトフローを統合し、リアルタイム残高同期を実現しました。",
            "電気・水道・通信事業者等の複数サービスプロバイダーを統合した請求書支払い機能を開発しました。",
            "高ボリュームのeウォレットデータに対して高度なフィルタリング・ページネーション・日付範囲クエリを持つ取引履歴機能を開発しました。",
            "MongoDBアグリゲーションパイプラインを使用してSBV規制レポート・照合システムを最適化しました。",
            "ベトナム国家銀行の規制に準拠したベトナム固有の決済機能をプラットフォームに追加しました。"
          ]
        },
        {
          name: "フィンテックAIコンテキストエンジン",
          client: [{
            name: "SCB Bank",
            img: "/cowork/scb.svg",
            href: "https://www.scb.co.th/en/personal-banking"
          }, {
            name: "McKinsey",
            img: "/cowork/mck.ico",
            href: "https://www.mckinsey.com/"
          }],
          badges: ["NestJS", "Kafka", "PostgreSQL", "Temporal", "Grafana"],
          location: "タイ",
          start: "2026年4月",
          end: "2026年7月",
          description: [
            "電子取引プラットフォーム向けAIコンテキストエンジンを構築し、AIサービスのデータ処理・オーケストレーションを実現しました。",
            "コアバンキングシステムとAIコンテキストエンジン間のKafkaベースCDCストリーミングを実装しました。",
            "Temporalを使用したワークフローオーケストレーションと分散状態管理を担当し、AI呼び出しSDKを統合しました。",
            "GrafanaとPrometheusを使用してシステムメトリクス・可観測性・パフォーマンスダッシュボードを監視しました。"
          ]
        }
      ],
      logoUrl: "/company/jt.webp",
      start: "2025年1月",
      end: "現在",
    },
    {
      company: "NCC ASIA",
      title: "バックエンドデベロッパー",
      href: "https://ncc.plus/index.html",
      project: [
        {
          name: "TRUDI",
          client: [{
            name: "Trudi",
            href: "https://www.trudi.ai/",
            img: "/cowork/trudi.webp"
          }],
          badges: ["ASP.NET 8", "PostgreSQL", "Kafka", "Redis", "Angular", "Express.js"],
          location: "オーストラリア",
          start: "2024年3月",
          end: "2024年12月",
          description: [
            "Redisキャッシュを使用したCRMレポートサービスを構築し、データベース負荷を30%削減しました。",
            "AWS S3からMinioへの移行を主導し、ストレージコストを20%削減しました。",
            "クエリチューニング・インデックス・テーブルパーティショニングによりPostgreSQLパフォーマンスを最適化し、レポート速度を向上させました。",
            "Kafkaベースのデータパイプラインを設計し、サービス間のデータ同期・処理レイテンシを削減しました。",
            "Node.jsバックエンドにサードパーティVoIPサービスを統合し、CRMワークフロー内の通話管理を実現しました。"
          ]
        }
      ],
      logoUrl: "/company/ncc.jpeg",
      start: "2023年11月",
      end: "2024年12月",
    },
  ],
  education: [
    {
      school: "ハノイ鉱山地質大学",
      href: "https://humg.edu.vn/Pages/home.aspx",
      degree: "ソフトウェア工学",
      logoUrl: "/school/humg.jpg",
      start: "2021年9月",
      end: "2025年7月",
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
      school: "TOEIC Listening & Reading Test 575点",
      href: "https://iigvietnam.com/vi/",
      degree: "リーディング、リスニング",
      logoUrl: "/certificate/iig.png",
      start: "2023年2月",
      status: "失効",
      end: "2025年2月",
    },
    {
      school: "日本語能力試験（JLPT）N4 合格",
      href: "https://www.jlpt.jp/e/",
      degree: "リーディング、リスニング",
      logoUrl: "/certificate/jlpt.jpg",
      start: "2026年7月",
      status: "有効",
      end: "現在",
    }
  ],



};

