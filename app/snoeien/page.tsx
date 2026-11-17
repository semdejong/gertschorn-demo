import type { Metadata } from "next";
import { content } from "@/content";
import { ArticlePage } from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: content.articles.snoeien.metaTitle,
  description: content.articles.snoeien.description,
};

export default function Page() {
  return <ArticlePage id="snoeien" />;
}
