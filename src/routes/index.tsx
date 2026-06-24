import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PhotoSlot } from "@/components/page-shell";
import { FieldNote } from "@/components/placeholders";
import grovePortrait from "@/assets/grove-hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Borderland Olive — Slow retreats in the olive groves of Castelo de Vide" },
      {
        name: "description",
        content:
          "Small-group meditation, yoga, pranayama and an olive oil ceremony among the ancient groves of Castelo de Vide, on the Alto Alentejo border.",
      },
      { property: "og:title", content: "Borderland Olive" },
      {
        property: "og:description",
        content:
          "Slow, small-group retreats in the olive groves of Castelo de Vide.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-rule/60">
        <div className="mx-auto grid max-w-6xl items-end gap-12 px-6 pb-16 pt-20 md:grid-cols-12 md:pb-24 md:pt-28">
          <div className="md:col-span-7">
            <div className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-olive-deep">
              Castelo de Vide · Alto Alentejo
            </div>
            <h1 className="font-serif text-4xl leading-[1.05] text-walnut md:text-6xl lg:text-7xl">
              An olive grove on a frontier
              <span className="italic text-olive-deep"> that has finally been still.</span>
            </h1>
            <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-muted-foreground">
              Small, slow retreats in the groves below a walled medieval town —
              meditation, yoga, pranayama, and an olive oil ceremony built around
              two thousand years of border history.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                to="/the-olive-tree-of-the-border"
                className="border border-olive-deep bg-olive-deep px-6 py-3 font-sans text-[0.74rem] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-olive"
              >
                Read the idea
              </Link>
              <Link
                to="/two-day-retreat"
                className="font-sans text-[0.78rem] uppercase tracking-[0.18em] text-walnut underline decoration-olive/40 underline-offset-[6px] hover:text-olive-deep hover:decoration-olive-deep"
              >
                The Two-Day Retreat →
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <PhotoSlot
              src={grovePortrait}
              alt="Olive grove on the hillside below Castelo de Vide, with the walled town on the hill above."
              prompt="Wide, full-bleed photograph of the olive grove below Castelo de Vide at first light — silver-green canopy, the walled town and castle on the hill above."
              aspect="3/4"
              priority
            />
          </div>
        </div>
      </section>

      {/* Premise */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="prose-editorial mx-auto">
          <p>
            Castelo de Vide stands on a hill that has changed hands more times
            than its walls would suggest. The olive trees below it have
            outlasted every one of those changes — Roman, Visigothic, Arab,
            Christian — and have, all the while, carried the same second meaning
            across every regime that occupied this valley: peace, endurance,
            a pause in hostility.
          </p>
          <p>
            <strong>Borderland Olive</strong> is built around the simplest
            consequence of that fact: that the most honest way to encounter
            this landscape's history is not to read about it, but to sit inside
            the part of it that never stopped growing.
          </p>
          <FieldNote>
            One-sentence first-person opening for the home page — the line you
            want a stranger to read first. Optional; can also be left to the
            Alma page.
          </FieldNote>
        </div>
      </section>

      {/* Two paths */}
      <section className="border-y border-rule/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-px bg-rule/60 md:grid-cols-2">
          <Link
            to="/the-olive-tree-of-the-border"
            className="group bg-background p-10 transition-colors hover:bg-sand/30 md:p-16"
          >
            <div className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-olive-deep">
              Begin with the idea
            </div>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-walnut md:text-4xl">
              The Olive Tree of the Border
            </h2>
            <p className="mt-4 max-w-md font-serif text-lg leading-relaxed text-muted-foreground">
              Why an olive grove on a frontier becomes a place to be still —
              the page that explains why any of this exists.
            </p>
            <div className="mt-6 font-sans text-[0.78rem] uppercase tracking-[0.18em] text-walnut group-hover:text-olive-deep">
              Read →
            </div>
          </Link>

          <Link
            to="/two-day-retreat"
            className="group bg-background p-10 transition-colors hover:bg-sand/30 md:p-16"
          >
            <div className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-olive-deep">
              Or book the full arc
            </div>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-walnut md:text-4xl">
              The Two-Day Border Retreat
            </h2>
            <p className="mt-4 max-w-md font-serif text-lg leading-relaxed text-muted-foreground">
              Accommodation at one of two houses, pranayama among the trees,
              a lagar visit, and a welcome dinner — the fullest version of what
              the grove offers.
            </p>
            <div className="mt-6 font-sans text-[0.78rem] uppercase tracking-[0.18em] text-walnut group-hover:text-olive-deep">
              See the package →
            </div>
          </Link>
        </div>
      </section>

      {/* Experiences index */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-olive-deep">
              Five practices
            </div>
            <h2 className="mt-3 font-serif text-3xl text-walnut md:text-4xl">
              Held among the trees, in small groups
            </h2>
          </div>
          <Link
            to="/book"
            className="font-sans text-[0.78rem] uppercase tracking-[0.18em] text-walnut underline decoration-olive/40 underline-offset-[6px] hover:text-olive-deep hover:decoration-olive-deep"
          >
            Enquire about a date →
          </Link>
        </div>

        <div className="grid gap-px bg-rule/60 md:grid-cols-2 lg:grid-cols-3">
          {[
            { to: "/guided-meditation", title: "Guided Meditation", note: "An hour of stillness in a grove that has never been neutral ground." },
            { to: "/yoga-in-the-olive-grove", title: "Yoga in the Olive Grove", note: "Slow practice under trees that have never been in a hurry." },
            { to: "/pranayama", title: "Pranayama", note: "Breathwork beside a canopy that is already, visibly, breathing." },
            { to: "/olive-oil-ceremony", title: "The Olive Oil Ceremony", note: "A ritual older than any religion practiced on this border." },
            { to: "/lagar-visit-tasting", title: "Lagar Visit & Tasting", note: "Seeing where the stillness turns into oil." },
          ].map((e) => (
            <Link
              key={e.to}
              to={e.to}
              className="group bg-background p-8 transition-colors hover:bg-sand/30"
            >
              <h3 className="font-serif text-2xl text-walnut group-hover:text-olive-deep">
                {e.title}
              </h3>
              <p className="mt-3 font-serif text-base leading-relaxed text-muted-foreground">
                {e.note}
              </p>
              <div className="mt-5 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-olive-deep">
                Read →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stay */}
      <section className="border-t border-rule/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-olive-deep">
            Where to stay
          </div>
          <h2 className="mt-3 font-serif text-3xl text-walnut md:text-4xl">
            Two houses, in different keys
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Link
              to="/casa-amarela"
              className="group block border border-rule/60 bg-background p-8 transition-colors hover:border-olive-deep"
            >
              <h3 className="font-serif text-2xl text-walnut group-hover:text-olive-deep">
                Casa Amarela
              </h3>
              <p className="mt-3 font-serif text-base italic text-muted-foreground">
                An 18th-century classified national monument, in the walled
                centre — the historical weight of the frontier in its proper setting.
              </p>
            </Link>
            <Link
              to="/casa-do-parque"
              className="group block border border-rule/60 bg-background p-8 transition-colors hover:border-olive-deep"
            >
              <h3 className="font-serif text-2xl text-walnut group-hover:text-olive-deep">
                Casa do Parque
              </h3>
              <p className="mt-3 font-serif text-base italic text-muted-foreground">
                The same closeness to the groves in a contemporary register —
                stillness without the patina.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
