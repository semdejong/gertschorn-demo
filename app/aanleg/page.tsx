import type { Metadata } from "next";
import { content } from "@/content";
import { ArticlePage } from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: content.articles.aanleg.metaTitle,
  description: content.articles.aanleg.description,
};

export default function Page() {
  return <ArticlePage id="aanleg" />;
}
