import Link from "next/link";
import { content, projectById, type ArticleId } from "@/content";
import { BedWall } from "@/components/BedWall";
import { CtaRow } from "@/components/CtaRow";
import { RaisedBed } from "@/components/RaisedBed";
import { Testimonial } from "@/components/Testimonial";

const photoShift: Partial<Record<ArticleId, string>> = {
  onderhoud: "min-[800px]:w-[78%]",
  ontwerp: "min-[800px]:ml-auto min-[800px]:w-[70%]",
  aanleg: "min-[800px]:w-[86%]",
  overOns: "min-[800px]:ml-auto min-[800px]:w-[74%]",
};

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
      <div className={`mx-auto grid max-w-[1100px] items-start gap-12 px-5 py-12 lg:py-16 ${showHours || !photo ? "lg:grid-cols-12" : ""}`}>
        <div className={showHours || !photo ? "lg:col-span-7" : "max-w-[66ch]"}>
          <div className="flex max-w-[66ch] flex-col gap-5">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <CtaRow />
        </div>
        {!photo && !showHours ? <StoneMark /> : null}
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
      {photo ? (
        <div className={`px-5 pb-2 ${photoShift[id] ?? ""}`}>
          <Link href={`/projecten#${photo.id}`} className="block">
            <RaisedBed project={photo} />
          </Link>
        </div>
      ) : null}
      <BedWall heading={content.bedHeadings[id]} items={content.pageBeds[id]} />
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

function StoneMark() {
  const courses = [
    "h-8 w-full bg-steen",
    "ml-auto h-8 w-[84%] bg-steen",
    "h-[4px] w-[72%] bg-blauw",
    "h-8 w-[90%] bg-steen",
    "ml-auto h-8 w-[62%] bg-steen",
  ];
  return (
    <div className="hidden self-center lg:col-span-4 lg:col-start-9 lg:block" aria-hidden>
      <div className="flex flex-col gap-[3px]">
        {courses.map((course) => (
          <div key={course} className={course} />
        ))}
      </div>
    </div>
  );
}
