import type { Metadata } from "next";
import { content } from "@/content";
import { ArticlePage } from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: content.articles.onderhoud.metaTitle,
  description: content.articles.onderhoud.description,
};

export default function Page() {
  return <ArticlePage id="onderhoud" />;
}
