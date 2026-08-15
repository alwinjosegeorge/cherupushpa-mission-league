import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { BookOpen, Search } from "lucide-react";

export const Route = createFileRoute("/catalogue")({
  head: () => ({ meta: [{ title: "Catalogue — Cherupushpa Library" }, { name: "description", content: "Browse the full library catalogue of Christian books, magazines and resources." }] }),
  component: Catalogue,
});

const categories = ["All", "Bible Studies", "Saints", "Catechism", "Spirituality", "Youth", "Missionary"];
const books = Array.from({ length: 15 }).map((_, i) => ({
  title: [
    "The Confessions",
    "Story of a Soul",
    "Imitation of Christ",
    "Divine Mercy",
    "Interior Castle",
    "Practice of Presence",
    "He Leadeth Me",
    "Introduction to Devout Life",
    "Seven Storey Mountain",
    "Screwtape Letters",
    "Mere Christianity",
    "Diary of a Soul",
    "Kunjettan: The Apostle of Laity",
    "Mission Jyothi: CML Handbook",
    "Saint Alphonsa: The Little Flower of India"
  ][i],
  author: [
    "St. Augustine",
    "St. Thérèse",
    "Thomas à Kempis",
    "St. Faustina",
    "St. Teresa of Ávila",
    "Br. Lawrence",
    "W. Ciszek",
    "St. Francis de Sales",
    "T. Merton",
    "C.S. Lewis",
    "C.S. Lewis",
    "St. John XXIII",
    "Fr. Joseph Maliparampil",
    "CML Central Directorate",
    "Fr. Joseph Pampackal"
  ][i],
  status: i % 3 === 0 ? "Reserved" : "Available",
  tone: `oklch(0.55 0.09 ${(i * 47) % 360})`,
}));

function Catalogue() {
  return (
    <div className="pb-8">
      <PageHeader eyebrow="Catalogue" title="Every book in our library." description="Search and explore titles across every category — updated weekly." />
      <section className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
        <div className="flex items-center gap-2 rounded-3xl border border-border bg-card p-2 shadow-card">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-surface text-primary"><Search className="h-5 w-5" /></div>
          <input className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-muted-foreground" placeholder="Search titles or authors…" />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button key={c} className={`rounded-full px-4 py-2 text-sm font-medium transition ${i === 0 ? "bg-primary text-primary-foreground shadow-soft" : "border border-border bg-card text-muted-foreground hover:text-heading"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((b) => (
            <article key={b.title} className="card-soft card-soft-hover overflow-hidden p-3">
              <div className="relative h-56 overflow-hidden rounded-2xl" style={{ background: `linear-gradient(160deg, ${b.tone}, oklch(0.35 0.05 255))` }}>
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-primary-foreground">
                  <BookOpen className="h-5 w-5 opacity-70" />
                  <div className="font-display text-base font-semibold leading-tight">{b.title}</div>
                </div>
              </div>
              <div className="p-3 pt-4">
                <div className="text-xs text-muted-foreground">{b.author}</div>
                <div className={`mt-2 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${b.status === "Available" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" /> {b.status}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
