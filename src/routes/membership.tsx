import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Check } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({ meta: [{ title: "Membership — Cherupushpa Library" }, { name: "description", content: "Become a member of the Cherupushpa Mission League Library." }] }),
  component: Membership,
});

const plans = [
  { name: "Student", price: "₹150", period: "per year", perks: ["Borrow up to 3 books", "Reading circle access", "Monthly magazine"] },
  { name: "Annual", price: "₹300", period: "per year", perks: ["Borrow up to 5 books", "All library events", "Monthly magazine", "Reserved reading room"], featured: true },
  { name: "Family", price: "₹500", period: "per year", perks: ["Up to 4 members", "Borrow up to 10 books", "Children's story hour", "Event priority"] },
  { name: "Patron", price: "₹2,000", period: "per year", perks: ["Unlimited borrowing", "Support new acquisitions", "Name in annual bulletin", "Invitation to patron dinner"] },
];

function Membership() {
  return (
    <div className="pb-8">
      <PageHeader eyebrow="Membership" title="Join our reading family." description="Simple plans that support the library and give you a home for reflection." />
      <section className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <article key={p.name} className={`card-soft card-soft-hover flex flex-col p-6 ${p.featured ? "ring-2 ring-primary/30" : ""}`}>
              {p.featured && <span className="mb-3 inline-flex w-fit rounded-full bg-accent/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">Most loved</span>}
              <div className="font-display text-lg font-semibold text-heading">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold text-heading">{p.price}</span>
                <span className="text-xs text-muted-foreground">{p.period}</span>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{perk}</span></li>
                ))}
              </ul>
              <button className={`mt-6 rounded-full px-5 py-3 text-sm font-medium transition ${p.featured ? "bg-primary text-primary-foreground shadow-soft hover:shadow-lift" : "border border-border bg-card text-heading hover:bg-surface"}`}>Choose {p.name}</button>
            </article>
          ))}
        </div>

        <div className="card-soft mt-10 p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-heading">Register in person</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Visit the library during opening hours with a valid ID and one passport-size photo. Our team will help you pick the right plan and get started the same day.
          </p>
        </div>
      </section>
    </div>
  );
}
