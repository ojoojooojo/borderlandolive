import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function ArticleHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center md:pt-28">
      {eyebrow && (
        <div className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-olive-deep">
          {eyebrow}
        </div>
      )}
      <h1 className="font-serif text-4xl leading-[1.1] text-walnut md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic text-muted-foreground md:text-2xl">
          {subtitle}
        </p>
      )}
      <hr className="mx-auto mt-12 w-16 rule-thin" />
    </header>
  );
}

export function Article({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto px-6 pb-24">
      <div className="prose-editorial mx-auto">{children}</div>
    </article>
  );
}

export function PhotoSlot({
  caption,
  prompt,
  aspect = "16/9",
  src,
  alt,
  credit,
  priority = false,
}: {
  caption?: string;
  prompt: string;
  aspect?: string;
  src?: string;
  alt?: string;
  credit?: string;
  priority?: boolean;
}) {
  return (
    <figure className="mx-auto my-12 max-w-4xl px-6">
      {src ? (
        <div
          className="relative w-full overflow-hidden bg-sand/30"
          style={{ aspectRatio: aspect }}
        >
          <img
            src={src}
            alt={alt ?? prompt}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          <span
            className="absolute left-3 top-3 rounded-sm bg-bone/90 px-2 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-olive-deep shadow-sm"
            title={`Placeholder — replace with real photography. Prompt: ${prompt}`}
          >
            Placeholder photo
          </span>
        </div>
      ) : (
        <div
          className="flex w-full items-center justify-center border border-dashed border-rule bg-sand/30 text-center"
          style={{ aspectRatio: aspect }}
        >
          <div className="max-w-md px-6 py-8 font-sans text-sm text-muted-foreground">
            <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-olive-deep">
              Photography slot
            </div>
            <p className="leading-relaxed">{prompt}</p>
          </div>
        </div>
      )}
      {(caption || credit) && (
        <figcaption className="mt-3 text-center font-serif text-sm italic text-muted-foreground">
          {caption}
          {caption && credit ? " · " : null}
          {credit && <span className="not-italic text-[0.78rem] tracking-wide">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}

export function NextSteps({
  intro,
  links,
}: {
  intro?: string;
  links: Array<{ to: string; label: string; note?: string }>;
}) {
  return (
    <section className="mx-auto mt-20 max-w-3xl border-t border-rule/60 px-6 pt-12">
      {intro && (
        <p className="mb-6 font-serif text-base italic text-muted-foreground">
          {intro}
        </p>
      )}
      <ul className="space-y-4">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="group block border-l border-rule pl-4 transition-colors hover:border-olive-deep"
            >
              <div className="font-serif text-lg text-walnut group-hover:text-olive-deep">
                {l.label} <span className="text-olive-deep">→</span>
              </div>
              {l.note && (
                <div className="mt-1 font-sans text-sm text-muted-foreground">
                  {l.note}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
