import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export function PhoneLink({ className = "prose-link font-mono" }: { className?: string }) {
  return (
    <a href={content.contact.phoneHref} data-cta={ctaType(content.contact.phoneHref)} className={className}>
      <span className="font-sans font-medium">Bel </span>
      <span className="font-mono">{content.contact.phoneDisplay}</span>
    </a>
  );
}
