import { content } from "@/content";

export function Testimonial() {
  const { quote, name, organisation } = content.testimonial;
  return (
    <figure className="border-t-[3px] border-steen bg-wit px-5 py-8 min-[760px]:ml-auto min-[760px]:w-[80%] min-[760px]:px-10 min-[760px]:py-10">
      <blockquote>
        <p className="max-w-[40ch] font-display text-[1.65rem] font-medium leading-snug md:text-[1.85rem]">{quote}</p>
      </blockquote>
      <figcaption className="mt-6">
        <span className="block font-medium">{name}</span>
        <span className="text-grijs">{organisation}</span>
      </figcaption>
    </figure>
  );
}
