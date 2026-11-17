import type { Metadata } from "next";
import { content } from "@/content";
import { BedWall } from "@/components/BedWall";
import { MailForm } from "@/components/MailForm";
import { MailLink } from "@/components/MailLink";
import { PhoneLink } from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: content.contactPage.metaTitle,
  description: content.contactPage.description,
};

export default function ContactPage() {
  const { contact, contactPage } = content;
  return (
    <div data-section="contact">
    <article className="mx-auto grid max-w-[1100px] gap-12 px-5 py-12 md:py-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="font-mono text-[0.95rem]">ADRES</p>
        <h1 className="mt-3 font-display text-[2.6rem] font-bold md:text-[3.3rem]">{contactPage.h1}</h1>
        <p className="mt-5 max-w-[40ch]">{contactPage.lede}</p>
        <p className="mt-4 max-w-[42ch]">{contact.response}</p>
        <p className="mt-4 max-w-[42ch]">{contactPage.aside}</p>
        <address className="mt-8 not-italic">
          <span className="block font-medium">{content.company.name}</span>
          {contact.street}
          <br />
          {contact.postal}
        </address>
        <p className="mt-4">
          <PhoneLink />
        </p>
        <p className="mt-2">
          <MailLink />
        </p>
        <ul className="mt-6 max-w-sm">
          {contact.hours.map((row) => (
            <li key={row.days} className="flex justify-between gap-4 border-b border-steen/50 py-2">
              <span>{row.days}</span>
              <span className="font-mono">{row.time}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-7">
        <MailForm intent="contact" />
      </div>
    </article>
    <BedWall
      heading="Waarvoor u belt of mailt"
      items={content.courses.map((course) => ({
        title: course.title,
        text: course.text,
        href: course.href,
        link: course.link,
        accent: course.joint,
      }))}
    />
    </div>
  );
}
