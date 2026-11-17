import { content } from "@/content";

/** Mailto die altijd met „Goedendag,” opent. Er gaat niets naar een server. */
export function mailHref(subject: string, body: string): string {
  const safeSubject = subject.startsWith("Goedendag,") ? subject : `Goedendag, ${subject}`;
  const safeBody = body.startsWith("Goedendag,") ? body : `Goedendag,\n\n${body}`;
  const params = `subject=${encodeURIComponent(safeSubject)}&body=${encodeURIComponent(safeBody)}`;
  return `mailto:${content.contact.email}?${params}`;
}

export function plainMailHref(): string {
  return mailHref("Goedendag,", "Goedendag,\n\n");
}
