"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
    setIsVisible(true);
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 4);
    }, 3000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const skills = [
    {
      name: "Vue.js",
      level: "Advanced",
      color: "from-green-400 to-emerald-500",
    },
    { name: "React.js", level: "Advanced", color: "from-blue-500 to-cyan-500" },
    { name: "Flutter", level: "Advanced", color: "from-blue-400 to-cyan-400" },
    {
      name: "React Native",
      level: "Advanced",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Nuxt.js",
      level: "Advanced",
      color: "from-green-500 to-emerald-600",
    },
    { name: "Next.js", level: "Advanced", color: "from-black to-gray-800" },
    { name: "Angular", level: "Advanced", color: "from-red-500 to-red-700" },
    {
      name: "TailwindCSS",
      level: "Advanced",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Vuetify",
      level: "Advanced",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "MongoDB",
      level: "Advanced",
      color: "from-green-500 to-green-700",
    },
    {
      name: "MySQL",
      level: "Intermediate",
      color: "from-blue-400 to-blue-600",
    },
    { name: "NestJS", level: "Intermediate", color: "from-red-500 to-red-700" },
    {
      name: "Firebase",
      level: "Intermediate",
      color: "from-orange-400 to-orange-600",
    },
  ];

  const timelineData = [
    {
      title: "Dự án Nông Sản",
      company: "Công ty A",
      period: "Jul 2025 - Present",
      position: "Frontend Developer",
      description:
        "Sàn thương mại điện tử nông sản với giao diện hiện đại và responsive.",
      tech: ["Angular", "TailwindCSS"],
      image: "/globe.svg",
      type: "current",
    },
    {
      title: "Ứng Dụng Chấm Công",
      company: "Công ty A",
      period: "Mar 2025 - Jun 2025",
      position: "Mobile Developer",
      description: "Ứng dụng chấm công di động quản lý nhân viên.",
      tech: ["Flutter", "Dart"],
      image: "/next.svg",
      type: "completed",
    },
    {
      title: "Website Vận Tải Tự Động",
      company: "Công ty A",
      period: "Oct 2024 - Feb 2025",
      position: "Frontend Developer",
      description:
        "Website vận tải tự động với giao diện hiện đại và responsive.",
      tech: ["Next.js", "TailwindCSS", "HeroUI"],
      image: "/vercel.svg",
      type: "completed",
    },
    {
      title: "Hệ Thống Quản Lý Bán Linh Kiện",
      company: "Công ty A",
      period: "Nov 2023 - Sep 2024",
      position: "FE Developer, Flutter Maintainer, Team Leader",
      description:
        "Hệ thống nội bộ quản lý bán linh kiện bán dẫn với quy mô lớn.",
      tech: ["Nuxt 3", "Vuetify", "Flutter"],
      image: "/file.svg",
      type: "completed",
    },
    {
      title: "Website Khai Báo Thuế",
      company: "Công ty A",
      period: "Feb 2023 - Oct 2023",
      position: "Frontend Developer",
      description:
        "Website khai báo thuế với giao diện thân thiện người dùng.",
      tech: ["Vue 3"],
      image: "/window.svg",
      type: "completed",
    },
    {
      title: "Hệ Thống Hỗ Trợ Trực Tuyến",
      company: "Freelancer",
      period: "Jul 2022 - Nov 2022",
      position: "Frontend Developer",
      description: "Hệ thống hỗ trợ trực tuyến với giao diện web và mobile.",
      tech: ["React.js", "React Native"],
      image: "/globe.svg",
      type: "completed",
    },
    {
      title: "Website Địa Điểm Vui Chơi",
      company: "Công ty A",
      period: "Jul 2022 - Nov 2022",
      position: "Frontend Developer",
      description:
        "Website giới thiệu địa điểm vui chơi với giao diện đẹp mắt.",
      tech: ["Vue.js", "Flutter", "MySQL"],
      image: "/next.svg",
      type: "completed",
    },
    {
      title: "Website Chăm Sóc Thú Cưng",
      company: "Công ty A",
      period: "May 2022 - Jun 2022",
      position: "Frontend Developer",
      description:
        "Website chăm sóc thú cưng với các tính năng quản lý và tư vấn.",
      tech: ["React.js"],
      image: "/file.svg",
      type: "completed",
    },
    {
      title: "Hệ Thống Quản Lý Xây Dựng",
      company: "Công ty B",
      period: "Dec 2020 - Apr 2022",
      position: "FE Developer & Mobile Developer",
      description:
        "Hệ thống quản lý ngành xây dựng với giao diện web và mobile.",
      tech: ["Vue.js", "React Native"],
      image: "/window.svg",
      type: "completed",
    },
    {
      title: "Ứng Dụng Quản Lý Bệnh Viện Mắt",
      company: "Công ty B",
      period: "Apr 2020 - Oct 2020",
      position: "Mobile Developer",
      description:
        "Ứng dụng quản lý bệnh viện mắt với giao diện mobile native.",
      tech: ["Android Studio", "Objective-C"],
      image: "/globe.svg",
      type: "completed",
    },
    {
      title: "Hệ Thống Bán Hàng Điện Tử",
      company: "Công ty B",
      period: "May 2019 - Mar 2020",
      position: "FE Developer (3 tháng), Mobile Developer (8 tháng)",
      description: "Hệ thống bán hàng điện tử với giao diện web và mobile.",
      tech: ["React.js", "React Native"],
      image: "/next.svg",
      type: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent flex items-center gap-2 md:gap-4"
            >
              <Image
                src="/assets/images/profile.png"
                alt="logo"
                width={20}
                height={20}
                className="md:w-6 md:h-6"
              />
              <span className="hidden sm:inline">MinhBC.</span>
              <span className="sm:hidden">M.</span>
            </motion.div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["Home", "About", "Skills", "Timeline", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`hover:text-cyan-400 transition-colors duration-300 cursor-pointer text-sm lg:text-base font-medium ${
                      activeSection === item.toLowerCase()
                        ? "text-orange-400 font-semibold"
                        : ""
                    }`}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/images/profile.png"
                  alt="Bùi Công Minh"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-full"
                  quality={100}
                  priority
                  unoptimized
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Bùi Công Minh
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-200">
                Frontend & Mobile Developer
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 md:mb-4 max-w-4xl mx-auto px-4 leading-relaxed font-medium">
              6+ năm kinh nghiệm trong Frontend và Mobile Development
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-4xl mx-auto px-4 leading-relaxed">
              Giải quyết vấn đề tốt, thích thử thách, làm việc nhóm hiệu quả
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4"
          >
            <button
              onClick={() =>
                window.open(
                  "mailto:minhcongbui.bka60@gmail.com?subject=Liên hệ từ Portfolio&body=Xin chào Bùi Công Minh,%0D%0A%0D%0ATôi quan tâm đến hồ sơ của bạn và muốn trao đổi về cơ hội hợp tác.%0D%0A%0D%0AThông tin liên hệ của tôi:%0D%0A- Tên: %0D%0A- Email: %0D%0A- Số điện thoại: %0D%0A- Công ty: %0D%0A%0D%0AMong nhận được phản hồi sớm từ bạn!%0D%0A%0D%0ATrân trọng,",
                  "_blank"
                )
              }
              className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-semibold text-lg md:text-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              Liên hệ ngay
            </button>
          </motion.div>

          {/* Floating elements */}
          <div className="relative mt-12 md:mt-16">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-orange-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 md:top-10 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-amber-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute top-16 md:top-20 left-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-300 rounded-full opacity-60"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 md:py-16 px-4 md:px-6 bg-slate-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Về Tôi
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white max-w-4xl mx-auto px-4 leading-relaxed">
              Tôi là{" "}
              <span className="text-orange-400 font-semibold">
                Bùi Công Minh
              </span>
              , sinh ngày{" "}
              <span className="text-cyan-400 font-medium">04/10/1997</span>
              , quê{" "}
              <span className="text-cyan-400 font-medium">
                xã Bình Xuyên, thành phố Hải Phòng
              </span>
              . Một{" "}
              <span className="text-cyan-400 font-medium">
                Frontend & Mobile Developer
              </span>{" "}
              với{" "}
              <span className="text-orange-400 font-semibold">
                6+ năm kinh nghiệm
              </span>
              . Chuyên về{" "}
              <span className="text-cyan-400 font-medium">
                React, Vue, Angular, React Native & Flutter
              </span>
              . Tốt nghiệp{" "}
              <span className="text-cyan-400 font-medium">
                Đại học Bách Khoa Hà Nội
              </span>
              .
            </p>

            {/* Thêm thông tin bổ sung */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-left p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-orange-400 font-semibold mb-3 text-lg">
                  🎯 Mục Tiêu
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Trở thành Full-stack Developer xuất sắc và đóng góp vào các dự
                  án có tác động lớn
                </p>
              </div>
              <div className="text-left p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-cyan-400 font-semibold mb-3 text-lg">
                  🌟 Điểm Mạnh
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Tư duy logic tốt, khả năng học hỏi nhanh, làm việc nhóm hiệu
                  quả
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "🎓",
                title: "Đại học Bách Khoa Hà Nội",
                desc: "Khoa Điện tử Viễn thông",
                bgColor: "bg-blue-600",
              },
              {
                icon: "⚡",
                title: "6+ Năm Kinh Nghiệm",
                desc: "Frontend & Mobile Development",
                bgColor: "bg-orange-500",
              },
              {
                icon: "👥",
                title: "Làm Việc Nhóm Hiệu Quả",
                desc: "Xử lý xung đột tốt, thích thử thách",
                bgColor: "bg-green-600",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-6 md:p-8 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${item.bgColor} flex items-center justify-center text-3xl md:text-4xl`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-base text-gray-200 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Kỹ Năng Công Nghệ
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 px-4 leading-relaxed">
              Những công nghệ tôi đã sử dụng trong các dự án
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold text-base md:text-lg">
                    {skill.name}
                  </span>
                  <span className="text-orange-400 font-bold text-sm md:text-base">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: skill.level === "Advanced" ? "85%" : "70%",
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
      <section id="timeline" className="py-16 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Timeline Sự Nghiệp
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              6+ năm kinh nghiệm phát triển từ 2019 đến 2025
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-amber-500 h-full rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-6 lg:space-y-10">
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
                      <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={20}
                            height={20}
                            className="lg:w-6 lg:h-6 dark:invert"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg lg:text-xl font-bold text-white mb-2 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-base lg:text-lg text-cyan-400 font-semibold mb-1">
                            {item.company}
                          </p>
                          <p className="text-sm text-orange-400 font-medium">
                            {item.period}
                          </p>
                        </div>
                      </div>

                      {/* Position & Description */}
                      <p className="text-orange-300 font-semibold mb-2 lg:mb-3 text-sm lg:text-base">
                        {item.position}
                      </p>
                      <p className="text-gray-300 mb-3 lg:mb-4 text-sm lg:text-base leading-relaxed">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Current Project Badge */}
                      {item.type === "current" && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30 font-medium">
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
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
      <section id="contact" className="py-12 md:py-16 px-4 md:px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Liên Hệ
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-4 leading-relaxed">
              Hãy để chúng ta cùng tạo ra điều tuyệt vời!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8"
          >
            <div
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300 cursor-pointer group"
              onClick={() =>
                window.open(
                  "mailto:minhcongbui.bka60@gmail.com?subject=Liên hệ từ Portfolio&body=Xin chào Bùi Công Minh,%0D%0A%0D%0ATôi quan tâm đến hồ sơ của bạn và muốn trao đổi về cơ hội hợp tác.%0D%0A%0D%0AThông tin liên hệ của tôi:%0D%0A- Tên: %0D%0A- Email: %0D%0A- Số điện thoại: %0D%0A- Công ty: %0D%0A%0D%0AMong nhận được phản hồi sớm từ bạn!%0D%0A%0D%0ATrân trọng,",
                  "_blank"
                )
              }
            >
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">📧</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Email</h3>
              <p className="text-orange-400 group-hover:text-orange-300 transition-colors text-base md:text-lg font-medium">
                minhcongbui.bka60@gmail.com
              </p>
              <p className="text-gray-400 text-sm mt-2">Click để gửi email</p>
            </div>
            <div
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300 cursor-pointer group"
              onClick={() =>
                window.open("https://github.com/minhbc97", "_blank")
              }
            >
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">🐙</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">GitHub</h3>
              <p className="text-orange-400 group-hover:text-orange-300 transition-colors text-base md:text-lg font-medium">
                github.com/minhbc97
              </p>
              <p className="text-gray-400 text-sm mt-2">Click để xem GitHub</p>
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
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110"
      >
        <span className="text-white text-2xl">↑</span>
      </motion.button>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-gray-400 leading-relaxed"
          >
            © 2025 Bùi Công Minh. Được tạo với ❤️ và Next.js
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
