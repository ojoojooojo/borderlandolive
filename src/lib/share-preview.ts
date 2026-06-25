import { getRequestOrigin } from "./origin.functions";

// Shared loader for every public route: returns the absolute request origin
// so head() can emit absolute og:image / og:url URLs (required by social
// crawlers like LinkedIn and Facebook).
export const sharePreviewLoader = async () => {
  const origin = await getRequestOrigin();
  return { origin };
};

export type SharePreviewLoaderData = { origin: string };

// Build the meta / link entries that point at the site-wide preview image
// and the canonical URL of the current page. Use inside route head().
export function sharePreviewTags({
  origin,
  path,
  title,
  description,
  image = "/og-image.jpg",
  type = "website",
}: {
  origin: string;
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: string;
}) {
  const absoluteImage = image.startsWith("http") ? image : `${origin}${image}`;
  const absoluteUrl = `${origin}${path}`;
  return {
    meta: [
      { property: "og:type", content: type },
      { property: "og:url", content: absoluteUrl },
      { property: "og:image", content: absoluteImage },
      { property: "og:image:alt", content: title },
      { name: "twitter:image", content: absoluteImage },
      { name: "twitter:image:alt", content: title },
      { property: "og:site_name", content: "Borderland Olive" },
      // Re-emit title/description as both og:* and twitter:* to keep all
      // crawlers in sync with the per-route copy.
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: absoluteUrl }],
  };
}
