import Link from "next/link";
import { content } from "@/content";
import { PhoneLink } from "@/components/PhoneLink";

export default function NotFound() {
  return (
    <article data-section="niet-gevonden" className="mx-auto max-w-[1100px] px-5 py-16 md:py-24">
      <p className="font-mono text-[0.95rem]">404</p>
      <h1 className="mt-3 max-w-[12em] font-display text-[2.6rem] font-bold leading-[1.1] md:text-[3.4rem]">
        {content.notFound.h1}
      </h1>
      <div className="my-8 h-[3px] max-w-[12rem] bg-steen" aria-hidden />
      <p className="max-w-[42ch]">{content.notFound.text}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-ink">
          Naar de homepage
        </Link>
        <PhoneLink className="btn btn-wit" />
      </div>
    </article>
  );
}
