import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Article, ArticleHeader, NextSteps, PhotoSlot } from "@/components/page-shell";
import { Insert, PlaceholderBlock } from "@/components/placeholders";

export const Route = createFileRoute("/two-day-retreat")({
  head: () => ({
    meta: [
      { title: "The Two-Day Border Retreat — Borderland Olive" },
      {
        name: "description",
        content:
          "Two days in the olive groves below Castelo de Vide — accommodation at Casa Amarela or Casa do Parque, pranayama, a lagar visit and tasting, and a welcome dinner. Small, exclusive groups.",
      },
      { property: "og:title", content: "The Two-Day Border Retreat" },
      {
        property: "og:description",
        content: "Everything the grove offers, given the time it actually needs.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="border-b border-rule/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center md:pt-28">
          <div className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-olive-deep">
            The Retreat · Two Days
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] text-walnut md:text-6xl lg:text-7xl">
            The Two-Day <span className="italic text-olive-deep">Border Retreat</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-2xl italic text-muted-foreground">
            Everything the grove offers, given the time it actually needs.
          </p>
          <hr className="mx-auto mt-12 w-16 rule-thin" />
        </div>
      </section>

      <PhotoSlot prompt="Hero-quality photograph: the olive grove at golden hour with a small dressed table or candlelit room glimpsed in the background — the welcome-dinner promise." aspect="21/9" />

      <Article>
        <PlaceholderBlock kind="field-note">
          First person, yours: why two days, specifically — what doesn't fit
          into a single afternoon, or what changes between guests who do one
          service and guests who stay the full arc. 2–4 sentences.
        </PlaceholderBlock>

        <p>
          A single session — a meditation, a ceremony, an hour of pranayama —
          gives you a taste of why this grove rewards stillness. Two days gives
          you the actual arc: arriving, settling into the rhythm of the place,
          moving through the practices without rushing between them, and
          closing with a meal that turns the whole stay into something closer
          to a shared occasion than a checklist of activities.
        </p>

        <h2>What's included</h2>

        <ul>
          <li>
            <strong>Accommodation</strong> at either{" "}
            <a href="/casa-amarela">Casa Amarela</a> or{" "}
            <a href="/casa-do-parque">Casa do Parque</a> — guests choose which
            house suits the stay they want.
          </li>
          <li>
            <a href="/pranayama"><strong>Pranayama</strong></a> session among
            the olive trees.
          </li>
          <li>
            <a href="/lagar-visit-tasting"><strong>Lagar visit & tasting</strong></a>{" "}
            — seeing where this year's harvest becomes oil.
          </li>
          <li>
            <strong>Welcome dinner</strong>{" "}
            <Insert>
              where it's held, and anything distinctive about it: local
              ingredients, the house's own oil, a specific room.
            </Insert>
          </li>
        </ul>

        <p>
          <a href="/yoga-in-the-olive-grove">Yoga</a> and the{" "}
          <a href="/olive-oil-ceremony">Olive Oil Ceremony</a> are not part of
          this package, but guests are welcome to add either when booking — a
          natural extension for anyone who wants the fullest possible version of
          the stay.
        </p>

        <h2>How the two days unfold</h2>

        <PlaceholderBlock kind="insert">
          A rough timeline: Day 1 arrival and what happens that afternoon/evening
          (welcome dinner?); Day 2 the pranayama session, lagar visit, and
          departure, or whatever the actual sequence is. Doesn't need to be
          rigid, but guests booking something this priced will want a sense of
          shape before they commit.
        </PlaceholderBlock>

        <h2>Who it's for</h2>

        <p>
          This is the fullest version of what Borderland Olive offers — built
          for guests who want to experience the grove as a place to stay inside
          of, not just visit for an afternoon. Groups remain small and exclusive
          throughout.{" "}
          <Insert>Exact group size cap for the package, if different from individual sessions.</Insert>
        </p>

        <h2>Practical details</h2>

        <PlaceholderBlock kind="insert">
          Price, what's not included if anything, advance booking requirements,
          cancellation policy if relevant, language(s) offered, any seasonal
          restrictions.
        </PlaceholderBlock>

        <PlaceholderBlock kind="insert">
          Booking/contact mechanism + newsletter capture line.
        </PlaceholderBlock>
      </Article>

      <NextSteps
        intro="What to do next."
        links={[
          { to: "/the-olive-tree-of-the-border", label: "Read why this exists — The Olive Tree of the Border" },
          { to: "/casa-amarela", label: "Stay at Casa Amarela", note: "18th-century classified national monument, in the walled centre." },
          { to: "/casa-do-parque", label: "Stay at Casa do Parque", note: "Contemporary, comfortable, near the town park and the groves." },
          { to: "/yoga-in-the-olive-grove", label: "Add: Yoga in the Olive Grove" },
          { to: "/olive-oil-ceremony", label: "Add: the Olive Oil Ceremony" },
          { to: "/book", label: "Book the retreat" },
        ]}
      />
    </SiteLayout>
  );
}
