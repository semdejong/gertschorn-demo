"use client";

import { useEffect, useId, useRef, useState } from "react";
import { content, type Project } from "@/content";
import { RaisedBed } from "@/components/RaisedBed";

const projects = content.projects;

export function ProjectGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const project: Project | null = index === null ? null : projects[index];

  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      const found = projects.findIndex((item) => item.id === id);
      if (found >= 0) setIndex(found);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    }
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => (current === null ? current : (current + 1) % projects.length));
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => (current === null ? current : (current - 1 + projects.length) % projects.length));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  function step(direction: -1 | 1) {
    setIndex((current) => {
      if (current === null) return current;
      return (current + direction + projects.length) % projects.length;
    });
  }

  return (
    <>
      <div className="flex flex-col gap-14">
        <div className="max-w-[920px]" id={projects[0].id}>
          <Thumb project={projects[0]} onOpen={() => setIndex(0)} />
        </div>
        <div className="max-w-[1100px] min-[760px]:ml-auto min-[760px]:w-[94%]" id={projects[1].id}>
          <Thumb project={projects[1]} onOpen={() => setIndex(1)} />
        </div>
        <div className="grid items-start gap-12 min-[760px]:grid-cols-12">
          <div className="min-[760px]:col-span-7" id={projects[2].id}>
            <Thumb project={projects[2]} onOpen={() => setIndex(2)} />
          </div>
          <div className="min-[760px]:col-span-5 min-[760px]:mt-20" id={projects[3].id}>
            <Thumb project={projects[3]} onOpen={() => setIndex(3)} />
          </div>
        </div>
        <div className="max-w-[1024px]" id={projects[4].id}>
          <Thumb project={projects[4]} onOpen={() => setIndex(4)} />
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby={titleId}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIndex(null);
        }}
      >
        {project ? (
          <div
            className="flex max-h-full max-w-full flex-col items-center gap-4 overflow-hidden px-3 py-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="bg-steen p-[7px]" style={{ maxWidth: `min(92vw, ${project.maxWidth}px)` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.src}
                alt={project.alt}
                width={project.width}
                height={project.height}
                className="block h-auto max-h-[68vh] w-auto max-w-full"
              />
            </div>
            <p id={titleId} className="bg-papier px-3 py-1 font-mono text-[0.95rem] text-inkt">
              {project.label}
              <span className="text-grijs">
                {" "}
                · {(index ?? 0) + 1} van {projects.length}
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 bg-papier p-2">
              <button type="button" className="btn btn-wit" onClick={() => step(-1)}>
                Vorige
              </button>
              <button ref={closeRef} type="button" className="btn btn-ink" onClick={() => setIndex(null)}>
                Sluiten
              </button>
              <button type="button" className="btn btn-wit" onClick={() => step(1)}>
                Volgende
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

function Thumb({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="block w-full border-0 bg-transparent p-0 text-left text-inherit">
      <span className="sr-only">Vergroot. </span>
      <RaisedBed project={project} />
    </button>
  );
}
