import type { Metadata } from "next";
import { content } from "@/content";
import { BedWall } from "@/components/BedWall";
import { CtaRow } from "@/components/CtaRow";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: content.projecten.metaTitle,
  description: content.projecten.description,
};

export default function ProjectenPage() {
  return (
    <article data-section="projecten">
      <div className="mx-auto max-w-[1100px] px-5 py-12 md:py-16">
        <p className="font-mono text-[0.95rem]">FOTO&apos;S</p>
        <h1 className="mt-3 font-display text-[2.6rem] font-bold md:text-[3.4rem]">{content.projecten.h1}</h1>
        <p className="mt-5 max-w-[46ch]">{content.projecten.lede}</p>
        <p className="mt-4 max-w-[54ch]">{content.projecten.after}</p>
        <div className="my-10 h-[3px] bg-steen" aria-hidden />
        <ProjectGallery />
      </div>
      <BedWall heading="Wat de foto toont" items={content.projecten.notes} />
      <div className="mx-auto max-w-[1100px] px-5 py-14">
        <h2 className="max-w-[14ch] font-display text-[2rem] font-medium">Ook uw tuin</h2>
        <p className="mt-4 max-w-[46ch]">
          Ziet u een verhoogde border, een terras of een vijver die bij uw tuin past? Vraag vrijblijvend een offerte aan. Wij zijn pas tevreden als u tevreden bent.
        </p>
        <CtaRow />
      </div>
    </article>
  );
}
