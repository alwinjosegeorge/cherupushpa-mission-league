import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Events — Cherupushpa Library" }, { name: "description", content: "Reading circles, retreats and community events." }] }),
  component: Events,
});

const events = [
  { day: "12", month: "Dec", title: "Advent Reading Circle", desc: "Reading Isaiah together, verse by verse.", place: "Library Hall", time: "6:30 PM" },
  { day: "18", month: "Dec", title: "Youth Book Club: Saints", desc: "This month: St. Kateri Tekakwitha.", place: "Room 2", time: "5:00 PM" },
  { day: "24", month: "Dec", title: "Christmas Story Hour", desc: "For children and families — cocoa provided.", place: "Children's Corner", time: "4:00 PM" },
  { day: "05", month: "Jan", title: "Bible Study Series Begins", desc: "12-week study through the Gospel of John.", place: "Main Hall", time: "7:00 PM" },
  { day: "20", month: "Jan", title: "Missionary Talk", desc: "Field stories from our mission partners in East Africa.", place: "Auditorium", time: "6:00 PM" },
  { day: "02", month: "Feb", title: "Feast of the Presentation", desc: "Candlelit reading and reflection.", place: "Chapel", time: "7:30 PM" },
];

function Events() {
  return (
    <div className="pb-8">
      <PageHeader eyebrow="Events" title="Gather. Read. Reflect." description="Simple gatherings for readers, seekers, and friends of the library." />
      <section className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article key={e.title} className="card-soft card-soft-hover p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-surface">
                  <div className="text-center leading-tight">
                    <div className="font-display text-xl font-semibold text-primary">{e.day}</div>
                    <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{e.month}</div>
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-heading">{e.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{e.desc}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {e.place}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {e.time}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
