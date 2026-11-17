"use client";

import { type FormEvent } from "react";
import { content } from "@/content";
import { mailHref, plainMailHref } from "@/lib/mail";
import { MailLink } from "@/components/MailLink";

type Intent = "offerte" | "contact";

function dutchValidity(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) {
  field.setCustomValidity("");
  if (field.validity.valueMissing) field.setCustomValidity(content.form.required);
  else if (field.validity.typeMismatch) field.setCustomValidity(content.form.emailInvalid);
}

export function MailForm({ intent }: { intent: Intent }) {
  const offerte = intent === "offerte";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") || "").trim();
    const telefoon = String(data.get("telefoon") || "").trim();
    const email = String(data.get("email") || "").trim();
    const onderwerp = String(data.get("onderwerp") || "").trim();
    const bericht = String(data.get("bericht") || "").trim();
    const subject = offerte
      ? `Goedendag, vrijblijvende offerte${onderwerp ? ` — ${onderwerp}` : ""}`
      : `Goedendag, ${onderwerp || "bericht"}`;
    const body = [
      "Goedendag,",
      "",
      `Naam: ${naam}`,
      `Telefoon: ${telefoon}`,
      `E-mail: ${email}`,
      `Onderwerp: ${onderwerp}`,
      "",
      "Bericht:",
      bericht,
    ].join("\n");
    window.location.href = mailHref(subject, body);
  }

  return (
    <form
      method="post"
      action={plainMailHref()}
      encType="text/plain"
      onSubmit={onSubmit}
      className="flex flex-col gap-4 border-t-[4px] border-geel bg-wit px-4 py-6 sm:px-6"
    >
      <p>
        {content.form.noteBefore} <MailLink />. {content.form.noteAfter} {content.form.sentHint}
      </p>
      <label className="field">
        <span className="field-label">Naam</span>
        <input
          name="naam"
          autoComplete="name"
          required
          onInvalid={(event) => dutchValidity(event.currentTarget)}
          onInput={(event) => event.currentTarget.setCustomValidity("")}
        />
      </label>
      <label className="field">
        <span className="field-label">Telefoon</span>
        <input
          name="telefoon"
          type="tel"
          autoComplete="tel"
          required={offerte}
          onInvalid={(event) => dutchValidity(event.currentTarget)}
          onInput={(event) => event.currentTarget.setCustomValidity("")}
        />
      </label>
      <label className="field">
        <span className="field-label">E-mail</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required={!offerte}
          onInvalid={(event) => dutchValidity(event.currentTarget)}
          onInput={(event) => event.currentTarget.setCustomValidity("")}
        />
      </label>
      {offerte ? (
        <label className="field">
          <span className="field-label">Waar gaat het om</span>
          <select
            name="onderwerp"
            required
            defaultValue=""
            onInvalid={(event) => dutchValidity(event.currentTarget)}
            onChange={(event) => event.currentTarget.setCustomValidity("")}
          >
            <option value="" disabled>
              Maak een keuze
            </option>
            {content.offerte.subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <label className="field">
          <span className="field-label">Onderwerp</span>
          <input
            name="onderwerp"
            required
            onInvalid={(event) => dutchValidity(event.currentTarget)}
            onInput={(event) => event.currentTarget.setCustomValidity("")}
          />
        </label>
      )}
      <label className="field">
        <span className="field-label">Bericht</span>
        <textarea
          name="bericht"
          required
          onInvalid={(event) => dutchValidity(event.currentTarget)}
          onInput={(event) => event.currentTarget.setCustomValidity("")}
        />
      </label>
      <button type="submit" data-cta={offerte ? "offerte" : "mailen"} className="btn btn-ink self-start">
        {offerte ? "Offerte aanvragen" : "E-mail opstellen"}
      </button>
    </form>
  );
}
