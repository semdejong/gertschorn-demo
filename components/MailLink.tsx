import { content } from "@/content";
import { plainMailHref } from "@/lib/mail";

export function MailLink({ className = "prose-link" }: { className?: string }) {
  return (
    <a href={plainMailHref()} data-cta="mailen" className={className}>
      {content.contact.email}
    </a>
  );
}
