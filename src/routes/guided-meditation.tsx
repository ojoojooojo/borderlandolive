import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Article, ArticleHeader, NextSteps, PhotoSlot } from "@/components/page-shell";
import { Insert, FieldNote, PlaceholderBlock } from "@/components/placeholders";
import meditationImg from "@/assets/meditation.jpg";

export const Route = createFileRoute("/guided-meditation")({
  head: () => ({
    meta: [
      { title: "Guided Meditation in the Olive Grove — Borderland Olive" },
      {
        name: "description",
        content:
          "An hour of guided stillness in an olive grove below Castelo de Vide — no experience required, small groups, on a border that was, for two thousand years, never neutral ground.",
      },
      { property: "og:title", content: "Guided Meditation in the Olive Grove" },
      { property: "og:description", content: "Sitting still in a place that has never been neutral ground." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ArticleHeader
        eyebrow="An Experience"
        title="Guided Meditation in the Olive Grove"
        subtitle="Sitting still in a place that has never been neutral ground"
      />

      <PhotoSlot src={meditationImg} alt="Small group seated in meditation among olive trees in soft morning light." prompt="Quiet, low-key photograph of a small group seated on cushions among olive trees in soft morning light." />

      <Article>
        <PlaceholderBlock kind="field-note">
          First person, yours: what drew you to offer meditation specifically
          here, in this grove, rather than meditation as a generic wellness
          add-on. 2–4 sentences.
        </PlaceholderBlock>

        <p>
          For most of its history, this stretch of land was anything but
          peaceful — a border fought over and resettled for centuries, watched
          from the walls of Castelo de Vide above. The olive grove below the
          town is one of the few things here that was never a combatant. It
          simply kept growing, season after season, regardless of who held the
          castle. Sitting inside it now, still, is not an escape from that
          history — it's a way of touching the one part of it that stayed
          constant.
        </p>

        <h2>What happens</h2>

        <PlaceholderBlock kind="insert">
          Exact structure: duration, where the group sits/walks, what the guide
          does (silence, voice-guided sequence, breath cues, a closing), whether
          it's seated, walking, or both. As with the ceremony page, vagueness
          here reads as generic wellness copy rather than something designed for
          this specific grove.
        </PlaceholderBlock>

        <PlaceholderBlock kind="insert">
          Who guides the sessions: your role, or a named practitioner.
        </PlaceholderBlock>

        <p>
          Sessions are held outdoors among the trees, weather permitting, with{" "}
          <Insert>indoor alternative, e.g. a room at Casa Amarela or Casa do Parque</Insert>{" "}
          as a fallback.
        </p>

        <h2>Who it's for</h2>

        <p>
          No experience with meditation is required. This is built for guests
          who want a genuine, guided period of stillness — not a class to
          master, but an hour to spend differently than the rest of the day.
          It pairs naturally with{" "}
          <a href="/pranayama">Pranayama</a> for guests who want breathwork
          alongside it, and with the{" "}
          <a href="/olive-oil-ceremony">Olive Oil Ceremony</a> for a more ritual
          close to the same morning or afternoon.
        </p>

        <h2>Practical details</h2>

        <PlaceholderBlock kind="insert">
          Group size cap, duration, price, language(s) offered, time of day
          offered (early morning is often strongest for this kind of session —
          confirm if that's the case here), advance booking requirement.
        </PlaceholderBlock>

        <PlaceholderBlock kind="insert">
          Booking/contact mechanism + newsletter capture line.
        </PlaceholderBlock>

        <p>
          This experience is also included in the{" "}
          <a href="/two-day-retreat">Two-Day Border Retreat</a>, alongside
          accommodation, pranayama, a lagar visit and tasting, and a welcome
          dinner.
        </p>
      </Article>

      <NextSteps
        links={[
          { to: "/the-olive-tree-of-the-border", label: "Why this exists — The Olive Tree of the Border" },
          { to: "/pranayama", label: "Pair with: Pranayama" },
          { to: "/yoga-in-the-olive-grove", label: "Pair with: Yoga in the Olive Grove" },
          { to: "/olive-oil-ceremony", label: "Close with: the Olive Oil Ceremony" },
          { to: "/two-day-retreat", label: "Included in: the Two-Day Retreat" },
          { to: "/book", label: "Book this session" },
        ]}
      />
    </SiteLayout>
  );
}
