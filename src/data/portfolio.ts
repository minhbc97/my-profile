import type {
  Locale,
  PortfolioContent,
  Profile,
  SectionId,
  SkillGroup,
} from "@/types/portfolio";

const skillGroups: SkillGroup[] = [
  {
    title: "Frameworks",
    items: ["Angular 20+", "Next.js 13-16", "React", "React Native", "Vue 3 / Nuxt 2-3", "Flutter", "Expo"],
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript (ES2023)", "Dart", "Java", "Kotlin", "Objective-C", "Swift"],
  },
  {
    title: "State & Async",
    items: ["RxJS", "Redux", "Zustand-style stores", "Socket.io", "REST", "Async pipelines"],
  },
  {
    title: "UI / Design",
    items: ["Tailwind CSS 4", "HeroUI", "Vuetify", "Ant Design", "Less", "Figma"],
  },
  {
    title: "Backend / Infra",
    items: ["Node.js", "NestJS", "Prisma", "Supabase", "Firebase", "Docker", "Java Spring Boot APIs", "PHP Laravel APIs"],
  },
  {
    title: "Quality & Delivery",
    items: ["Code review", "Performance optimisation", "SEO", "APK/IPA release", "NFC / QR / native integrations"],
  },
  {
    title: "Leadership",
    items: ["Team leading", "Mentoring", "Delivery standards", "Architecture design", "Base-source ownership", "Japanese client communication"],
  },
];

const skillGroupsVi: SkillGroup[] = [
  {
    title: "Frameworks",
    items: ["Angular 20+", "Next.js 13-16", "React", "React Native", "Vue 3 / Nuxt 2-3", "Flutter", "Expo"],
  },
  {
    title: "Ngôn ngữ",
    items: ["TypeScript", "JavaScript (ES2023)", "Dart", "Java", "Kotlin", "Objective-C", "Swift"],
  },
  {
    title: "State & Async",
    items: ["RxJS", "Redux", "Zustand-style stores", "Socket.io", "REST", "Async pipelines"],
  },
  {
    title: "UI / Design",
    items: ["Tailwind CSS 4", "HeroUI", "Vuetify", "Ant Design", "Less", "Figma"],
  },
  {
    title: "Backend / Infra",
    items: ["Node.js", "NestJS", "Prisma", "Supabase", "Firebase", "Docker", "Java Spring Boot APIs", "PHP Laravel APIs"],
  },
  {
    title: "Quality & Delivery",
    items: ["Code review", "Tối ưu hiệu năng", "SEO", "Release APK/IPA", "Tích hợp NFC / QR / native"],
  },
  {
    title: "Leadership",
    items: ["Team leading", "Mentoring", "Delivery standards", "Thiết kế kiến trúc", "Base-source ownership", "Giao tiếp khách hàng Nhật"],
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
  location: {
    en: "Hanoi, Vietnam",
    vi: "Hà Nội, Việt Nam",
  },
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
      title: "NDA-safe Projects",
      notice:
        "Project names are anonymized to comply with client NDAs.",
      items: [
        {
          codename: "Project FRE***",
          featured: true,
          title: "B2B Agricultural Marketplace",
          period: "Jun 2025 - Present",
          role: "Frontend Leader",
          team: "Led 7 frontend members within a product team of up to 45 people",
          stack: ["Angular 20", "Tailwind CSS 4", "Socket.io", "RxJS", "Java Spring Boot APIs"],
          highlights: [
            "Led the 7-member frontend team: delivery planning, task breakdown, sprint coordination and BE/QA/PM alignment.",
            "Built the Angular base source, common modules and reusable conventions; created review checklists and delivery standards for the team.",
            "Reviewed member code, advised on technical direction and suggested implementation approaches for complex product features.",
            "Owned difficult frontend modules including SEO, Google tracking, chat, notifications, cart flows, admin permissions, charts, RBAC and WebView integration.",
          ],
        },
        {
          codename: "Project CAR***",
          featured: true,
          title: "Internal Recruitment Platform",
          period: "Apr 2025 - May 2025",
          role: "Frontend Leader & UI Designer",
          team: "2-person frontend team within an 8-person internal product squad",
          stack: ["Next.js 13+", "Tailwind CSS", "HeroUI", "Java Spring Boot", "Figma"],
          highlights: [
            "Joined early in the Figma design phase and helped shape the internal recruitment product experience.",
            "Built the Next.js base source, common modules and SEO setup for the 2-person frontend team.",
            "Reviewed teammate code, aligned implementation details and supported delivery within the 2-month timeline.",
            "Implemented key modules including chat and role-based permissions.",
          ],
        },
        {
          codename: "Project NLJ***",
          featured: true,
          title: "Automated Road Transport, Japan",
          period: "Oct 2024 - Mar 2025",
          role: "Frontend Leader",
          team: "Led a 4-person frontend team within a 20-person, 120 man-month project",
          stack: ["Next.js 13+", "Tailwind CSS", "HeroUI", "REST API", "Java Spring Boot"],
          highlights: [
            "Led sprint planning, task assignment, code review and technical decision-making for a Japanese logistics client.",
            "Defined frontend architecture and built dispatching workflow with route management and real-time order tracking.",
            "Optimised large operational data tables via virtualisation and memoisation.",
          ],
        },
        {
          codename: "Project KOT***",
          title: "Phase 2 / Mobile App, Workforce Time-Tracking, Japan",
          period: "May 2024 - Sep 2024",
          role: "Frontend & Mobile Developer",
          team: "11-person team, 70 man-months",
          stack: ["Flutter"],
          highlights: [
            "Contributed to the Flutter app phase of a Japanese workforce time-tracking SaaS product.",
            "Implemented attendance flows and payroll-related logic in coordination with the product and backend teams.",
          ],
        },
        {
          codename: "Project PAR***",
          featured: true,
          title: "HR & Partner Management Platform, Japan",
          period: "Dec 2023 - Apr 2024",
          role: "Frontend Leader & UI/UX Designer",
          team: "Led a 2-person frontend team within an 8-person, 88 man-month project",
          stack: ["Next.js 13+", "Figma"],
          highlights: [
            "Led frontend delivery while balancing hands-on coding.",
            "Converted Figma designs into a scalable Next.js component structure.",
            "Built CMS, partner management and multi-level permission modules.",
          ],
        },
        {
          codename: "Project KOT***",
          title: "Phase 1 / Tax & Time-keeping Web, Japan",
          period: "Apr 2023 - Nov 2023",
          role: "Frontend Developer",
          team: "26-person team, 120 man-months",
          stack: ["Vue 3", "Laravel", "PHP", "Inertia.js"],
          highlights: [
            "Developed the employee tax-declaration and time-keeping web on Vue 3 + Laravel via Inertia.js.",
            "Contributed across forms, validation, tax-rule UI and time-keeping flows for Japanese end users.",
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
          codename: "Project PET***",
          title: "Pet Care Platform",
          period: "Mar 2022 - May 2022",
          role: "Frontend Developer",
          team: "6-person team, 60 man-months",
          stack: ["React.js", "Ant Design", "Less CSS", "Java Spring Boot APIs"],
          highlights: [
            "Designed and shipped the admin dashboard with a consistent, extensible Ant Design system.",
          ],
        },
        {
          codename: "Project NEO***",
          title: "Construction Site Management",
          period: "Jun 2021 - Feb 2022",
          role: "Frontend & Mobile Developer",
          team: "15-person team, 300 man-months",
          stack: ["React Native", "Vue.js", "PHP", "NFC / QR", "OpenWeather API"],
          highlights: [
            "Solved domain-heavy problems including site tree-view diagrams, labour-safety control and access management.",
            "Reviewed peer code, enforced coding standards and owned the APK/IPA build and release pipeline.",
            "Integrated NFC, QR codes and the OpenWeather API into a unified mobile experience.",
          ],
        },
        {
          codename: "Project ESR***",
          title: "Sales & Marketing System",
          period: "Sep 2020 - May 2021",
          role: "Frontend & Mobile Developer",
          team: "40-person team, 300 man-months",
          stack: ["React Native", "React.js", "Redux", "Firebase", "Axios", "Java Spring Boot APIs"],
          highlights: [
            "Delivered unified UI across web and mobile from a shared component library.",
            "Implemented real-time chat and Firebase push-notification systems with complex Redux state.",
          ],
        },
        {
          codename: "Project BEE***",
          title: "Healthcare Mobile R&D",
          period: "May 2020 - Aug 2020",
          role: "Mobile R&D",
          team: "8-person team, 200 man-months",
          stack: ["Android Native", "Java", "Kotlin", "Swift", "Flutter research"],
          highlights: [
            "Researched native iOS, Android and Flutter for a hospital-management product line in the ophthalmology domain.",
          ],
        },
        {
          codename: "Project GUV***",
          title: "Home-Cleaning Service Platform",
          period: "May 2021 - Oct 2021",
          role: "Frontend & Mobile Developer",
          stack: ["React Native", "React.js", "Redux", "REST API"],
          highlights: [
            "Sole frontend owner of both the consumer mobile app and the operator web platform.",
            "Built real-time booking, order-status management, map-based geolocation and service rating.",
            "Tuned performance across iOS, Android and modern browsers.",
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
        cvEn: "Tải CV tiếng Anh",
        cvVi: "Tải CV tiếng Việt",
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Gửi email",
      },
    },
    stats: [
      ["6+", "năm triển khai sản phẩm web và mobile"],
      ["45", "kỹ sư trong tổ chức sản phẩm lớn nhất từng tham gia"],
      ["5", "lĩnh vực enterprise: e-commerce, logistics, HR tech, fintech, B2B"],
    ],
    about: {
      title: "Tóm tắt kinh nghiệm",
      body:
        "Có kinh nghiệm dẫn dắt frontend delivery, mentoring developer, thiết lập tiêu chuẩn delivery và triển khai hands-on từ thiết kế Figma, kiến trúc, code review đến release. Thành thạo kết nối UI/UX, frontend và mobile trong cùng một phạm vi ownership.",
    },
    skillsTitle: "Kỹ năng kỹ thuật",
    skillGroups: skillGroupsVi,
    leadership: {
      title: "Điểm nổi bật về leadership",
      intro:
        "Tôi phù hợp với môi trường cần Frontend vừa có kỷ luật delivery, vừa có khả năng ownership hands-on ở cấp senior.",
      items: [
        "Thiết lập tiêu chuẩn review code và quy trình PR thực tế",
        "Mentoring developer về framework pattern và luồng dữ liệu bất đồng bộ",
        "Bóc tách task, điều phối sprint và phối hợp với BE/QA/PM",
        "Ownership base source, kiến trúc tái sử dụng và convention component",
        "Chuẩn hóa delivery từ Figma handoff, implementation, QA đến release",
        "Trao đổi với khách hàng Nhật về kỳ vọng UX và API contract",
      ],
    },
    experienceTitle: "Lộ trình kinh nghiệm",
    experiences: [
      {
        company: "GM Solution",
        role: "Frontend Leader",
        period: "07/2022 - Hiện tại",
        location: "Hà Nội, Việt Nam",
        summary:
          "Dẫn dắt delivery Frontend cho các dự án doanh nghiệp Nhật Bản và Việt Nam. Phụ trách kiến trúc FE, base source, review code, bóc tách task, mentoring và trực tiếp implementation.",
      },
      {
        company: "Luvina Software",
        role: "Frontend & Mobile Developer",
        period: "05/2020 - 07/2022",
        location: "Hà Nội, Việt Nam",
        summary:
          "Triển khai sản phẩm enterprise web/mobile với React, React Native, Vue và Redux; phụ trách build/release APK/IPA và tham gia nghiên cứu native mobile.",
      },
      {
        company: "VNPT",
        role: "Frontend Developer (Fresher)",
        period: "01/2020 - 05/2020",
        summary:
          "Vai trò frontend fresher full-time, tập trung vào nền tảng JavaScript, HTML và CSS.",
      },
    ],
    projects: {
      title: "Dự án ẩn danh theo NDA",
      notice:
        "Tên dự án được ẩn danh nhằm tuân thủ thỏa thuận bảo mật (NDA) với khách hàng.",
      items: [
        {
          codename: "Project FRE***",
          featured: true,
          title: "Sàn thương mại B2B nông sản",
          period: "06/2025 - Hiện tại",
          role: "Frontend Leader",
          team: "Dẫn dắt team Frontend 7 thành viên trong dự án có lúc lên tới 45 nhân sự",
          stack: ["Angular 20", "Tailwind CSS 4", "Socket.io", "RxJS", "Java Spring Boot"],
          highlights: [
            "Dẫn dắt team Frontend 7 thành viên: lên kế hoạch, bóc tách task, điều phối sprint và phối hợp với BE/QA/PM.",
            "Dựng base source Angular, common modules và convention tái sử dụng; xây dựng checklist review và tiêu chuẩn delivery cho team.",
            "Review code cho thành viên, tham gia đánh giá và đề xuất hướng kỹ thuật cho các chức năng phức tạp.",
            "Triển khai các module khó gồm SEO, Google tracking, chat, notification, giỏ hàng, phân quyền admin, chart, RBAC và WebView người bán trong app đối tác.",
          ],
        },
        {
          codename: "Project CAR***",
          featured: true,
          title: "Nền tảng tuyển dụng nội bộ",
          period: "04/2025 - 05/2025",
          role: "Frontend Leader & UI Designer",
          team: "Team Frontend 2 người trong squad nội bộ 8 người",
          stack: ["Next.js 13+", "Tailwind CSS", "HeroUI", "Java Spring Boot", "Figma"],
          highlights: [
            "Tham gia sớm vào khâu thiết kế Figma và đóng góp định hình trải nghiệm cho nền tảng tuyển dụng nội bộ.",
            "Dựng base source Next.js, common modules và thiết lập SEO cho team Frontend 2 người.",
            "Review code cho teammate, thống nhất hướng triển khai và hỗ trợ delivery trong timeline 2 tháng.",
            "Triển khai các module chính gồm chat và phân quyền theo vai trò.",
          ],
        },
        {
          codename: "Project NLJ***",
          featured: true,
          title: "Hệ thống vận tải đường bộ tự động, Nhật Bản",
          period: "10/2024 - 03/2025",
          role: "Frontend Leader",
          team: "Dẫn dắt team Frontend 4 người trong dự án 20 người, 120 man-months",
          stack: ["Next.js 13+", "Tailwind CSS", "HeroUI", "REST API", "Java Spring Boot"],
          highlights: [
            "Dẫn dắt sprint planning, phân task, review code và ra quyết định kỹ thuật cho khách hàng logistics Nhật.",
            "Thiết kế kiến trúc Frontend, xây dựng quy trình điều phối, quản lý lộ trình và theo dõi đơn hàng real-time.",
            "Tối ưu bảng dữ liệu vận hành lớn bằng virtualisation và memoisation.",
          ],
        },
        {
          codename: "Project KOT***",
          title: "Giai đoạn 2 / Mobile App chấm công, Nhật Bản",
          period: "05/2024 - 09/2024",
          role: "Frontend & Mobile Developer",
          team: "Team 11 người, 70 man-months",
          stack: ["Flutter"],
          highlights: [
            "Tham gia triển khai giai đoạn Flutter app của sản phẩm SaaS chấm công doanh nghiệp Nhật Bản.",
            "Triển khai luồng check-in/check-out và logic tính lương, phối hợp cùng product và backend để đảm bảo nghiệp vụ.",
          ],
        },
        {
          codename: "Project PAR***",
          featured: true,
          title: "Quản lý nhân sự & đối tác, Nhật Bản",
          period: "12/2023 - 04/2024",
          role: "Frontend Leader & UI/UX Designer",
          team: "Dẫn dắt team Frontend 2 người trong dự án 8 người, 88 man-months",
          stack: ["Next.js 13+", "Figma"],
          highlights: [
            "Dẫn dắt delivery Frontend trong team 2 người, vừa trực tiếp code vừa quản lý tiến độ.",
            "Tư vấn UI/UX thị trường Nhật và chuyển Figma thành cấu trúc component Next.js có thể mở rộng.",
            "Xây dựng CMS quản lý linh kiện, đối tác và phân quyền đa cấp.",
          ],
        },
        {
          codename: "Project KOT***",
          title: "Giai đoạn 1 / Web khai thuế & chấm công, Nhật Bản",
          period: "04/2023 - 11/2023",
          role: "Frontend Developer",
          team: "Team 26 người, 120 man-months",
          stack: ["Vue 3", "Laravel", "PHP", "Inertia.js"],
          highlights: [
            "Phát triển web khai thuế và chấm công cho nhân viên Nhật trên Vue 3 + Laravel qua Inertia.js.",
            "Đóng góp form, validation, UI quy tắc thuế và luồng chấm công.",
          ],
        },
        {
          codename: "Project TAB***",
          title: "Mạng xã hội du lịch Nhật Bản",
          period: "07/2022 - 03/2023",
          role: "Frontend Leader",
          team: "Team 13 người, 65 man-months",
          stack: ["Nuxt 2", "Vuetify", "Firebase", "Flutter", "Laravel", "MySQL"],
          highlights: [
            "Dẫn dắt team Frontend, thiết lập chuẩn chất lượng code, review PR, bóc tách task và mentoring Nuxt 2/Vuetify.",
            "Phối hợp backend/mobile về Firebase integration, API contract và timeline release.",
            "Triển khai feed, chat, comment và push notification, tối ưu hiệu năng UI trên Vuetify.",
          ],
        },
        {
          codename: "Project PET***",
          title: "Nền tảng chăm sóc thú cưng",
          period: "03/2022 - 05/2022",
          role: "Frontend Developer",
          team: "Team 6 người, 60 man-months",
          stack: ["React.js", "Ant Design", "Less CSS", "Java Spring Boot"],
          highlights: [
            "Thiết kế và triển khai Admin Dashboard với hệ thống Ant Design nhất quán, dễ mở rộng.",
          ],
        },
        {
          codename: "Project NEO***",
          title: "Quản lý công trình xây dựng",
          period: "06/2021 - 02/2022",
          role: "Frontend & Mobile Developer",
          team: "Team 15 người, 300 man-months",
          stack: ["React Native", "Vue.js", "PHP", "NFC / QR", "OpenWeather API"],
          highlights: [
            "Giải quyết nghiệp vụ sơ đồ cây hiện trường, an toàn lao động và ra vào công trường.",
            "Review code, đảm bảo chuẩn coding và đóng gói phát hành APK/IPA.",
            "Tích hợp NFC, QR Code và Weather API vào trải nghiệm mobile thống nhất.",
          ],
        },
        {
          codename: "Project ESR***",
          title: "Hệ thống Sales & Marketing",
          period: "09/2020 - 05/2021",
          role: "Frontend & Mobile Developer",
          team: "Team 40 người, 300 man-months",
          stack: ["React Native", "React.js", "Redux", "Firebase", "Axios", "Java Spring Boot"],
          highlights: [
            "Phát triển UI đồng bộ web/mobile từ shared component library.",
            "Triển khai chat real-time, push notification Firebase và quản lý state phức tạp bằng Redux.",
          ],
        },
        {
          codename: "Project BEE***",
          title: "R&D Mobile y tế",
          period: "05/2020 - 08/2020",
          role: "Mobile R&D",
          team: "Team 8 người, 200 man-months",
          stack: ["Android Native", "Java", "Kotlin", "Swift", "Flutter research"],
          highlights: [
            "Nghiên cứu native iOS/Android và Flutter; xây dựng module thử nghiệm cho hệ thống quản lý bệnh viện mắt.",
          ],
        },
        {
          codename: "Project GUV***",
          title: "Nền tảng dịch vụ giúp việc nhà",
          period: "05/2021 - 10/2021",
          role: "Frontend & Mobile Developer",
          stack: ["React Native", "React.js", "Redux", "REST API"],
          highlights: [
            "Phụ trách chính toàn bộ UI và luồng nghiệp vụ cho app mobile và web vận hành.",
            "Xây dựng đặt lịch real-time, quản lý trạng thái đơn, định vị bản đồ và đánh giá sau dịch vụ.",
            "Tối ưu hiệu suất trên iOS, Android và trình duyệt.",
          ],
        },
        {
          codename: "Project VIVU***",
          title: "Nền tảng du lịch Việt Nam",
          period: "02/2026 - Hiện tại",
          role: "Full-stack tự học",
          stack: ["Next.js 16", "Prisma", "Supabase Auth & DB", "Expo"],
          highlights: [
            "Dự án full-stack quảng bá du lịch Việt Nam với Next.js mới nhất và xác thực Supabase.",
            "Thiết kế schema, auth flow và codebase dùng chung cho web và mobile.",
          ],
        },
      ],
    },
    education: {
      title: "Học vấn",
      school: "Đại học Bách Khoa Hà Nội",
      degree: "Điện tử Viễn thông",
      period: "10/2015 - 05/2020 · Đã tốt nghiệp",
    },
    contact: {
      title: "Liên hệ",
      body: "Sẵn sàng trao đổi cơ hội Frontend Leader hoặc Senior Frontend Engineer, đặc biệt với team cần frontend quality, delivery ownership và phát triển năng lực đội ngũ.",
      emailSubject: "Cơ hội Frontend Leader",
      emailBody:
        "Chào Minh,%0D%0A%0D%0AMình muốn trao đổi với bạn về một cơ hội Frontend Leader / Senior Frontend Engineer.",
    },
    footer: "Built with Next.js. Nội dung được căn chỉnh theo CV Frontend Leader.",
  },
};
