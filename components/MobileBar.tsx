import Link from "next/link";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export function MobileBar() {
  return (
    <div
      data-section="mobiel"
      className="fixed inset-x-0 bottom-0 z-40 border-t-[4px] border-steen bg-wit min-[1240px]:hidden print:hidden"
    >
      <div className="grid grid-cols-2">
        <a
          href={content.contact.phoneHref}
          data-cta={ctaType(content.contact.phoneHref)}
          className="inline-flex min-h-12 items-center justify-center border-r border-steen font-medium"
        >
          Bellen
        </a>
        <Link
          href="/offerte"
          data-cta="offerte"
          className="inline-flex min-h-12 items-center justify-center font-medium"
        >
          Offerte
        </Link>
      </div>
    </div>
  );
}
