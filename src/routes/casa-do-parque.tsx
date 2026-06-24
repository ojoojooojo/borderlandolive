import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Article, ArticleHeader, NextSteps, PhotoSlot } from "@/components/page-shell";
import { PlaceholderBlock } from "@/components/placeholders";
import casaDoParqueImg from "@/assets/casa-do-parque.jpg";

export const Route = createFileRoute("/casa-do-parque")({
  head: () => ({
    meta: [
      { title: "Casa do Parque — Borderland Olive" },
      {
        name: "description",
        content:
          "A contemporary, comfortable house near the town park and the olive groves of Castelo de Vide — one of two settings for the Two-Day Border Retreat.",
      },
      { property: "og:title", content: "Casa do Parque" },
      { property: "og:description", content: "The same stillness, in a contemporary register." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ArticleHeader
        eyebrow="A House"
        title="Casa do Parque"
        subtitle="The same stillness, in a contemporary register"
      />

      <PhotoSlot
        src={casaDoParqueImg}
        alt="Contemporary white-washed hotel building beside a park in Castelo de Vide, at warm late-afternoon light."
        prompt="Exterior or interior of Casa do Parque — contemporary, light-filled, calm. The town park or groves glimpsed through a window."
        priority
      />

      <Article>
        <PlaceholderBlock kind="field-note">
          First person, yours: what distinguishes the feel of staying here
          from Casa Amarela — comfort, light, a specific detail of the
          building or its setting near the park. 2–4 sentences.
        </PlaceholderBlock>

        <p>
          Casa do Parque offers the same closeness to Castelo de Vide's olive
          groves as Casa Amarela, in a different key: contemporary, comfortable,
          built for guests who want the stillness of the retreat without the
          weight of staying inside a national monument.
        </p>

        <PlaceholderBlock kind="insert">
          Specific details about the house: setting, design character, what
          makes it distinct, proximity to the town park and the groves.
        </PlaceholderBlock>

        <h2>Rooms</h2>

        <PlaceholderBlock kind="insert">
          Number of rooms, brief description of room types/categories, any
          standout features.
        </PlaceholderBlock>

        <h2>What's nearby</h2>

        <p>
          Casa do Parque sits close to the town's olive groves and within easy
          reach of the walled centre of Castelo de Vide.{" "}
          <a href="/the-olive-tree-of-the-border">The Olive Tree of the Border</a>{" "}
          sets out the history and idea behind the retreat in full.
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
          <a href="/casa-amarela">Casa Amarela</a>.
        </p>

        <PlaceholderBlock kind="insert">Newsletter capture line.</PlaceholderBlock>
      </Article>

      <NextSteps
        links={[
          { to: "/the-olive-tree-of-the-border", label: "Why this exists — The Olive Tree of the Border" },
          { to: "/two-day-retreat", label: "Pair with: the Two-Day Border Retreat" },
          { to: "/casa-amarela", label: "Or see: Casa Amarela", note: "For the monument setting rather than the contemporary stay." },
          { to: "/book", label: "Enquire about a stay" },
        ]}
      />
    </SiteLayout>
  );
}
