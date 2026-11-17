import type { Metadata } from "next";
import { content } from "@/content";
import { MailLink } from "@/components/MailLink";
import { PhoneLink } from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: content.privacy.metaTitle,
  description: content.privacy.description,
};

export default function PrivacyPage() {
  return (
    <article data-section="privacy">
      <header className="mx-auto max-w-[1100px] px-5 pb-8 pt-12 md:pt-16">
        <p className="font-mono text-[0.95rem]">CONCEPTSITE</p>
        <h1 className="mt-3 font-display text-[2.6rem] font-bold md:text-[3.3rem]">{content.privacy.h1}</h1>
      </header>
      <div className="flex flex-col bg-steen">
        {content.privacy.paragraphs.map((paragraph, index) => (
          <div key={paragraph}>
            <div aria-hidden className={index === 2 ? "h-[4px] bg-geel" : "h-[3px] bg-steen"} />
            <div className="relative">
              <div
                aria-hidden
                className={
                  index === 1
                    ? "absolute inset-y-0 left-0 right-0 bg-papier min-[1280px]:right-14"
                    : index === 3
                      ? "absolute inset-y-0 left-0 right-0 bg-papier min-[1280px]:left-10"
                      : "absolute inset-0 bg-papier"
                }
              />
              <p className="relative mx-auto max-w-[1100px] px-5 py-6 md:py-8">
                <span className="block max-w-[68ch]">{paragraph}</span>
              </p>
            </div>
          </div>
        ))}
        <div aria-hidden className="h-[3px] bg-steen" />
      </div>
      <div className="mx-auto max-w-[1100px] px-5 py-10">
        <p>
          <PhoneLink />
        </p>
        <p className="mt-2">
          <MailLink />
        </p>
      </div>
    </article>
  );
}
