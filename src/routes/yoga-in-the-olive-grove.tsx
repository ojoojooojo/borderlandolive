import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Article, ArticleHeader, NextSteps, PhotoSlot } from "@/components/page-shell";
import { Insert, PlaceholderBlock } from "@/components/placeholders";
import yogaImg from "@/assets/yoga.jpg";

export const Route = createFileRoute("/yoga-in-the-olive-grove")({
  head: () => ({
    meta: [
      { title: "Yoga in the Olive Grove — Borderland Olive" },
      {
        name: "description",
        content:
          "Open-level yoga practiced on a prepared area among the olive trees below Castelo de Vide. Stillness and breath, not physical intensity.",
      },
      { property: "og:title", content: "Yoga in the Olive Grove" },
      { property: "og:description", content: "Moving slowly under trees that have never been in a hurry." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ArticleHeader
        eyebrow="An Experience"
        title="Yoga in the Olive Grove"
        subtitle="Moving slowly under trees that have never been in a hurry"
      />

      <PhotoSlot src={yogaImg} alt="Yoga mats laid on a prepared patch among old olive trees." prompt="Yoga mats laid on a prepared, level patch among olive trees; soft, even light; no people, or a small group mid-practice." />

      <Article>
        <PlaceholderBlock kind="field-note">
          First person, yours: why yoga belongs here specifically, in this
          grove, rather than in a generic studio-outdoors setting. 2–4 sentences.
        </PlaceholderBlock>

        <p>
          An olive tree's growth is measured in decades, sometimes centuries —
          it is one of the slowest living things you can stand next to. There's
          something useful in practicing a discipline built around breath and
          patience inside a landscape that has nothing else to teach but
          patience. The grove below Castelo de Vide has watched the border
          above it change hands for two thousand years without itself changing
          very much at all.
        </p>

        <h2>What happens</h2>

        <PlaceholderBlock kind="insert">
          Exact structure: duration, style of practice (e.g. gentle/restorative
          vs. more active), sequence of the session (opening, practice, closing).
        </PlaceholderBlock>

        <p>
          Practiced on a prepared, level area set up with mats among the trees
          — no need to bring your own.
        </p>

        <PlaceholderBlock kind="insert">
          Who guides the sessions: your role, or a named practitioner — note if
          it's the same guide as Guided Meditation and Pranayama, which would
          let this page point to a shared practitioner bio elsewhere.
        </PlaceholderBlock>

        <p>
          Sessions are held outdoors among the trees, weather permitting, with{" "}
          <Insert>indoor alternative, e.g. a room at Casa Amarela or Casa do Parque</Insert>{" "}
          as a fallback.
        </p>

        <h2>Who it's for</h2>

        <p>
          Open to all levels; this is built around stillness and breath rather
          than physical intensity. It pairs naturally with{" "}
          <a href="/pranayama">Pranayama</a> for guests who want to extend the
          breathwork, and with{" "}
          <a href="/guided-meditation">Guided Meditation</a> to close the
          session in seated stillness.
        </p>

        <h2>Practical details</h2>

        <PlaceholderBlock kind="insert">
          Group size cap, duration, price, language(s) offered, time of day
          offered, what to bring/wear, advance booking requirement.
        </PlaceholderBlock>

        <PlaceholderBlock kind="insert">
          Booking/contact mechanism + newsletter capture line.
        </PlaceholderBlock>

        <p>
          Yoga is not part of the{" "}
          <a href="/two-day-retreat">Two-Day Border Retreat</a> by default, but
          can be added when booking — a natural extension for guests who want
          the fullest version of the stay.
        </p>
      </Article>

      <NextSteps
        links={[
          { to: "/the-olive-tree-of-the-border", label: "Why this exists — The Olive Tree of the Border" },
          { to: "/pranayama", label: "Pair with: Pranayama" },
          { to: "/guided-meditation", label: "Close with: Guided Meditation" },
          { to: "/two-day-retreat", label: "Add to the Two-Day Retreat" },
          { to: "/book", label: "Book this session" },
        ]}
      />
    </SiteLayout>
  );
}
