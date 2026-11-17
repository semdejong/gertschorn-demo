import Link from "next/link";
import { content } from "@/content";

export function Courses() {
  return (
    <section data-section="pad" aria-label="Van ontwerp tot groencentrum">
      <ol className="flex flex-col">
        {content.courses.map((course, index) => (
          <li key={course.href}>
            <div
              aria-hidden
              className={course.joint === "blauw" ? "h-[4px] bg-blauw" : "h-[3px] bg-steen"}
            />
            <div className={`${index % 2 === 0 ? "bg-wit" : "bg-vlak"} ${course.width}`}>
              <Link href={course.href} className="block px-5 py-8 min-[760px]:px-10 min-[760px]:py-10">
                <p className="font-mono text-[0.95rem]">{course.label}</p>
                <h2 className="mt-3 max-w-[18ch] font-display text-[1.85rem] font-medium md:text-[2.15rem]">
                  {course.title}
                </h2>
                <p className="mt-4 max-w-[62ch]">{course.text}</p>
                <span className="prose-link mt-5 inline-flex min-h-11 items-center">{course.link}</span>
              </Link>
            </div>
            {index === content.courses.length - 1 ? <div aria-hidden className="h-[3px] bg-steen" /> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
