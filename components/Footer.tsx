import Link from "next/link";
import { content } from "@/content";
import { SleadsBadge } from "@/components/SleadsBadge";
import { MailLink } from "@/components/MailLink";
import { PhoneLink } from "@/components/PhoneLink";

const extra = [
  { label: "Offerte", href: "/offerte" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  const { company, contact, nav } = content;
  return (
    <footer data-section="footer" className="border-t-[3px] border-steen bg-vlak">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-medium">{company.name}</p>
          <p className="mt-2 font-mono text-[0.95rem]">{company.slogan}</p>
          <address className="mt-5 not-italic">
            {contact.street}
            <br />
            {contact.postal}
          </address>
          <p className="mt-3">
            <PhoneLink />
          </p>
          <p className="mt-1">
            <MailLink />
          </p>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-[0.95rem]">Openingstijden</p>
          <ul className="mt-3">
            {contact.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-6 border-b border-steen/50 py-2">
                <span>{row.days}</span>
                <span className="font-mono">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Voettekst" className="md:col-span-3">
          <ul className="flex flex-col">
            {[...nav, ...extra].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="prose-link inline-flex min-h-11 items-center">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t-[3px] border-steen">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4 px-5 py-5">
          <p className="text-[1.02rem]">{company.name}</p>
          <SleadsBadge />
        </div>
      </div>
    </footer>
  );
}
