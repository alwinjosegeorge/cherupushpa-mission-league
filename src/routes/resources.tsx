import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Newspaper, FolderOpen, Image as ImageIcon, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [{ title: "Resources — Cherupushpa Library" }, { name: "description", content: "Magazines, newsletters, event galleries and study materials." }] }),
  component: Resources,
});

const groups = [
  { icon: Newspaper, tag: "Magazine Archive", title: "Cherupushpa Monthly", desc: "Every issue since 2010 — reflections, mission stories and features.", count: "180 issues" },
  { icon: FolderOpen, tag: "Newsletters", title: "Parish Newsletters", desc: "Community updates, retreat notes and monthly announcements.", count: "260 letters" },
  { icon: ImageIcon, tag: "Event Gallery", title: "Photos & Memories", desc: "Feasts, retreats, book releases and youth gatherings.", count: "48 albums" },
];

function Resources() {
  return (
    <div className="pb-8">
      <PageHeader eyebrow="Resources" title="Magazines, archives and memories." description="A quiet corner of the library where past and present meet." />
      <section className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {groups.map((g) => (
            <article key={g.title} className="card-soft card-soft-hover p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-surface text-primary"><g.icon className="h-5 w-5" /></div>
              <div className="mt-5 text-[11px] font-semibold uppercase tracking-wide text-primary">{g.tag}</div>
              <h3 className="mt-2 font-display text-xl font-semibold text-heading">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{g.count}</span>
                <a className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline" href="#">Open <ArrowRight className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-heading">Recent additions</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["Nov 2026", "Cherupushpa Monthly", "Advent special: waiting in joyful hope."],
              ["Oct 2026", "Cherupushpa Monthly", "St. Thérèse — the little way, rediscovered."],
              ["Sep 2026", "Youth Newsletter", "Mission trip reflections from the youth wing."],
              ["Aug 2026", "Parish Bulletin", "Feasts, formation and community notices."],
            ].map(([date, t, d]) => (
              <div key={t + date} className="card-soft flex items-center gap-4 p-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-surface text-xs font-semibold text-primary">{date.split(" ")[0]}</div>
                <div className="min-w-0">
                  <div className="font-display text-sm font-semibold text-heading">{t}</div>
                  <div className="text-xs text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
