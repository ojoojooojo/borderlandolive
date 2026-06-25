import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Article, ArticleHeader, NextSteps, PhotoSlot } from "@/components/page-shell";
import { Insert, FieldNote, PlaceholderBlock } from "@/components/placeholders";
import ceremonyImg from "@/assets/ceremony.jpg";
import { sharePreviewLoader, sharePreviewTags } from "@/lib/share-preview";

const TITLE = "The Olive Oil Ceremony — Borderland Olive";
const DESC =
  "A small-group ceremony built around the frontier history of Castelo de Vide — Roman, Visigothic, Arab, Christian — and the particular character of hillside-lagar olive oil.";

export const Route = createFileRoute("/olive-oil-ceremony")({
  loader: sharePreviewLoader,
  head: ({ loaderData }) => {
    const share = sharePreviewTags({
      origin: loaderData?.origin ?? "",
      path: "/olive-oil-ceremony",
      title: TITLE,
      description: DESC,
    });
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESC },
        ...share.meta,
      ],
      links: share.links,
    };
  },
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ArticleHeader
        eyebrow="An Experience"
        title="The Olive Oil Ceremony"
        subtitle="A ritual that is older than any religion practiced on this border"
      />

      <PhotoSlot src={ceremonyImg} alt="Small earthenware vessel of green-gold olive oil on a stone slab with olive leaves." prompt="Still-life photograph: a small clay or glass vessel of green-gold olive oil on a stone surface among olive leaves; warm directional light." />

      <Article>
        <PlaceholderBlock kind="field-note">
          First person, yours: why you wanted this specific ceremony to exist,
          or a moment from devising/witnessing it that explains its shape. 2–4
          sentences.
        </PlaceholderBlock>

        <p>
          Long before olive oil was a cooking ingredient with a shelf life and
          a label, it was something closer to currency, medicine, and sacrament.
          It anointed kings and the newly dead. It burned in lamps that lit
          rooms where treaties were signed and where this exact frontier was,
          at various points, fought over and settled. To hold a ceremony built
          around it, in the grove it came from, is less an invention than a
          return to something the tree has always been used for.
        </p>

        <p>
          This ceremony is built specifically around Castelo de Vide's frontier
          history — Roman, Visigothic, Arab, Christian — and around the
          particular character of olive oil from this small-lagar, hillside
          landscape, distinct from the industrial groves of the Baixo Alentejo
          plain.
        </p>

        <h2>What happens</h2>

        <PlaceholderBlock kind="insert">
          Exact structure of the ceremony: duration, sequence of moments (e.g.,
          a guided walk into the grove, a moment of stillness, the oil itself
          presented/tasted, a piece of history told aloud, a closing). Be as
          concrete as the real ceremony is — this is the page where vagueness
          costs the most, since "ceremony" can otherwise sound like a marketing
          word with nothing behind it.
        </PlaceholderBlock>

        <PlaceholderBlock kind="field-note">
          The specific story or histories you tell during the ceremony. Even a
          short description of what's recounted (a particular episode of the
          frontier's history, a family or local memory) makes this feel
          designed rather than generic.
        </PlaceholderBlock>

        <p>
          Held among the trees, weather permitting, or in{" "}
          <Insert>indoor alternative location, e.g. a specific room at Casa Amarela</Insert>{" "}
          when it isn't.
        </p>

        <h2>Who it's for</h2>

        <p>
          This is built for small groups seeking something closer to ritual
          than to a tasting menu — couples, close friends, or solo guests
          wanting an hour of genuine stillness with a clear shape to it. It
          complements, rather than replaces, a visit to a working lagar{" "}
          (<a href="/lagar-visit-tasting">Lagar Visit & Tasting</a>): the lagar
          shows you how the oil is made; this ceremony asks what it has meant.
        </p>

        <h2>Practical details</h2>

        <PlaceholderBlock kind="insert">
          Group size cap, duration, price, language(s) offered, advance booking
          requirement, what's included (e.g. the oil itself to take home?),
          seasonal availability if relevant.
        </PlaceholderBlock>

        <PlaceholderBlock kind="insert">
          Booking/contact mechanism + newsletter capture line.
        </PlaceholderBlock>

        <p>
          The Ceremony is not part of the{" "}
          <a href="/two-day-retreat">Two-Day Border Retreat</a> by default, but
          can be added when booking — alongside accommodation, pranayama, a
          lagar visit, and a welcome dinner.
        </p>
      </Article>

      <NextSteps
        links={[
          { to: "/the-olive-tree-of-the-border", label: "Why this exists — The Olive Tree of the Border" },
          { to: "/lagar-visit-tasting", label: "Pair with: Lagar Visit & Tasting" },
          { to: "/guided-meditation", label: "Open with: Guided Meditation" },
          { to: "/two-day-retreat", label: "Add to the Two-Day Retreat" },
          { to: "/book", label: "Book this ceremony" },
        ]}
      />
    </SiteLayout>
  );
}
