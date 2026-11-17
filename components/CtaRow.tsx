import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";

export function CtaRow() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <PhoneLink className="btn btn-ink" />
      <Link href="/offerte" data-cta="offerte" className="btn btn-wit">
        Offerte aanvragen
      </Link>
    </div>
  );
}
