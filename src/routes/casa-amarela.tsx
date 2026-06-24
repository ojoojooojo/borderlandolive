import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Article, ArticleHeader, NextSteps, PhotoSlot } from "@/components/page-shell";
import { PlaceholderBlock } from "@/components/placeholders";

export const Route = createFileRoute("/casa-amarela")({
  head: () => ({
    meta: [
      { title: "Casa Amarela — Borderland Olive" },
      {
        name: "description",
        content:
          "An 18th-century manor house, classified as a national monument, in the walled centre of Castelo de Vide. One of two settings for the Two-Day Border Retreat.",
      },
      { property: "og:title", content: "Casa Amarela" },
      { property: "og:description", content: "Staying inside the frontier's history, not just visiting it." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ArticleHeader
        eyebrow="A House"
        title="Casa Amarela"
        subtitle="Staying inside the frontier's history, not just visiting it"
      />

      <PhotoSlot prompt="Exterior of Casa Amarela — an 18th-century yellow-washed manor house in Castelo de Vide, classified as a national monument." />

      <Article>
        <PlaceholderBlock kind="field-note">
          First person, yours: what it actually feels like to stay in an
          18th-century classified national monument — a specific room, a
          specific detail of the building, something only someone who lives
          with it daily would notice. 2–4 sentences.
        </PlaceholderBlock>

        <p>
          Casa Amarela is an 18th-century manor house, classified as a national
          monument, in the heart of Castelo de Vide — the same walled town
          whose olive groves this entire retreat is built around. Staying here
          isn't a separate experience from the contemplative practices on offer;
          it's a continuation of the same idea. The building has held its shape
          and its weight through the same centuries the olive trees below it
          have stood through.
        </p>

        <PlaceholderBlock kind="insert">
          Specific architectural or historical details about the house: what
          makes it a classified monument, any notable rooms, features, or
          history specific to this building (not generic "historic Alentejo
          house" copy).
        </PlaceholderBlock>

        <h2>Rooms</h2>

        <PlaceholderBlock kind="insert">
          Number of rooms, brief description of the room types/categories if
          there's more than one, any standout features.
        </PlaceholderBlock>

        <h2>What's nearby</h2>

        <p>
          Casa Amarela sits within walking distance of where the olive groves
          begin below the town, and within the walls that this entire frontier
          history is built around.{" "}
          <a href="/the-olive-tree-of-the-border">The Olive Tree of the Border</a>{" "}
          tells that history in full;{" "}
          <a href="https://templarborderlands.com/castelo-de-vide" target="_blank" rel="noopener">
            Templar Borderlands
          </a>{" "}
          tells the version of it built on stone rather than soil, if that side
          of the story interests you too.
        </p>

        <h2>Booking</h2>

        <PlaceholderBlock kind="insert">
          Rates, what's included (breakfast, etc.), how to book directly versus
          through the package, contact details.
        </PlaceholderBlock>

        <p>
          This house is one of two settings for the{" "}
          <a href="/two-day-retreat">Two-Day Border Retreat</a>; guests choose
          whether to base their stay here or at{" "}
          <a href="/casa-do-parque">Casa do Parque</a>.
        </p>

        <PlaceholderBlock kind="insert">Newsletter capture line.</PlaceholderBlock>
      </Article>

      <NextSteps
        links={[
          { to: "/the-olive-tree-of-the-border", label: "Why this exists — The Olive Tree of the Border" },
          { to: "/two-day-retreat", label: "Pair with: the Two-Day Border Retreat" },
          { to: "/casa-do-parque", label: "Or see: Casa do Parque", note: "For a contemporary stay rather than the monument setting." },
          { to: "/book", label: "Enquire about a stay" },
        ]}
      />
    </SiteLayout>
  );
}
