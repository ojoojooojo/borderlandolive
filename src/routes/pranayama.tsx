import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Article, ArticleHeader, NextSteps, PhotoSlot } from "@/components/page-shell";
import { Insert, PlaceholderBlock } from "@/components/placeholders";
import pranayamaImg from "@/assets/pranayama.jpg";

export const Route = createFileRoute("/pranayama")({
  head: () => ({
    meta: [
      { title: "Pranayama in the Olive Grove — Borderland Olive" },
      {
        name: "description",
        content:
          "Guided breathwork practiced among the olive trees below Castelo de Vide. No prior experience required; small, exclusive groups.",
      },
      { property: "og:title", content: "Pranayama in the Olive Grove" },
      { property: "og:description", content: "Breath, in a place built for it." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ArticleHeader
        eyebrow="An Experience"
        title="Pranayama in the Olive Grove"
        subtitle="Breath, in a place built for it"
      />

      <PhotoSlot src={pranayamaImg} alt="Macro of olive leaves catching wind — silver underside and green top." prompt="Close-up of olive leaves catching wind — the silver/green flicker that the page describes. Soft, slightly blurred." />

      <Article>
        <PlaceholderBlock kind="field-note">
          First person, yours: why breathwork specifically belongs in this
          grove — a physical detail (the air, the quiet, the silver movement of
          olive leaves in wind) or a personal reason you wanted to offer it
          here. 2–4 sentences.
        </PlaceholderBlock>

        <p>
          Olive leaves are silver on one side, green on the other, and a grove
          in even a light breeze seems to breathe — flickering between the two
          colours as the wind moves through. It's a strange thing to practice
          breath control next to, and it tends to make the practice easier
          rather than harder: there's something to watch that's already doing,
          slowly and visibly, what you're trying to do with your own breath.
        </p>

        <h2>What happens</h2>

        <PlaceholderBlock kind="insert">
          Exact structure: duration, specific pranayama techniques used (e.g.
          alternate nostril breathing, box breathing — whatever is actually
          taught), seated or partly walking, sequence of the session (opening,
          technique(s), closing).
        </PlaceholderBlock>

        <PlaceholderBlock kind="insert">
          Who guides the sessions: your role, or a named practitioner — note if
          shared with Yoga and Guided Meditation.
        </PlaceholderBlock>

        <p>
          Sessions are held outdoors among the trees, weather permitting, with{" "}
          <Insert>indoor alternative, e.g. a room at Casa Amarela or Casa do Parque</Insert>{" "}
          as a fallback.
        </p>

        <h2>Who it's for</h2>

        <p>
          No prior experience with breathwork is required; techniques are taught
          from the ground up. It pairs naturally with{" "}
          <a href="/yoga-in-the-olive-grove">Yoga in the Olive Grove</a> as a
          warm-up or close, and with{" "}
          <a href="/guided-meditation">Guided Meditation</a> for a fuller
          seated session. The{" "}
          <a href="/olive-oil-ceremony">Olive Oil Ceremony</a> makes a natural
          ritual close to the same morning or afternoon.
        </p>

        <h2>Practical details</h2>

        <PlaceholderBlock kind="insert">
          Group size cap, duration, price, language(s) offered, time of day
          offered, any health considerations or contraindications worth noting
          for breathwork, advance booking requirement.
        </PlaceholderBlock>

        <PlaceholderBlock kind="insert">
          Booking/contact mechanism + newsletter capture line.
        </PlaceholderBlock>

        <p>
          This experience is included in the{" "}
          <a href="/two-day-retreat">Two-Day Border Retreat</a>, alongside
          accommodation, tasting, a lagar visit, and a welcome dinner.
        </p>
      </Article>

      <NextSteps
        links={[
          { to: "/the-olive-tree-of-the-border", label: "Why this exists — The Olive Tree of the Border" },
          { to: "/yoga-in-the-olive-grove", label: "Pair with: Yoga in the Olive Grove" },
          { to: "/guided-meditation", label: "Pair with: Guided Meditation" },
          { to: "/olive-oil-ceremony", label: "Close with: the Olive Oil Ceremony" },
          { to: "/two-day-retreat", label: "Included in: the Two-Day Retreat" },
          { to: "/book", label: "Book this session" },
        ]}
      />
    </SiteLayout>
  );
}
