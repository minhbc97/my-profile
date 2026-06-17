import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioPage, type Locale } from "@/components/PortfolioPage";

const locales = ["en", "vi"] as const;

const metadataByLocale: Record<Locale, Metadata> = {
  en: {
    title: "Bui Cong Minh — Frontend Leader",
    description:
      "Frontend Leader with 6+ years of experience building web and mobile products for Japanese and Vietnamese enterprises.",
    openGraph: {
      title: "Bui Cong Minh — Frontend Leader",
      description:
        "Frontend Leader with 6+ years of experience building web and mobile products for Japanese and Vietnamese enterprises.",
      url: "https://minhbc.vercel.app/en",
      siteName: "Bui Cong Minh Portfolio",
      locale: "en_US",
      type: "profile",
    },
    alternates: {
      canonical: "https://minhbc.vercel.app/en",
      languages: {
        en: "https://minhbc.vercel.app/en",
        vi: "https://minhbc.vercel.app/vi",
      },
    },
  },
  vi: {
    title: "Bui Cong Minh — Frontend Leader",
    description:
      "Frontend Leader với hơn 6 năm kinh nghiệm xây dựng sản phẩm web và mobile cho doanh nghiệp Nhật Bản và Việt Nam.",
    openGraph: {
      title: "Bui Cong Minh — Frontend Leader",
      description:
        "Frontend Leader với hơn 6 năm kinh nghiệm xây dựng sản phẩm web và mobile cho doanh nghiệp Nhật Bản và Việt Nam.",
      url: "https://minhbc.vercel.app/vi",
      siteName: "Bui Cong Minh Portfolio",
      locale: "vi_VN",
      type: "profile",
    },
    alternates: {
      canonical: "https://minhbc.vercel.app/vi",
      languages: {
        en: "https://minhbc.vercel.app/en",
        vi: "https://minhbc.vercel.app/vi",
      },
    },
  },
};

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

function isLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  return metadataByLocale[lang];
}

export default async function LocalePage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <PortfolioPage lang={lang} />;
}
