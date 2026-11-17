"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const { company, nav, contact } = content;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header data-section="header" className="sticky top-0 z-40 border-b-[3px] border-steen bg-wit">
      <div className="mx-auto flex max-w-[1100px] items-center gap-3 px-5 py-2">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={company.logo}
            alt={company.name}
            width={company.logoWidth}
            height={company.logoHeight}
            className="h-auto w-[148px] min-[380px]:w-[171px]"
          />
        </Link>

        <nav aria-label="Hoofdmenu" className="ml-auto hidden min-w-0 items-center min-[1240px]:flex">
          <ul className="flex flex-nowrap items-center">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center whitespace-nowrap border-b-[3px] px-2 text-[0.95rem] font-medium ${
                      active ? "border-blauw" : "border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={contact.phoneHref}
          data-cta={ctaType(contact.phoneHref)}
          className="ml-auto inline-flex min-h-11 shrink-0 items-center px-2 text-[1.02rem] font-medium min-[1240px]:ml-3"
        >
          <span className="min-[1240px]:hidden">Bel</span>
          <span className="hidden min-[1240px]:inline">
            Bel <span className="font-mono font-medium">{contact.phoneDisplay}</span>
          </span>
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 shrink-0 items-center border border-steen bg-papier px-3 text-[1.02rem] font-medium min-[1240px]:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setMenuPath(open ? null : pathname)}
        >
          {open ? "Sluit" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id="mobiel-menu" aria-label="Menu" className="border-t-[3px] border-steen bg-papier min-[1240px]:hidden">
          <ul className="flex flex-col gap-[3px] bg-steen">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="bg-papier">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="flex min-h-11 items-center px-4 text-[1.05rem] font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="bg-papier">
              <Link href="/offerte" data-cta="offerte" className="flex min-h-11 items-center px-4 text-[1.05rem] font-medium">
                Offerte
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
