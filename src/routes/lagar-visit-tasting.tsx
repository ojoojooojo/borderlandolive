import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Article, ArticleHeader, NextSteps, PhotoSlot } from "@/components/page-shell";
import { PlaceholderBlock } from "@/components/placeholders";
import lagarImg from "@/assets/lagar.jpg";

export const Route = createFileRoute("/lagar-visit-tasting")({
  head: () => ({
    meta: [
      { title: "Lagar Visit & Tasting — Borderland Olive" },
      {
        name: "description",
        content:
          "A complement to the contemplative practices: a visit to a working lagar near Castelo de Vide and a tasting of the oils produced from this hillside landscape.",
      },
      { property: "og:title", content: "Lagar Visit & Tasting" },
      { property: "og:description", content: "Seeing where the stillness turns into oil." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ArticleHeader
        eyebrow="An Experience"
        title="Lagar Visit & Tasting"
        subtitle="Seeing where the stillness turns into oil"
      />

      <PhotoSlot src={lagarImg} alt="Interior of a small Alentejo lagar, green-gold oil pouring into a ceramic bowl." prompt="Interior of a small family lagar near Castelo de Vide — stone, equipment, golden oil being poured or tasted." />

      <Article>
        <PlaceholderBlock kind="field-note">
          First person, yours: why you wanted this complementary visit included
          at all, given the experience is centred on contemplation rather than
          production. 2–4 sentences.
        </PlaceholderBlock>

        <p>
          Around Castelo de Vide, most of the oil produced is still domestic in
          scale — families bringing their own harvest to a lagar to be pressed,
          rather than industrial production.{" "}
          <PlaceholderBlock kind="insert">
            Name and brief description of the specific lagar or producer
            visited: family-run, cooperative, how long it's operated, what
            makes it distinctive.
          </PlaceholderBlock>{" "}
          A small amount of more industrial production exists to the north of
          the town, but it isn't the character of the place; what defines
          Castelo de Vide's relationship to its own oil is closer to this —
          people bringing in their olives and carrying the gold back out.
        </p>

        <h2>What happens</h2>

        <PlaceholderBlock kind="insert">
          Exact structure: duration, what's seen at the lagar (the pressing
          process, equipment, the specific season this is most visible in — late
          October through December for an active harvest, versus an off-season
          visit focused on the space and story), the tasting itself (how many
          oils, how they're presented, any food paired alongside).
        </PlaceholderBlock>

        <PlaceholderBlock kind="insert">
          Who hosts/guides the visit: the producer themselves, or a guide from
          Borderland Olive.
        </PlaceholderBlock>

        <h2>Who it's for</h2>

        <p>
          This visit is built as a complement to the contemplative experiences
          — <a href="/guided-meditation">Guided Meditation</a>,{" "}
          <a href="/yoga-in-the-olive-grove">Yoga in the Olive Grove</a>,{" "}
          <a href="/pranayama">Pranayama</a>, and{" "}
          <a href="/olive-oil-ceremony">the Olive Oil Ceremony</a> — rather
          than as the centre of the visit. Guests who want to understand,
          briefly and concretely, how the oil they've just spent a morning
          sitting with actually comes to exist.
        </p>

        <h2>Practical details</h2>

        <PlaceholderBlock kind="insert">
          Group size cap, duration, price (standalone, if offered separately
          from the package), language(s) offered, seasonal limitations — e.g.
          whether the pressing itself is only visible during harvest months, and
          what's shown outside that window — advance booking requirement.
        </PlaceholderBlock>

        <PlaceholderBlock kind="insert">
          Booking/contact mechanism + newsletter capture line.
        </PlaceholderBlock>

        <p>
          This experience is included in the{" "}
          <a href="/two-day-retreat">Two-Day Border Retreat</a>, alongside
          accommodation, pranayama, the Olive Oil Ceremony, and a welcome
          dinner.
        </p>
      </Article>

      <NextSteps
        links={[
          { to: "/the-olive-tree-of-the-border", label: "Why this exists — The Olive Tree of the Border" },
          { to: "/olive-oil-ceremony", label: "Pair with: the Olive Oil Ceremony" },
          { to: "/two-day-retreat", label: "Included in: the Two-Day Retreat" },
          { to: "/book", label: "Book this visit" },
        ]}
      />
    </SiteLayout>
  );
}
