import type { Metadata } from "next";
import { content } from "@/content";
import { ArticlePage } from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: content.articles.overOns.metaTitle,
  description: content.articles.overOns.description,
};

export default function Page() {
  return <ArticlePage id="overOns" />;
}