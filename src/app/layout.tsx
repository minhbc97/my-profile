import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "MinhBC - Frontend & Mobile Developer",
  description: "Lập trình viên Frontend và Mobile với nhiều dự án và kỹ năng đa dạng",
  keywords: ["Frontend Developer", "Mobile Developer", "React", "React Native", "Next.js"],
  authors: [{ name: "Frontend & Mobile Developer" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${firaCode.variable} font-mono antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}