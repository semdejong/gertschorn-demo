import Link from "next/link";

export type Bed = {
  title: string;
  text: string;
  href?: string;
  link?: string;
  accent?: "blauw" | "geel";
};

const align = [
  "min-[800px]:w-[93%]",
  "min-[800px]:ml-auto min-[800px]:w-[81%]",
  "min-[800px]:w-[74%]",
  "min-[800px]:ml-auto min-[800px]:w-[88%]",
  "min-[800px]:w-[84%]",
  "min-[800px]:ml-auto min-[800px]:w-[70%]",
];

export function BedWall({
  heading,
  items,
}: {
  heading?: string;
  items: readonly Bed[];
}) {
  return (
    <section aria-label={heading}>
      {heading ? (
        <div className="mx-auto max-w-[1100px] px-5 pb-6 pt-12">
          <p className="font-mono text-[0.95rem]">{heading}</p>
        </div>
      ) : null}
      <ol className="flex flex-col">
        {items.map((item, index) => {
          const joint =
            item.accent === "blauw" ? "h-[4px] bg-blauw" : item.accent === "geel" ? "h-[4px] bg-geel" : "h-[3px] bg-steen";
          const body = (
            <>
              <h2 className="max-w-[20ch] font-display text-[1.7rem] font-medium leading-tight md:text-[2rem]">{item.title}</h2>
              <p className="mt-3 max-w-[58ch]">{item.text}</p>
              {item.link ? <span className="prose-link mt-4 inline-flex min-h-11 items-center">{item.link}</span> : null}
            </>
          );
          return (
            <li key={item.title}>
              <div aria-hidden className={joint} />
              <div className={`${index % 2 === 0 ? "bg-wit" : "bg-vlak"} ${align[index % align.length]}`}>
                {item.href ? (
                  <Link href={item.href} className="block px-5 py-8 min-[800px]:px-10 min-[800px]:py-9">
                    {body}
                  </Link>
                ) : (
                  <div className="px-5 py-8 min-[800px]:px-10 min-[800px]:py-9">{body}</div>
                )}
              </div>
              {index === items.length - 1 ? <div aria-hidden className="h-[3px] bg-steen" /> : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
