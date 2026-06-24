import type { ReactNode } from "react";

/**
 * Editorial placeholder blocks — deliberately visible so they're easy
 * to find and replace before publication. Do NOT style these to blend in.
 */

export function Insert({ children }: { children: ReactNode }) {
  return (
    <span
      className="my-4 inline-block rounded-sm border border-dashed px-3 py-2 text-[0.95em] leading-relaxed"
      style={{
        background: "color-mix(in oklab, var(--color-insert) 55%, transparent)",
        borderColor: "var(--color-insert-foreground)",
        color: "var(--color-insert-foreground)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <strong className="mr-1 font-semibold uppercase tracking-wider text-[0.72em]">
        Insert
      </strong>
      {children}
    </span>
  );
}

export function FieldNote({ children }: { children: ReactNode }) {
  return (
    <span
      className="my-4 inline-block rounded-sm border border-dashed px-3 py-2 text-[0.95em] leading-relaxed"
      style={{
        background: "color-mix(in oklab, var(--color-note) 55%, transparent)",
        borderColor: "var(--color-note-foreground)",
        color: "var(--color-note-foreground)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <strong className="mr-1 font-semibold uppercase tracking-wider text-[0.72em]">
        Field note
      </strong>
      {children}
    </span>
  );
}

/** Block-level wrapper for INSERT/FIELD NOTE that's its own paragraph. */
export function PlaceholderBlock({
  kind,
  children,
}: {
  kind: "insert" | "field-note";
  children: ReactNode;
}) {
  const isInsert = kind === "insert";
  return (
    <aside
      className="my-6 rounded-sm border border-dashed p-4"
      style={{
        background: isInsert
          ? "color-mix(in oklab, var(--color-insert) 45%, transparent)"
          : "color-mix(in oklab, var(--color-note) 45%, transparent)",
        borderColor: isInsert
          ? "var(--color-insert-foreground)"
          : "var(--color-note-foreground)",
        color: isInsert
          ? "var(--color-insert-foreground)"
          : "var(--color-note-foreground)",
        fontFamily: "var(--font-sans)",
        fontSize: "0.95rem",
        lineHeight: 1.55,
      }}
    >
      <div className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
        {isInsert ? "Insert" : "Field note"}
      </div>
      <div>{children}</div>
    </aside>
  );
}
