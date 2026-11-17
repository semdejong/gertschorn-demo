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
    <article data-section="privacy" className="mx-auto max-w-[760px] px-5 py-12 md:py-16">
      <p className="font-mono text-[0.95rem]">CONCEPTSITE</p>
      <h1 className="mt-3 font-display text-[2.6rem] font-bold md:text-[3.3rem]">{content.privacy.h1}</h1>
      <div className="my-8 flex flex-col gap-[3px] bg-steen">
        {content.privacy.paragraphs.map((paragraph, index) => (
          <p key={paragraph} className={`bg-papier px-5 py-5 ${index % 2 ? "min-[760px]:ml-8" : "min-[760px]:mr-16"}`}>
            {paragraph}
          </p>
        ))}
      </div>
      <p className="mt-6">
        <PhoneLink />
      </p>
      <p className="mt-2">
        <MailLink />
      </p>
    </article>
  );
}
