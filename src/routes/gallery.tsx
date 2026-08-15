import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Cherupushpa Library" }, { name: "description", content: "Photos and memories from library events and gatherings." }] }),
  component: Gallery,
});

const tones = [
  "oklch(0.72 0.06 250)", "oklch(0.8 0.08 80)", "oklch(0.68 0.05 200)",
  "oklch(0.75 0.07 30)", "oklch(0.7 0.06 155)", "oklch(0.78 0.08 320)",
  "oklch(0.74 0.06 220)", "oklch(0.82 0.06 60)", "oklch(0.7 0.07 280)",
  "oklch(0.76 0.05 180)", "oklch(0.72 0.08 40)", "oklch(0.68 0.07 100)",
];

const captions = ["Feast of the Little Flower", "Youth Retreat 2026", "Advent Reading Circle", "Christmas Story Hour", "Mission Sunday", "Book Release", "Bible Study", "Patron Dinner", "Library Open Day", "Confirmation Class", "Children's Hour", "Adoration"];

function Gallery() {
  return (
    <div className="pb-8">
      <PageHeader eyebrow="Gallery" title="Moments, gathered." description="A quiet album of the readings, feasts and friendships that shape our library." />
      <section className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {tones.map((t, i) => (
            <figure key={i} className="card-soft card-soft-hover overflow-hidden p-0">
              <div className="aspect-[4/5]" style={{ background: `linear-gradient(150deg, ${t}, oklch(0.95 0.02 245))` }} />
              <figcaption className="p-4">
                <div className="font-display text-sm font-semibold text-heading">{captions[i]}</div>
                <div className="text-xs text-muted-foreground">2026</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
