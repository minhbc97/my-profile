import type {
  Locale,
  PortfolioContent,
  Profile,
  SectionId,
  SkillGroup,
} from "@/types/portfolio";

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["Angular 20+", "Next.js 13-16", "React.js", "Vue 3", "Nuxt 2/3", "TypeScript"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Flutter", "Expo", "APK/IPA release", "NFC/QR integration"],
  },
  {
    title: "State, Async & APIs",
    items: ["RxJS", "Redux", "Socket.io", "REST APIs", "Firebase"],
  },
  {
    title: "UI & Design",
    items: ["Tailwind CSS 4", "HeroUI", "Vuetify", "Ant Design", "Less CSS", "Figma"],
  },
  {
    title: "Backend & Infra",
    items: ["Node.js", "NestJS", "Prisma", "Supabase", "Docker"],
  },
  {
    title: "Quality",
    items: ["Code Review", "Performance Optimization", "SEO", "Delivery standards"],
  },
];

export const sectionIds: SectionId[] = [
  "about",
  "skills",
  "leadership",
  "experience",
  "projects",
  "contact",
];

export const profile: Profile = {
  name: {
    en: "Bui Cong Minh",
    vi: "Bùi Công Minh",
  },
  role: "Frontend Leader",
  location: "Hanoi, Vietnam",
  email: "minhcongbui.bka60@gmail.com",
  phone: "+84 386 215 829",
  linkedin: "https://www.linkedin.com/in/minhbcdev",
  github: "https://github.com/minhbc97",
  cv: {
    en: "/cv/Bui-Cong-Minh-CV-EN.pdf",
    vi: "/cv/Bui-Cong-Minh-CV-VI.pdf",
  },
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    metaLabel: "Available for Frontend Leader and Senior Frontend Engineer roles",
    nav: [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "leadership", label: "Leadership" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Frontend Leader based in Hanoi",
      title: "Frontend Leader for enterprise web and mobile products.",
      summary:
        "Frontend Leader with 6+ years of experience delivering large-scale web and mobile products for Japanese and Vietnamese enterprises across e-commerce, logistics, HR tech, fintech and B2B platforms.",
      proof:
        "Leading frontend teams inside product organisations of up to 45 engineers, while staying hands-on across Angular, Next.js, Vue/Nuxt, React Native and Flutter.",
      ctas: {
        cvEn: "Download English CV",
        cvVi: "Download Vietnamese CV",
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Email me",
      },
    },
    stats: [
      ["6+", "years building web and mobile products"],
      ["45", "engineers in the largest product organisation"],
      ["5", "enterprise domains: e-commerce, logistics, HR tech, fintech, B2B"],
    ],
    about: {
      title: "Professional Summary",
      body:
        "Proven record of leading frontend delivery, mentoring developers, establishing delivery standards, and driving hands-on execution from Figma design through architecture, code review and release. Comfortable bridging UI/UX, frontend and mobile concerns within a single ownership scope.",
    },
    skillsTitle: "Core Skills",
    skillGroups,
    leadership: {
      title: "Leadership Highlights",
      intro:
        "I work best where frontend needs both delivery discipline and senior hands-on ownership.",
      items: [
        "Code review standards and practical PR guidelines",
        "Mentoring developers on framework patterns and async data flow",
        "Task breakdown, sprint coordination and cross-team alignment",
        "Base-source ownership for reusable architecture and component conventions",
        "Delivery standards across Figma handoff, implementation, QA and release",
        "Japanese client communication around UX expectations and API contracts",
      ],
    },
    experienceTitle: "Experience Timeline",
    experiences: [
      {
        company: "GM Solution",
        role: "Frontend Leader",
        period: "Jul 2022 - Present",
        location: "Hanoi, Vietnam",
        summary:
          "Leading frontend delivery across Japanese and Vietnamese enterprise projects. Owning FE architecture, base-source design, code review, task breakdown, mentoring and hands-on implementation.",
      },
      {
        company: "Luvina Software",
        role: "Frontend & Mobile Developer",
        period: "May 2020 - Jul 2022",
        location: "Hanoi, Vietnam",
        summary:
          "Built enterprise web and mobile products with React, React Native, Vue, Redux and native mobile research, including release ownership for APK/IPA builds.",
      },
      {
        company: "VNPT",
        role: "Frontend Developer (Fresher)",
        period: "Jan 2020 - May 2020",
        summary:
          "Full-time frontend fresher role focused on JavaScript, HTML and CSS fundamentals.",
      },
    ],
    projects: {
      title: "Selected NDA-safe Projects",
      notice:
        "Project codenames are used to comply with client NDAs. Full context can be discussed during interviews where permitted.",
      items: [
        {
          codename: "Project FRE***",
          title: "B2B Agricultural Marketplace",
          period: "Jun 2025 - Present",
          role: "Frontend Leader",
          team: "45-person product team",
          stack: ["Angular 20", "Tailwind CSS 4", "Socket.io", "RxJS", "Java Spring Boot APIs"],
          highlights: [
            "Led FE delivery planning, task breakdown, sprint coordination and BE/QA/PM alignment.",
            "Established code review standards, PR guidelines and component conventions.",
            "Built seller, buyer and admin features with real-time chat, RBAC, SEO and WebView integration.",
          ],
        },
        {
          codename: "Project NLJ***",
          title: "Automated Road Transport Platform, Japan",
          period: "Oct 2024 - Mar 2025",
          role: "Frontend Leader",
          team: "20-person team, 120 man-months",
          stack: ["Next.js 13+", "Tailwind CSS", "HeroUI", "Java Spring Boot APIs"],
          highlights: [
            "Led sprint planning, task assignment, code review and technical decision-making.",
            "Built dispatching workflow, route management and real-time order tracking.",
            "Optimised large operational data tables via virtualisation and memoisation.",
          ],
        },
        {
          codename: "Project CAR***",
          title: "Internal Recruitment Platform",
          period: "Apr 2025 - May 2025",
          role: "Frontend Leader & UI Designer",
          team: "8-person team, 24 man-months",
          stack: ["Next.js 13+", "Tailwind CSS", "HeroUI", "Figma"],
          highlights: [
            "Sole FE owner from Figma to release within 2 months.",
            "Split tasks, reviewed PRs and unblocked teammates.",
            "Shipped chat and role-based permission modules.",
          ],
        },
        {
          codename: "Project PAR***",
          title: "HR & Partner Management Platform, Japan",
          period: "Dec 2023 - Apr 2024",
          role: "Frontend Leader & UI/UX Designer",
          team: "8-person team, 88 man-months",
          stack: ["Next.js 13+", "Figma"],
          highlights: [
            "Led frontend delivery while balancing hands-on coding.",
            "Converted Figma designs into a scalable Next.js component structure.",
            "Built CMS, partner management and multi-level permission modules.",
          ],
        },
        {
          codename: "Project TAB***",
          title: "Japan Travel Social Network",
          period: "Jul 2022 - Mar 2023",
          role: "Frontend Leader",
          team: "13-person team, 65 man-months",
          stack: ["Nuxt 2", "Vuetify", "Firebase", "Flutter", "Laravel"],
          highlights: [
            "Led FE code-quality standards, PR reviews, task breakdown and mentoring.",
            "Coordinated backend and mobile squads on Firebase integration and release timelines.",
            "Implemented feed, chat, comments and Firebase push notifications.",
          ],
        },
        {
          codename: "Project VIVU***",
          title: "Vietnam Travel Platform",
          period: "Feb 2026 - Present",
          role: "Self-directed full-stack project",
          stack: ["Next.js 16", "Prisma", "Supabase Auth/Database", "Expo"],
          highlights: [
            "Designed schema, auth flows and shared web/mobile codebase.",
            "Building an end-to-end platform promoting Vietnamese tourism.",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      school: "Hanoi University of Science and Technology (HUST)",
      degree: "Bachelor of Engineering, Electronics & Telecommunications",
      period: "Oct 2015 - May 2020",
    },
    contact: {
      title: "Contact",
      body: "Open to Frontend Leader and Senior Frontend Engineer opportunities where frontend quality, delivery ownership and team growth matter.",
      emailSubject: "Frontend Leader opportunity",
      emailBody:
        "Hi Minh,%0D%0A%0D%0AI would like to discuss a Frontend Leader / Senior Frontend Engineer opportunity with you.",
    },
    footer: "Built with Next.js. Content aligned for Frontend Leader applications.",
  },
  vi: {
    metaLabel: "Sẵn sàng cho vị trí Frontend Leader và Senior Frontend Engineer",
    nav: [
      { id: "about", label: "Tóm tắt" },
      { id: "skills", label: "Kỹ năng" },
      { id: "leadership", label: "Leadership" },
      { id: "experience", label: "Kinh nghiệm" },
      { id: "projects", label: "Dự án" },
      { id: "contact", label: "Liên hệ" },
    ],
    hero: {
      eyebrow: "Frontend Leader tại Hà Nội",
      title: "Frontend Leader cho sản phẩm web và mobile quy mô doanh nghiệp.",
      summary:
        "Frontend Leader với hơn 6 năm kinh nghiệm triển khai sản phẩm web và mobile quy mô lớn cho doanh nghiệp Nhật Bản và Việt Nam trong các lĩnh vực thương mại điện tử, logistics, HR tech, fintech và B2B.",
      proof:
        "Có kinh nghiệm dẫn dắt đội Frontend trong tổ chức sản phẩm lên đến 45 kỹ sư, đồng thời trực tiếp code trên Angular, Next.js, Vue/Nuxt, React Native và Flutter.",
      ctas: {
        cvEn: "Download English CV",
        cvVi: "Download Vietnamese CV",
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Email me",
      },
    },
    stats: [
      ["6+", "năm triển khai sản phẩm web và mobile"],
      ["45", "kỹ sư trong tổ chức sản phẩm lớn nhất từng tham gia"],
      ["5", "lĩnh vực enterprise: e-commerce, logistics, HR tech, fintech, B2B"],
    ],
    about: {
      title: "Professional Summary",
      body:
        "Có kinh nghiệm dẫn dắt frontend delivery, mentoring developer, thiết lập tiêu chuẩn delivery và triển khai hands-on từ thiết kế Figma, kiến trúc, code review đến release. Thành thạo kết nối UI/UX, frontend và mobile trong cùng một phạm vi ownership.",
    },
    skillsTitle: "Core Skills",
    skillGroups,
    leadership: {
      title: "Leadership Highlights",
      intro:
        "Tôi phù hợp với môi trường cần frontend vừa có kỷ luật delivery, vừa có ownership hands-on ở cấp senior.",
      items: [
        "Thiết lập code review standards và PR guidelines thực tế",
        "Mentoring developer về framework patterns và async data flow",
        "Task breakdown, sprint coordination và alignment với BE/QA/PM",
        "Base-source ownership cho kiến trúc tái sử dụng và component conventions",
        "Delivery standards từ Figma handoff, implementation, QA đến release",
        "Giao tiếp với khách Nhật về UX expectation và API contracts",
      ],
    },
    experienceTitle: "Experience Timeline",
    experiences: [
      {
        company: "GM Solution",
        role: "Frontend Leader",
        period: "Jul 2022 - Present",
        location: "Hanoi, Vietnam",
        summary:
          "Dẫn dắt frontend delivery cho các dự án doanh nghiệp Nhật Bản và Việt Nam. Ownership FE architecture, base-source design, code review, task breakdown, mentoring và hands-on implementation.",
      },
      {
        company: "Luvina Software",
        role: "Frontend & Mobile Developer",
        period: "May 2020 - Jul 2022",
        location: "Hanoi, Vietnam",
        summary:
          "Triển khai sản phẩm enterprise web/mobile với React, React Native, Vue, Redux và native mobile research, bao gồm ownership build/release APK/IPA.",
      },
      {
        company: "VNPT",
        role: "Frontend Developer (Fresher)",
        period: "Jan 2020 - May 2020",
        summary:
          "Vai trò frontend fresher full-time, tập trung vào nền tảng JavaScript, HTML và CSS.",
      },
    ],
    projects: {
      title: "Selected NDA-safe Projects",
      notice:
        "Tên dự án được ẩn danh theo hợp đồng bảo mật (NDA) với khách hàng. Có thể trao đổi chi tiết trong buổi phỏng vấn khi được phép.",
      items: [
        {
          codename: "Project FRE***",
          title: "B2B Agricultural Marketplace",
          period: "Jun 2025 - Present",
          role: "Frontend Leader",
          team: "45-person product team",
          stack: ["Angular 20", "Tailwind CSS 4", "Socket.io", "RxJS", "Java Spring Boot APIs"],
          highlights: [
            "Dẫn dắt FE delivery planning, task breakdown, sprint coordination và alignment với BE/QA/PM.",
            "Thiết lập code review standards, PR guidelines và component conventions.",
            "Xây dựng seller, buyer, admin features với real-time chat, RBAC, SEO và WebView integration.",
          ],
        },
        {
          codename: "Project NLJ***",
          title: "Automated Road Transport Platform, Japan",
          period: "Oct 2024 - Mar 2025",
          role: "Frontend Leader",
          team: "20-person team, 120 man-months",
          stack: ["Next.js 13+", "Tailwind CSS", "HeroUI", "Java Spring Boot APIs"],
          highlights: [
            "Dẫn dắt sprint planning, task assignment, code review và technical decision-making.",
            "Xây dựng dispatching workflow, route management và real-time order tracking.",
            "Tối ưu bảng dữ liệu vận hành lớn bằng virtualisation và memoisation.",
          ],
        },
        {
          codename: "Project CAR***",
          title: "Internal Recruitment Platform",
          period: "Apr 2025 - May 2025",
          role: "Frontend Leader & UI Designer",
          team: "8-person team, 24 man-months",
          stack: ["Next.js 13+", "Tailwind CSS", "HeroUI", "Figma"],
          highlights: [
            "Sole FE owner từ Figma đến release trong 2 tháng.",
            "Chia task, review PR và unblock teammates.",
            "Triển khai chat và role-based permission modules.",
          ],
        },
        {
          codename: "Project PAR***",
          title: "HR & Partner Management Platform, Japan",
          period: "Dec 2023 - Apr 2024",
          role: "Frontend Leader & UI/UX Designer",
          team: "8-person team, 88 man-months",
          stack: ["Next.js 13+", "Figma"],
          highlights: [
            "Dẫn dắt frontend delivery song song với hands-on coding.",
            "Chuyển Figma design thành cấu trúc component Next.js có khả năng mở rộng.",
            "Xây dựng CMS, partner management và multi-level permission modules.",
          ],
        },
        {
          codename: "Project TAB***",
          title: "Japan Travel Social Network",
          period: "Jul 2022 - Mar 2023",
          role: "Frontend Leader",
          team: "13-person team, 65 man-months",
          stack: ["Nuxt 2", "Vuetify", "Firebase", "Flutter", "Laravel"],
          highlights: [
            "Dẫn dắt FE code-quality standards, PR reviews, task breakdown và mentoring.",
            "Phối hợp backend/mobile squads về Firebase integration và release timelines.",
            "Triển khai feed, chat, comments và Firebase push notifications.",
          ],
        },
        {
          codename: "Project VIVU***",
          title: "Vietnam Travel Platform",
          period: "Feb 2026 - Present",
          role: "Self-directed full-stack project",
          stack: ["Next.js 16", "Prisma", "Supabase Auth/Database", "Expo"],
          highlights: [
            "Thiết kế schema, auth flows và shared web/mobile codebase.",
            "Xây dựng end-to-end platform quảng bá du lịch Việt Nam.",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      school: "Hanoi University of Science and Technology (HUST)",
      degree: "Bachelor of Engineering, Electronics & Telecommunications",
      period: "Oct 2015 - May 2020",
    },
    contact: {
      title: "Contact",
      body: "Sẵn sàng trao đổi cơ hội Frontend Leader hoặc Senior Frontend Engineer, đặc biệt với team cần frontend quality, delivery ownership và phát triển năng lực đội ngũ.",
      emailSubject: "Frontend Leader opportunity",
      emailBody:
        "Hi Minh,%0D%0A%0D%0AI would like to discuss a Frontend Leader / Senior Frontend Engineer opportunity with you.",
    },
    footer: "Built with Next.js. Nội dung được định vị cho Frontend Leader applications.",
  },
};
