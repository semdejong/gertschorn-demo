import type { Metadata } from "next";
import { content } from "@/content";
import { MailForm } from "@/components/MailForm";
import { PhoneLink } from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: content.offerte.metaTitle,
  description: content.offerte.description,
};

export default function OffertePage() {
  return (
    <article data-section="offerte" className="mx-auto grid max-w-[1100px] gap-12 px-5 py-12 md:py-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="font-mono text-[0.95rem]">OFFERTE</p>
        <h1 className="mt-3 max-w-[10em] font-display text-[2.6rem] font-bold leading-[1.1] md:text-[3.3rem]">
          {content.offerte.h1}
        </h1>
        <p className="mt-5 max-w-[42ch]">{content.offerte.lede}</p>
        <p className="mt-6">
          Liever direct bellen?
          <br />
          <PhoneLink />
        </p>
      </div>
      <div className="lg:col-span-7">
        <MailForm intent="offerte" />
      </div>
    </article>
  );
}
