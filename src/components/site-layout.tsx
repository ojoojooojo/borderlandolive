import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const experiences = [
  { to: "/guided-meditation", label: "Guided Meditation" },
  { to: "/yoga-in-the-olive-grove", label: "Yoga in the Olive Grove" },
  { to: "/pranayama", label: "Pranayama" },
  { to: "/olive-oil-ceremony", label: "The Olive Oil Ceremony" },
  { to: "/lagar-visit-tasting", label: "Lagar Visit & Tasting" },
] as const;

const houses = [
  { to: "/casa-amarela", label: "Casa Amarela" },
  { to: "/casa-do-parque", label: "Casa do Parque" },
] as const;

function NavLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-[0.78rem] uppercase tracking-[0.18em] text-walnut/80 transition-colors hover:text-olive-deep"
      activeProps={{ className: "text-olive-deep" }}
      activeOptions={{ exact: true }}
    >
      {children}
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [expOpen, setExpOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-rule/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:py-7">
          <Link
            to="/"
            className="font-serif text-xl tracking-tight text-walnut hover:text-olive-deep"
          >
            Borderland <span className="italic text-olive-deep">Olive</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/the-olive-tree-of-the-border">The Idea</NavLink>

            <div
              className="relative"
              onMouseEnter={() => setExpOpen(true)}
              onMouseLeave={() => setExpOpen(false)}
            >
              <button
                type="button"
                onClick={() => setExpOpen((v) => !v)}
                className="text-[0.78rem] uppercase tracking-[0.18em] text-walnut/80 transition-colors hover:text-olive-deep"
              >
                Experiences
              </button>
              {expOpen && (
                <div className="absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 pt-3">
                  <div className="rounded-sm border border-rule/60 bg-card py-2 shadow-sm">
                    {experiences.map((e) => (
                      <Link
                        key={e.to}
                        to={e.to}
                        onClick={() => setExpOpen(false)}
                        className="block px-4 py-2 font-serif text-[1.02rem] text-walnut hover:bg-sand/40 hover:text-olive-deep"
                      >
                        {e.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/two-day-retreat">The Retreat</NavLink>
            <NavLink to="/casa-amarela">Stay</NavLink>
            <NavLink to="/book">Book</NavLink>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden text-[0.78rem] uppercase tracking-[0.18em] text-walnut"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="border-t border-rule/60 px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-3">
              <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/the-olive-tree-of-the-border" onClick={() => setOpen(false)}>The Idea</NavLink></li>
              <li className="pt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">Experiences</li>
              {experiences.map((e) => (
                <li key={e.to} className="pl-2">
                  <NavLink to={e.to} onClick={() => setOpen(false)}>{e.label}</NavLink>
                </li>
              ))}
              <li><NavLink to="/two-day-retreat" onClick={() => setOpen(false)}>The Two-Day Retreat</NavLink></li>
              <li className="pt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">Stay</li>
              {houses.map((h) => (
                <li key={h.to} className="pl-2">
                  <NavLink to={h.to} onClick={() => setOpen(false)}>{h.label}</NavLink>
                </li>
              ))}
              <li><NavLink to="/book" onClick={() => setOpen(false)}>Book</NavLink></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="font-serif text-lg text-walnut">
            Borderland <span className="italic text-olive-deep">Olive</span>
          </div>
          <p className="mt-3 max-w-xs font-serif text-[1.02rem] leading-relaxed text-muted-foreground">
            Small-group mindfulness retreats among the olive groves of
            Castelo de Vide, on the Alto Alentejo border.
          </p>
        </div>

        <div>
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-olive-deep">
            Stay in touch
          </div>
          {/* Mailchimp embed — email-only. Replace action URL when audience is provided. */}
          <form
            action="[INSERT — Mailchimp form action URL]"
            method="post"
            target="_blank"
            noValidate
            className="mt-4 flex flex-col gap-2 sm:flex-row"
          >
            <label htmlFor="mce-EMAIL" className="sr-only">Email address</label>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
              placeholder="your@email.com"
              className="min-w-0 flex-1 border border-rule bg-bone px-3 py-2 font-sans text-sm text-walnut placeholder:text-muted-foreground/70 focus:border-olive-deep focus:outline-none"
            />
            <button
              type="submit"
              className="border border-olive-deep bg-olive-deep px-4 py-2 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-olive"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-[0.72rem] text-muted-foreground">
            Seasonal notes from the grove. Email only — no other fields.
          </p>
        </div>

        <div>
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-olive-deep">
            Get in touch
          </div>
          <a
            href="mailto:[INSERT — booking email]?subject=Borderland%20Olive%20Enquiry"
            className="mt-4 block font-serif text-[1.05rem] text-walnut underline decoration-olive/40 underline-offset-4 hover:decoration-olive-deep"
          >
            [INSERT — booking email]
          </a>

          <div className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-olive-deep">
            Sibling sites
          </div>
          <ul className="mt-3 space-y-1.5 font-serif text-[1rem]">
            <li>
              <a
                href="https://templarborderlands.com"
                target="_blank"
                rel="noopener"
                className="text-walnut underline decoration-olive/40 underline-offset-4 hover:decoration-olive-deep"
              >
                Templar Borderlands
              </a>
            </li>
            <li>
              <a
                href="https://borderlandbirding.com"
                target="_blank"
                rel="noopener"
                className="text-walnut underline decoration-olive/40 underline-offset-4 hover:decoration-olive-deep"
              >
                Borderland Birding
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule/60 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Borderland Olive</span>
          <span>Castelo de Vide · Alto Alentejo</span>
        </div>
      </div>
    </footer>
  );
}
