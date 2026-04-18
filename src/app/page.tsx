"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // Thêm loading state

  const [activeSection, setActiveSection] = useState("home"); // Thêm active section

  // Thêm scroll listener để update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "timeline", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 flex items-center justify-center'>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className='w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full'
        />
      </div>
    );
  }

  const skills = [
    {
      name: "Next.js",
      level: "Chính",
      color: "from-zinc-700 to-zinc-900",
    },
    {
      name: "Nuxt",
      level: "Chính",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Vue 3",
      level: "Chính",
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "React",
      level: "Chính",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "React Native",
      level: "Chính",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Flutter",
      level: "Kèm",
      color: "from-sky-400 to-cyan-400",
    },
    {
      name: "Tailwind CSS",
      level: "Kèm",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "RxJS & Socket.io",
      level: "Kèm",
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      name: "Figma (UI/UX)",
      level: "Kèm",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Vuetify",
      level: "Kèm",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Redux",
      level: "Kèm",
      color: "from-violet-500 to-purple-700",
    },
    {
      name: "Angular",
      level: "Ít",
      color: "from-red-500 to-red-700",
    },
    {
      name: "Prisma",
      level: "Ít",
      color: "from-slate-500 to-slate-700",
    },
    {
      name: "Supabase",
      level: "Ít",
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "Expo",
      level: "Ít",
      color: "from-indigo-400 to-violet-500",
    },
    {
      name: "Firebase",
      level: "Ít",
      color: "from-orange-400 to-orange-600",
    },
  ];

  const skillBarWidth = (level: string) => {
    if (level === "Chính") return "90%";
    if (level === "Kèm") return "78%";
    return "62%";
  };

  const navItems: { label: string; id: string }[] = [
    { label: "Trang chủ", id: "home" },
    { label: "Giới thiệu", id: "about" },
    { label: "Kỹ năng", id: "skills" },
    { label: "Kinh nghiệm", id: "timeline" },
    { label: "Liên hệ", id: "contact" },
  ];

  const timelineData = [
    {
      title: "Nền tảng du lịch Việt Nam (Vivu) — dự án cá nhân",
      company: "Dự án cá nhân",
      period: "Feb 2026 - Hiện tại",
      position: "Web & app (Next.js, Prisma, Supabase, Expo)",
      description:
        "Dự án cá nhân nhỏ quảng bá du lịch Việt Nam; đang từng bước hoàn thiện web và app Expo.",
      tech: ["Next.js 16", "Prisma", "Supabase", "Expo"],
      image: "/globe.svg",
      type: "current",
    },
    {
      title: "Hệ sinh thái thương mại / nông sản",
      company: "Doanh nghiệp",
      period: "Jun 2025 - Hiện tại",
      position: "Frontend Developer",
      description: `Làm frontend cùng team: nền tảng code, tối ưu giao diện; chat realtime (Socket, RxJS), phân quyền, SEO, đồng bộ app bán hàng với admin, nhúng webview vào app.`,
      tech: ["Angular 20+", "Tailwind CSS 4", "Socket.io", "RxJS"],
      image: "/globe.svg",
      type: "current",
    },
    {
      title: "Hệ thống tuyển dụng nội bộ",
      company: "Doanh nghiệp",
      period: "Apr 2025 - May 2025",
      position: "Frontend Developer",
      description: `Hỗ trợ theo bản Figma, triển khai khung web, chat và phân quyền.`,
      tech: ["Next.js 13+", "Tailwind CSS", "Figma"],
      image: "/vercel.svg",
      type: "completed",
    },
    {
      title: "Hệ thống quản lý vận tải (khách Nhật)",
      company: "Doanh nghiệp",
      period: "Oct 2024 - Mar 2025",
      position: "Frontend Developer",
      description:
        "Làm phần giao diện và luồng vận tải: điều phối, lộ trình, theo dõi đơn, bảng dữ liệu lớn.",
      tech: ["Next.js 13+", "Tailwind CSS", "REST API"],
      image: "/vercel.svg",
      type: "completed",
    },
    {
      title: "Hệ thống Thuế & Chấm công (KOT) — Phase 2",
      company: "Doanh nghiệp",
      period: "May 2024 - Sep 2024",
      position: "Mobile Developer (Flutter)",
      description:
        "Chấm công (check-in/out), tính lương, tối ưu theo yêu cầu thị trường Nhật.",
      tech: ["Flutter"],
      image: "/next.svg",
      type: "completed",
    },
    {
      title: "Quản lý nhân sự & Đối tác (linh kiện)",
      company: "Doanh nghiệp",
      period: "Dec 2023 - Apr 2024",
      position: "Frontend Developer",
      description:
        "Chuyển Figma sang Next.js, CMS linh kiện, đối tác, phân quyền nhiều cấp; chỉnh giao diện theo góp ý khách Nhật.",
      tech: ["Next.js 13+", "Figma"],
      image: "/file.svg",
      type: "completed",
    },
    {
      title: "Hệ thống Thuế & Chấm công (KOT) — Phase 1",
      company: "Doanh nghiệp",
      period: "Apr 2023 - Nov 2023",
      position: "Frontend Developer",
      description: "Web khai thuế tại Nhật (Vue 3) và phân hệ mobile.",
      tech: ["Vue 3", "Flutter"],
      image: "/window.svg",
      type: "completed",
    },
    {
      title: "Mạng xã hội du lịch Nhật Bản (Tabi)",
      company: "Doanh nghiệp",
      period: "Jul 2022 - Mar 2023",
      position: "Frontend Developer",
      description:
        "Mạng xã hội, chat, bình luận, thông báo (Firebase), chỉnh UI với Vuetify.",
      tech: ["Nuxt 2", "Vuetify", "Firebase"],
      image: "/globe.svg",
      type: "completed",
    },
    {
      title: "Nền tảng chăm sóc thú cưng",
      company: "Doanh nghiệp",
      period: "Mar 2022 - May 2022",
      position: "Frontend Developer",
      description: "Admin dashboard, Ant Design, mở rộng dễ dàng.",
      tech: ["React", "Ant Design", "Less CSS"],
      image: "/file.svg",
      type: "completed",
    },
    {
      title: "Hệ thống quản lý công trình (Neo...)",
      company: "Doanh nghiệp",
      period: "Jun 2021 - Feb 2022",
      position: "Frontend & Mobile Developer",
      description:
        "Sơ đồ cây công trường, an toàn, NFC/QR, thời tiết; được giao review một phần code, hỗ trợ build APK/IPA.",
      tech: ["React Native", "Vue", "NFC/QR", "OpenWeather API"],
      image: "/window.svg",
      type: "completed",
    },
    {
      title: "Hệ thống giúp việc nhà (Guv...)",
      company: "Freelance",
      period: "May 2021 - Oct 2021",
      position: "Frontend & Mobile Developer",
      description:
        "Đặt lịch real-time, bản đồ, đánh giá; tối ưu iOS, Android, web.",
      tech: ["React Native", "React", "Redux", "REST API"],
      image: "/globe.svg",
      type: "completed",
    },
    {
      title: "Sales & Marketing (Esale...)",
      company: "Doanh nghiệp",
      period: "Sep 2020 - May 2021",
      position: "Frontend & Mobile Developer",
      description:
        "Web + mobile đồng bộ, chat real-time, push Firebase, Redux.",
      tech: ["React Native", "React", "Redux", "Firebase", "Axios"],
      image: "/next.svg",
      type: "completed",
    },
    {
      title: "R&D ứng dụng bệnh viện mắt (Bee...)",
      company: "Doanh nghiệp",
      period: "May 2020 - Aug 2020",
      position: "R&D Mobile",
      description:
        "Nghiên cứu Android native, Swift, Flutter cho module thử nghiệm.",
      tech: ["Android (Java/Kotlin)", "Swift", "Flutter"],
      image: "/file.svg",
      type: "completed",
    },
    {
      title: "Fresher Frontend",
      company: "Doanh nghiệp",
      period: "Jan 2020 - May 2020",
      position: "Fresher (HTML, CSS, JavaScript)",
      description: "Fresher full-time cho vị trí Front-end cơ bản.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/vercel.svg",
      type: "completed",
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 text-white overflow-x-hidden'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4'>
          <div className='flex items-center justify-between'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent flex items-center gap-2 md:gap-4'
            >
              <Image
                src='/assets/images/profile.png'
                alt='logo'
                width={20}
                height={20}
                className='md:w-6 md:h-6'
              />
              <span className='hidden sm:inline'>MinhBC.</span>
              <span className='sm:hidden'>M.</span>
            </motion.div>
            <div className='hidden md:flex space-x-6 lg:space-x-8'>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`hover:text-cyan-400 transition-colors duration-300 cursor-pointer text-sm lg:text-base font-medium ${
                    activeSection === item.id
                      ? "text-orange-400 font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home' className='pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8 md:mb-12'
          >
            <div className='w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 p-1'>
              <div className='w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden'>
                <Image
                  src='/assets/images/profile.png'
                  alt='Bùi Công Minh'
                  width={200}
                  height={200}
                  className='w-full h-full object-cover rounded-full'
                  quality={100}
                  priority
                  unoptimized
                />
              </div>
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent'>
                Bùi Công Minh
              </span>
              <br />
              <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-200'>
                Frontend Developer
              </span>
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 md:mb-4 max-w-4xl mx-auto px-4 leading-relaxed'>
              Làm phát triển giao diện cho web và ứng dụng di động. Hay làm với
              Next.js, Nuxt, Vue, React và React Native; Flutter dùng thường
              xuyên; Angular tùy theo dự án.
            </p>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-4xl mx-auto px-4 leading-relaxed'>
              Ngoài UI, tôi cũng làm các phần liên quan realtime, SEO và phân
              quyền; có thể hỗ trợ từ Figma đến code. Đang bổ sung dần kiến thức
              backend.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4'
          >
            <button
              onClick={() =>
                window.open(
                  "mailto:minhcongbui.bka60@gmail.com?subject=Liên hệ từ Portfolio&body=Xin chào Bùi Công Minh,%0D%0A%0D%0ATôi quan tâm đến hồ sơ của bạn và muốn trao đổi về cơ hội hợp tác.%0D%0A%0D%0AThông tin liên hệ của tôi:%0D%0A- Tên: %0D%0A- Email: %0D%0A- Số điện thoại: %0D%0A- Công ty: %0D%0A%0D%0AMong nhận được phản hồi sớm từ bạn!%0D%0A%0D%0ATrân trọng,",
                  "_blank",
                )
              }
              className='px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-semibold text-lg md:text-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25'
            >
              Liên hệ ngay
            </button>
          </motion.div>

          {/* Floating elements */}
          <div className='relative mt-12 md:mt-16'>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className='absolute top-0 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-orange-400 rounded-full opacity-60'
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className='absolute top-8 md:top-10 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-amber-400 rounded-full opacity-60'
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className='absolute top-16 md:top-20 left-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-300 rounded-full opacity-60'
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='py-12 md:py-16 px-4 md:px-6 bg-slate-800/50'
      >
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-8 md:mb-12'
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent'>
                Giới thiệu
              </span>
            </h2>
            <p className='text-lg sm:text-xl text-white max-w-4xl mx-auto px-4 leading-relaxed text-left md:text-center'>
              Tôi là{" "}
              <span className='text-orange-400 font-semibold'>
                Bùi Công Minh
              </span>
              , sinh ngày{" "}
              <span className='text-cyan-400 font-medium'>04/10/1997</span>. Tốt
              nghiệp{" "}
              <span className='text-cyan-400 font-medium'>
                Đại học Bách Khoa Hà Nội
              </span>{" "}
              ngành Điện tử Viễn thông (khóa 2015–2020). Đi làm từ 2020, qua
              giai đoạn fresher, outsource và freelance; từ tháng 7/2022 làm
              frontend tại doanh nghiệp cho đến nay. Trong công việc tôi hay
              dùng{" "}
              <span className='text-cyan-400 font-medium'>
                Next.js, Nuxt, Vue, React và React Native
              </span>
              , kèm Flutter; Angular chỉ xuất hiện ở một số dự án.
            </p>

            {/* Thêm thông tin bổ sung */}
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
              <div className='text-left p-6 rounded-xl bg-white/5 border border-white/10'>
                <h3 className='text-orange-400 font-semibold mb-3 text-lg'>
                  Mục tiêu
                </h3>
                <p className='text-base text-gray-300 leading-relaxed'>
                  Bổ sung kiến thức phía server, làm trọn phần việc được giao và
                  phối hợp tốt với nhóm.
                </p>
              </div>
              <div className='text-left p-6 rounded-xl bg-white/5 border border-white/10'>
                <h3 className='text-cyan-400 font-semibold mb-3 text-lg'>
                  Cách làm việc
                </h3>
                <p className='text-base text-gray-300 leading-relaxed'>
                  Bám theo tài liệu và ticket, chủ động hỏi khi chưa thống nhất,
                  cập nhật theo góp ý của team.
                </p>
              </div>
            </div>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {[
              {
                icon: "🎓",
                title: "Đại học Bách Khoa Hà Nội",
                desc: "Điện tử Viễn thông — 10/2015 - 05/2020, đã tốt nghiệp",
                bgColor: "bg-blue-600",
              },
              {
                icon: "⚡",
                title: "Công việc hiện tại",
                desc: "Frontend tại doanh nghiệp, từ 07/2022 đến nay",
                bgColor: "bg-orange-500",
              },
              {
                icon: "👥",
                title: "Làm việc nhóm",
                desc: "Trao đổi rõ ràng, chia nhỏ công việc trong nhóm",
                bgColor: "bg-green-600",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className='text-center p-6 md:p-8 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105'
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${item.bgColor} flex items-center justify-center text-3xl md:text-4xl`}
                >
                  {item.icon}
                </div>
                <h3 className='text-lg md:text-xl font-bold mb-3 text-white'>
                  {item.title}
                </h3>
                <p className='text-base text-gray-200 leading-relaxed'>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-12 md:py-16 px-4 md:px-6'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-8 md:mb-12'
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent'>
                Công nghệ
              </span>
            </h2>
            <p className='text-lg md:text-xl text-gray-400 px-4 leading-relaxed'>
              Cột bên phải là mức độ gần đây: Chính — hay làm nhất; Kèm — đi kèm
              trong dự án; Ít — ít gặp hơn.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className='p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300'
              >
                <div className='flex items-center justify-between mb-3'>
                  <span className='text-white font-semibold text-base md:text-lg'>
                    {skill.name}
                  </span>
                  <span className='text-orange-400 font-bold text-sm md:text-base'>
                    {skill.level}
                  </span>
                </div>
                <div className='w-full bg-gray-700 rounded-full h-2 overflow-hidden'>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: skillBarWidth(skill.level),
                    }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - Combined Projects & Experience */}
      <section id='timeline' className='py-16 px-6 bg-black/20'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent'>
                Kinh nghiệm
              </span>
            </h2>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
              Một số dự án và giai đoạn công việc, sắp xếp từ mới đến cũ.
            </p>
          </motion.div>

          <div className='relative'>
            {/* Timeline Line */}
            <div className='hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-amber-500 h-full rounded-full'></div>

            {/* Timeline Items */}
            <div className='space-y-6 lg:space-y-10'>
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "flex-row lg:flex-row"
                      : "flex-row lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white ${
                      item.type === "current"
                        ? "bg-orange-400 animate-pulse"
                        : "bg-amber-500"
                    } z-10`}
                  ></div>

                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                    }`}
                  >
                    <div
                      className={`p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105 ${
                        item.type === "current"
                          ? "ring-2 ring-orange-400/50"
                          : ""
                      }`}
                    >
                      {/* Header */}
                      <div className='flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4'>
                        <div className='w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center'>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={20}
                            height={20}
                            className='lg:w-6 lg:h-6 dark:invert'
                          />
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-lg lg:text-xl font-bold text-white mb-2 leading-tight'>
                            {item.title}
                          </h3>
                          <p className='text-base lg:text-lg text-cyan-400 font-semibold mb-1'>
                            {item.company}
                          </p>
                          <p className='text-sm text-orange-400 font-medium'>
                            {item.period}
                          </p>
                        </div>
                      </div>

                      {/* Position & Description */}
                      <p className='text-orange-300 font-semibold mb-2 lg:mb-3 text-sm lg:text-base'>
                        {item.position}
                      </p>
                      <p className='text-gray-300 mb-3 lg:mb-4 text-sm lg:text-base leading-relaxed'>
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div className='flex flex-wrap gap-2 mb-3'>
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className='px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30 font-medium'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Current Project Badge */}
                      {item.type === "current" && (
                        <div className='inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30 font-medium'>
                          <div className='w-2 h-2 bg-orange-400 rounded-full animate-pulse'></div>
                          Đang thực hiện
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-12 md:py-16 px-4 md:px-6 bg-black/20'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-8 md:mb-12'
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent'>
                Liên Hệ
              </span>
            </h2>
            <p className='text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-4 leading-relaxed'>
              Email, GitHub hoặc số điện thoại bên dưới. Cảm ơn bạn đã ghé qua.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8'
          >
            <div
              className='p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300 cursor-pointer group'
              onClick={() =>
                window.open(
                  "mailto:minhcongbui.bka60@gmail.com?subject=Liên hệ từ Portfolio&body=Xin chào Bùi Công Minh,%0D%0A%0D%0ATôi quan tâm đến hồ sơ của bạn và muốn trao đổi về cơ hội hợp tác.%0D%0A%0D%0AThông tin liên hệ của tôi:%0D%0A- Tên: %0D%0A- Email: %0D%0A- Số điện thoại: %0D%0A- Công ty: %0D%0A%0D%0AMong nhận được phản hồi sớm từ bạn!%0D%0A%0D%0ATrân trọng,",
                  "_blank",
                )
              }
            >
              <div className='text-2xl md:text-3xl mb-3 md:mb-4'>📧</div>
              <h3 className='text-lg md:text-xl font-bold mb-2'>Email</h3>
              <p className='text-orange-400 group-hover:text-orange-300 transition-colors text-base md:text-lg font-medium'>
                minhcongbui.bka60@gmail.com
              </p>
              <p className='text-gray-400 text-sm mt-2'>Click để gửi email</p>
            </div>
            <div
              className='p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300 cursor-pointer group'
              onClick={() =>
                window.open("https://github.com/minhbc97", "_blank")
              }
            >
              <div className='text-2xl md:text-3xl mb-3 md:mb-4'>🐙</div>
              <h3 className='text-lg md:text-xl font-bold mb-2'>GitHub</h3>
              <p className='text-orange-400 group-hover:text-orange-300 transition-colors text-base md:text-lg font-medium'>
                github.com/minhbc97
              </p>
              <p className='text-gray-400 text-sm mt-2'>Click để xem GitHub</p>
            </div>
            <div
              className='p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300 cursor-pointer group'
              onClick={() => window.open("tel:0386215829")}
            >
              <div className='text-2xl md:text-3xl mb-3 md:mb-4'>📱</div>
              <h3 className='text-lg md:text-xl font-bold mb-2'>Điện thoại</h3>
              <p className='text-orange-400 group-hover:text-orange-300 transition-colors text-base md:text-lg font-medium'>
                0386 215 829
              </p>
            </div>
            <div className='p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10'>
              <div className='text-2xl md:text-3xl mb-3 md:mb-4'>📍</div>
              <h3 className='text-lg md:text-xl font-bold mb-2'>Địa chỉ</h3>
              <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
                27 LK33, KĐT HUD Vân Canh, Nam Từ Liêm, Hà Nội
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className='fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110'
      >
        <span className='text-white text-2xl'>↑</span>
      </motion.button>

      {/* Footer */}
      <footer className='py-6 md:py-8 px-4 md:px-6 border-t border-white/10'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-sm md:text-base text-gray-400 leading-relaxed'
          >
            © 2026 Bùi Công Minh. Được tạo với ❤️ và Next.js
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
