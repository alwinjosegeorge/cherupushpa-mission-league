import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Cherupushpa Library" }, { name: "description", content: "Reach the Cherupushpa Mission League Library team." }] }),
  component: Contact,
});

function Contact() {
  return (
    <div className="pb-8">
      <PageHeader eyebrow="Contact" title="We would love to hear from you." description="Questions, book requests, or a quiet visit — just reach out." />
      <section className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <form className="card-soft space-y-5 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-heading">First name</span>
                <input className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Mary" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-heading">Last name</span>
                <input className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Joseph" />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-heading">Email</span>
              <input type="email" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="you@example.com" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-heading">Message</span>
              <textarea rows={5} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="How can we help?" />
            </label>
            <button type="button" className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:shadow-lift">Send message</button>
          </form>
          <div className="space-y-4">
            {[
              { icon: MapPin, t: "Visit us", d: "CML Centre, Thrissur, Kerala 680001" },
              { icon: Mail, t: "Email", d: "library@cherupushpa.org" },
              { icon: Phone, t: "Phone", d: "+91 487 000 0000" },
              { icon: Clock, t: "Opening hours", d: "Mon – Sat · 9 AM – 7 PM · Sunday after Holy Mass" },
            ].map((c) => (
              <div key={c.t} className="card-soft flex items-start gap-4 p-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface text-primary"><c.icon className="h-5 w-5" /></div>
                <div>
                  <div className="font-display text-sm font-semibold text-heading">{c.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
