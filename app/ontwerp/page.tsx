import type { Metadata } from "next";
import { content } from "@/content";
import { ArticlePage } from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: content.articles.ontwerp.metaTitle,
  description: content.articles.ontwerp.description,
};

export default function Page() {
  return <ArticlePage id="ontwerp" />;
}
