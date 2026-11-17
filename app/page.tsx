import Link from "next/link";
import { content, projectById } from "@/content";
import { Courses } from "@/components/Courses";
import { CtaRow } from "@/components/CtaRow";
import { RaisedBed } from "@/components/RaisedBed";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  const border = projectById("verhoogde-border");
  const overzicht = projectById("tuinoverzicht");
  const vijver = projectById("vijver");
  if (!border || !overzicht || !vijver) return null;

  return (
    <>
      <section data-section="hero" className="mx-auto grid max-w-[1100px] items-end gap-10 px-5 pb-14 pt-10 md:pt-14 lg:grid-cols-12">
        <div className="rise lg:col-span-6">
          <p className="font-mono text-[0.95rem]">{content.company.slogan}</p>
          <h1 className="mt-4 max-w-[12em] font-display text-[2.7rem] font-bold leading-[1.08] md:text-[3.6rem]">
            {content.home.h1}
          </h1>
          <p className="mt-6 max-w-[38ch] text-[1.2rem]">{content.home.lede}</p>
          <CtaRow />
        </div>
        <div className="lg:col-span-6">
          <Link href={`/projecten#${border.id}`} className="block">
            <RaisedBed project={border} />
          </Link>
        </div>
      </section>

      <div className="flex flex-col gap-[2px] bg-steen">
        {content.home.statements.map((statement) => (
          <p key={statement} className="bg-papier px-5 py-5 md:px-10">
            <span className="mx-auto block max-w-[1100px]">{statement}</span>
          </p>
        ))}
      </div>

      <Courses />

      <section data-section="projecten" className="mx-auto grid max-w-[1100px] items-end gap-10 px-5 py-14 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Link href={`/projecten#${overzicht.id}`} className="block">
            <RaisedBed project={overzicht} />
          </Link>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <h2 className="font-display text-[2rem] font-medium">{content.home.photosTitle}</h2>
          <p className="mt-4">{content.home.photosText}</p>
          <p className="mt-4">
            <Link href="/projecten" className="prose-link inline-flex min-h-11 items-center">
              Alle projectfoto&apos;s
            </Link>
          </p>
        </div>
      </section>

      <section data-section="snoeien" className="border-t-[3px] border-steen">
        <div className="mx-auto grid max-w-[1100px] items-end gap-10 px-5 py-14 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <p className="font-mono text-[0.95rem]">SNOEIEN</p>
            <h2 className="mt-3 font-display text-[2rem] font-medium">{content.home.snoeiTitle}</h2>
            <p className="mt-4">{content.home.snoeiText}</p>
            <p className="mt-4">
              <Link href="/snoeien" className="prose-link inline-flex min-h-11 items-center">
                Bomen snoeien en kappen
              </Link>
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <Link href="/projecten#vijver" className="block">
              <RaisedBed project={vijver} />
            </Link>
            <p className="mt-4 max-w-[36ch] text-grijs">{content.home.vijverText}</p>
          </div>
        </div>
      </section>

      <section data-section="referentie" className="border-t-[3px] border-steen">
        <div className="mx-auto max-w-[1100px] px-5 py-14 md:py-16">
          <h2 className="mb-8 font-display text-[2rem] font-medium">{content.home.quoteTitle}</h2>
          <Testimonial />
        </div>
      </section>

      <div className="joint-draw h-[4px] bg-geel" aria-hidden />

      <section data-section="cta" className="bg-wit">
        <div className="mx-auto max-w-[1100px] px-5 py-14 md:py-16">
          <h2 className="max-w-[14ch] font-display text-[2.2rem] font-medium md:text-[2.6rem]">{content.home.ctaTitle}</h2>
          <p className="mt-4 max-w-[46ch]">{content.home.ctaText}</p>
          <CtaRow />
        </div>
      </section>
    </>
  );
}
