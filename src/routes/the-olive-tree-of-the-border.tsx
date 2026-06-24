import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Article, ArticleHeader, NextSteps, PhotoSlot } from "@/components/page-shell";
import { Insert, FieldNote, PlaceholderBlock } from "@/components/placeholders";
import groveHero from "@/assets/grove-hero.jpg";

export const Route = createFileRoute("/the-olive-tree-of-the-border")({
  head: () => ({
    meta: [
      { title: "The Olive Tree of the Border — Borderland Olive" },
      {
        name: "description",
        content:
          "Why an olive grove on a frontier becomes a place to be still. The idea behind Borderland Olive — meditation, ritual and stillness in the groves below Castelo de Vide.",
      },
      { property: "og:title", content: "The Olive Tree of the Border" },
      {
        property: "og:description",
        content: "Why an olive grove on a frontier becomes a place to be still.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ArticleHeader
        eyebrow="The Idea · Alma"
        title="The Olive Tree of the Border"
        subtitle="Why an olive grove on a frontier becomes a place to be still"
      />

      <PhotoSlot
        prompt="Wide, full-bleed photograph of the olive grove below Castelo de Vide at first light — silver-green canopy, the walled town and castle on the hill above."
      />

      <Article>
        <PlaceholderBlock kind="field-note">
          First person, yours: the moment that made you see the olive grove
          this way — not as scenery but as something to sit with. A specific
          morning, a specific tree, a specific silence. 3–5 sentences. This is
          the page's single most important paragraph; nothing researched can
          replace it.
        </PlaceholderBlock>

        <p>
          Castelo de Vide stands on a hill that has changed hands more times
          than its walls would suggest, and the olive trees below it have
          outlasted every one of those changes. They were here before the
          reconquest fixed this stretch of border between Christian and Muslim
          Iberia. They were here, by most accounts, before that — under
          Visigothic rule, and likely under Roman rule before that, when the
          olive was already inseparable from how this part of the world fed,
          anointed, and lit itself.
        </p>

        <p>
          What is easy to miss, standing in a grove like this one, is that the
          olive tree has carried a second meaning for almost as long as it has
          carried its first. Across the civilizations that passed through this
          exact frontier — Roman, Visigothic, Arab, Christian — the olive branch
          meant the same thing before it meant anything agricultural: peace,
          endurance, a pause in hostility. It is one of the only objects in the
          human world that every regime occupying this valley would have
          recognized, without translation, as sacred.
        </p>

        <h2>A tree that asks you to slow down</h2>

        <p>
          There is a reason an olive grove feels different from a vineyard or a
          wheat field. The trees are old — genuinely old, some of them centuries
          old — and they grow slowly enough that nothing about them rewards
          hurry.{" "}
          <FieldNote>
            To verify — do you know of a specific tree near Castelo de Vide with
            a known or estimated age, or a family grove worked by the same
            family for generations? Even an approximate, honestly caveated age
            is more valuable here than a precise but unverifiable one.
          </FieldNote>{" "}
          Their silver-green canopy moves with even a faint wind, which is part
          of why so many older traditions in this region treated the olive grove
          as a place apart — not quite wild, not quite cultivated, somewhere to
          think rather than simply to work.
        </p>

        <p>
          This is the instinct <strong>Borderland Olive</strong> is built
          around: that the most honest way to encounter this landscape's two
          thousand years of frontier history is not to read about it, but to
          sit inside the part of it that never stopped growing. The castle
          tells the story in stone. The olive grove tells it in something
          closer to breath.
        </p>

        <h2>What this looks like, in practice</h2>

        <p>
          We don't ask you to choose between the contemplative and the
          agricultural — the grove holds both, and so do we. At the centre of
          what we offer are slow, guided practices held directly among the
          trees: meditation, yoga, pranayama breathwork, and an olive oil
          ceremony that pairs ritual with the frontier history of this
          specific ground.{" "}
          <Insert>
            One sentence on who guides these: your own role, or a named
            practitioner/partner, however you want this framed.
          </Insert>{" "}
          Visits to a working lagar, and tastings of what comes out of this
          year's harvest, sit alongside these practices as a complement — a way
          to taste the same ground you've just sat still in, not the main event.
        </p>

        <p>
          Groups stay deliberately small.{" "}
          <Insert>
            Exact group size cap and the reasoning, if you want to state it.
          </Insert>{" "}
          This isn't a tour. It's closer to a retreat that happens to be built
          around one tree.
        </p>

        <h2>Where to stay with this</h2>

        <p>
          Two houses hold this experience, each in a different register.{" "}
          <strong>Casa Amarela</strong> — an 18th-century classified building,
          a national monument — gives the historical weight of the frontier its
          proper setting. <strong>Casa do Parque</strong> offers the same
          proximity to the groves in a contemporary, comfortable register, for
          guests who want the stillness without the patina.
        </p>

        <PlaceholderBlock kind="insert">
          1–2 sentence pitch + link for each house, and a link/teaser to the
          two-day package combining accommodation, pranayama, tasting, lagar
          visit, and welcome dinner.
        </PlaceholderBlock>

        <PlaceholderBlock kind="insert">
          Newsletter capture line + booking/contact mechanism.
        </PlaceholderBlock>

        <p className="text-sm text-muted-foreground">
          For the stone-and-history version of the same place, see{" "}
          <a
            href="https://templarborderlands.com/castelo-de-vide"
            target="_blank"
            rel="noopener"
          >
            Templar Borderlands' page on Castelo de Vide
          </a>
          .
        </p>
      </Article>

      <NextSteps
        intro="Where this leads."
        links={[
          { to: "/two-day-retreat", label: "The Two-Day Border Retreat", note: "The fullest version of the stay — accommodation, pranayama, lagar visit, welcome dinner." },
          { to: "/guided-meditation", label: "Guided Meditation" },
          { to: "/yoga-in-the-olive-grove", label: "Yoga in the Olive Grove" },
          { to: "/pranayama", label: "Pranayama" },
          { to: "/olive-oil-ceremony", label: "The Olive Oil Ceremony" },
          { to: "/lagar-visit-tasting", label: "Lagar Visit & Tasting" },
          { to: "/casa-amarela", label: "Casa Amarela" },
          { to: "/casa-do-parque", label: "Casa do Parque" },
          { to: "/book", label: "Book your visit" },
        ]}
      />
    </SiteLayout>
  );
}
