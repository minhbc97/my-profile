import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://minhbc.vercel.app"),
  title: {
    default: "Bui Cong Minh — Frontend Leader",
    template: "%s",
  },
  description:
    "Frontend Leader with 6+ years of experience building web and mobile products for Japanese and Vietnamese enterprises.",
  keywords: [
    "Frontend Leader",
    "Senior Frontend Engineer",
    "Next.js",
    "Angular",
    "React",
    "Vue",
    "Nuxt",
    "React Native",
    "Flutter",
    "TypeScript",
    "Bui Cong Minh",
  ],
  authors: [{ name: "Bui Cong Minh" }],
  creator: "Bui Cong Minh",
  openGraph: {
    title: "Bui Cong Minh — Frontend Leader",
    description:
      "Frontend Leader with 6+ years of experience building web and mobile products for Japanese and Vietnamese enterprises.",
    url: "https://minhbc.vercel.app",
    siteName: "Bui Cong Minh Portfolio",
    locale: "en_US",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
