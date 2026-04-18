import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Bùi Công Minh - Frontend Developer",
  description:
    "Bùi Công Minh — phát triển frontend (web & mobile). Next.js, Nuxt, Vue, React, React Native; Flutter thường dùng; Angular theo dự án.",
  keywords: [
    "Frontend Developer",
    "Mobile Developer",
    "Next.js",
    "Nuxt",
    "Vue",
    "React",
    "React Native",
    "Flutter",
    "Angular",
  ],
  authors: [{ name: "Bùi Công Minh" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='vi' className='scroll-smooth'>
      <body
        className={`${firaCode.variable} font-mono antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
