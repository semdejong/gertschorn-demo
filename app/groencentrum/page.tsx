import type { Metadata } from "next";
import { content } from "@/content";
import { ArticlePage } from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: content.articles.groencentrum.metaTitle,
  description: content.articles.groencentrum.description,
};

export default function Page() {
  return <ArticlePage id="groencentrum" />;
}
