import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArticleHeader } from "@/components/page-shell";
import { Insert, PlaceholderBlock } from "@/components/placeholders";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Visit — Borderland Olive" },
      {
        name: "description",
        content:
          "Enquire about small-group retreats, individual experiences, or a stay at Casa Amarela or Casa do Parque. Booking is direct, by arrangement.",
      },
      { property: "og:title", content: "Book Your Visit — Borderland Olive" },
      { property: "og:description", content: "Small groups, by arrangement." },
    ],
  }),
  component: Page,
});

const interests = [
  { id: "two-day", label: "The Two-Day Border Retreat" },
  { id: "meditation", label: "Guided Meditation" },
  { id: "yoga", label: "Yoga in the Olive Grove" },
  { id: "pranayama", label: "Pranayama" },
  { id: "ceremony", label: "The Olive Oil Ceremony" },
  { id: "lagar", label: "Lagar Visit & Tasting" },
  { id: "casa-amarela", label: "A stay at Casa Amarela" },
  { id: "casa-parque", label: "A stay at Casa do Parque" },
  { id: "unsure", label: "Not sure yet — tell me more" },
];

function Page() {
  return (
    <SiteLayout>
      <ArticleHeader
        eyebrow="Book"
        title="Book Your Visit"
        subtitle="Small groups, by arrangement"
      />

      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="prose-editorial mx-auto">
          <p>
            Borderland Olive runs in small, exclusive groups, and most
            experiences are booked directly rather than through an
            instant-checkout system.{" "}
            <Insert>
              Confirm if this is accurate, or whether some sessions do allow
              instant booking.
            </Insert>{" "}
            Tell us what you're interested in and when, and we'll confirm
            availability and details directly.
          </p>

          <h2>What are you interested in?</h2>

          <ul>
            {interests.map((i) => (
              <li key={i.id}>{i.label}</li>
            ))}
          </ul>

          <h2>Get in touch</h2>

          <p className="mt-4 font-serif text-[1.05rem] text-walnut">
  Booking email coming soon
</p>

          <PlaceholderBlock kind="insert">
            Phone / WhatsApp if you want to offer it alongside email.
          </PlaceholderBlock>

          <h2>Stay in touch</h2>

          <p>
            Prefer to think it over first? Leave your email and we'll let you
            know about new dates, seasonal availability, and anything new in
            the grove.
          </p>

          {/* Mailchimp embed — email-only, matching the rest of the portfolio */}
          <form
            action="[INSERT — Mailchimp form action URL]"
            method="post"
            target="_blank"
            noValidate
            className="not-prose mt-6 flex flex-col gap-3 sm:flex-row"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <label htmlFor="book-mce-EMAIL" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="EMAIL"
              id="book-mce-EMAIL"
              required
              placeholder="your@email.com"
              className="min-w-0 flex-1 border border-rule bg-bone px-4 py-3 text-sm text-walnut placeholder:text-muted-foreground/70 focus:border-olive-deep focus:outline-none"
            />
            <button
              type="submit"
              className="border border-olive-deep bg-olive-deep px-6 py-3 text-[0.74rem] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-olive"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-sm text-muted-foreground">
            Email only — no other fields, consistent with the portfolio's pattern.
          </p>

          <PlaceholderBlock kind="insert">
            Mailchimp embedded signup form action URL: drop in the existing
            embed snippet from a sibling portfolio site, or generate a new one
            for this audience.
          </PlaceholderBlock>
        </div>
      </div>
    </SiteLayout>
  );
}
