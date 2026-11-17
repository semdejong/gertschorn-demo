import type { Project } from "@/content";

export function RaisedBed({ project }: { project: Project }) {
  return (
    <figure className="w-full" style={{ maxWidth: project.maxWidth }}>
      <div className="bg-steen px-[7px] pb-[11px] pt-[7px]">
        <div className="mb-[4px] h-[5px] bg-vlak" aria-hidden />
        <div className="bg-steen p-[4px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.src}
            alt={project.alt}
            width={project.width}
            height={project.height}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[0.95rem] text-grijs">{project.label}</figcaption>
    </figure>
  );
}
