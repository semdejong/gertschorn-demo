import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next, Fira_Mono, Literata } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBar } from "@/components/MobileBar";

const literata = Literata({
  subsets: ["latin"],
  weight: ["500", "700"],
  style: "normal",
  variable: "--font-literata",
  display: "swap",
});

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: "normal",
  variable: "--font-atkinson",
  display: "swap",
  adjustFontFallback: false,
});

const fira = Fira_Mono({
  subsets: ["latin"],
  weight: ["500"],
  style: "normal",
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s | Gert Schorn",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: { icon: content.company.logo },
};

export const viewport: Viewport = { themeColor: content.colors.papier };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--inkt": c.inkt,
  "--grijs": c.grijs,
  "--papier": c.papier,
  "--vlak": c.vlak,
  "--steen": c.steen,
  "--wit": c.wit,
  "--blauw": c.blauw,
  "--link": c.link,
  "--geel": c.geel,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${literata.variable} ${atkinson.variable} ${fira.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col pb-16 min-[1240px]:pb-0">
        <a href="#inhoud" className="skip-link">
          Ga naar de inhoud
        </a>
        <Header />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
