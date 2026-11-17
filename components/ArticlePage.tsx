import Link from "next/link";
import { content, projectById, type ArticleId } from "@/content";
import { CtaRow } from "@/components/CtaRow";
import { RaisedBed } from "@/components/RaisedBed";
import { Testimonial } from "@/components/Testimonial";

export function ArticlePage({ id }: { id: ArticleId }) {
  const article = content.articles[id];
  const photo = article.photo ? projectById(article.photo) : undefined;
  const showHours = "hours" in article && article.hours;
  const showQuote = "testimonial" in article && article.testimonial;

  return (
    <article data-section={id === "overOns" ? "over-ons" : id}>
      <header className="mx-auto max-w-[1100px] px-5 pb-8 pt-12 md:pt-16">
        <p className="font-mono text-[0.95rem]">{article.label}</p>
        <h1 className="mt-3 max-w-[14em] font-display text-[2.55rem] font-bold leading-[1.12] md:text-[3.35rem]">
          {article.h1}
        </h1>
      </header>
      <div className="h-[3px] bg-steen" aria-hidden />
      <div className="mx-auto grid max-w-[1100px] items-start gap-12 px-5 py-12 lg:grid-cols-12 lg:py-16">
        <div className={photo || showHours ? "lg:col-span-7" : "lg:col-span-8"}>
          <div className="flex max-w-[66ch] flex-col gap-5">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <CtaRow />
        </div>
        {photo ? (
          <div className="lg:col-span-5">
            <Link href={`/projecten#${photo.id}`} className="block">
              <RaisedBed project={photo} />
            </Link>
          </div>
        ) : null}
        {showHours ? (
          <aside className="border-t-[3px] border-steen bg-wit px-5 py-6 lg:col-span-5">
            <h2 className="font-display text-[1.7rem] font-medium">Langskomen</h2>
            <p className="mt-4">
              {content.contact.street}
              <br />
              {content.contact.postal}
            </p>
            <ul className="mt-4">
              {content.contact.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4 border-b border-steen/40 py-2">
                  <span>{row.days}</span>
                  <span className="font-mono">{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <Link href="/projecten" className="prose-link inline-flex min-h-11 items-center">
                Bekijk tuinen uit ons werk
              </Link>
            </p>
          </aside>
        ) : null}
      </div>
      {showQuote ? (
        <section data-section="referentie" className="border-t-[3px] border-steen">
          <div className="mx-auto max-w-[1100px] px-5 py-12 md:py-16">
            <h2 className="mb-8 max-w-[16ch] font-display text-[2rem] font-medium">Wat een klant zegt</h2>
            <Testimonial />
          </div>
        </section>
      ) : null}
    </article>
  );
}
