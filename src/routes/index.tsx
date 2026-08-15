import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, BookOpen, BookMarked, Cross, GraduationCap, Sparkles, Users, Compass, ArrowRight, Calendar, MapPin, Library, FolderOpen, UserCheck, CalendarDays, Newspaper, Mail } from "lucide-react";
import heroBooks from "@/assets/hero-books.jpg";
import featuredBanner from "@/assets/featured-banner.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const stats = [
  { icon: Library, label: "Total Books", value: "12,400+" },
  { icon: FolderOpen, label: "Categories", value: "48" },
  { icon: UserCheck, label: "Members", value: "3,200" },
  { icon: CalendarDays, label: "Events", value: "120" },
];

const categories = [
  { icon: BookOpen, name: "Bible Studies", count: "820 titles" },
  { icon: Cross, name: "Saints", count: "540 titles" },
  { icon: GraduationCap, name: "Catechism", count: "310 titles" },
  { icon: Sparkles, name: "Spirituality", count: "1,120 titles" },
  { icon: Users, name: "Youth Resources", count: "460 titles" },
  { icon: Compass, name: "Missionary", count: "290 titles" },
];

const featuredBooks = [
  { title: "Story of a Soul", author: "St. Thérèse of Lisieux", status: "2 copies left", tone: "oklch(0.6 0.09 20)" },
  { title: "Kunjettan: The Apostle of Laity", author: "Fr. Joseph Maliparampil", status: "Available", tone: "oklch(0.55 0.09 255)" },
  { title: "Mission Jyothi: CML Handbook", author: "CML Central Directorate", status: "Available", tone: "oklch(0.7 0.12 60)" },
  { title: "Saint Alphonsa: The Little Flower of India", author: "Fr. Joseph Pampackal", status: "Available", tone: "oklch(0.5 0.06 200)" },
  { title: "The Imitation of Christ", author: "Thomas à Kempis", status: "Available", tone: "oklch(0.48 0.1 285)" },
  { title: "He Leadeth Me", author: "Walter Ciszek", status: "Available", tone: "oklch(0.55 0.08 145)" },
];

const arrivals = [
  { tag: "Magazine", title: "Cherupushpa Monthly — Nov 2026", desc: "Reflections on Advent, mission stories and new saints of the year." },
  { tag: "Archive", title: "Newsletter Archive 2015 — 2025", desc: "A decade of parish news, retreats and youth mission letters." },
  { tag: "Gallery", title: "Feast of the Little Flower", desc: "Photographs and memories from this year's annual celebration." },
];

const events = [
  { day: "12", month: "Dec", title: "Advent Reading Circle", place: "Library Hall", time: "6:30 PM" },
  { day: "18", month: "Dec", title: "Youth Book Club: Saints", place: "Room 2", time: "5:00 PM" },
  { day: "24", month: "Dec", title: "Christmas Story Hour", place: "Children's Corner", time: "4:00 PM" },
  { day: "05", month: "Jan", title: "Bible Study Series Begins", place: "Main Hall", time: "7:00 PM" },
];

const galleryTones = ["oklch(0.72 0.06 250)", "oklch(0.8 0.08 80)", "oklch(0.68 0.05 200)", "oklch(0.75 0.07 30)", "oklch(0.7 0.06 155)", "oklch(0.78 0.08 320)"];

function Home() {
  return (
    <div className="pb-8">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> A quiet home for faith & learning
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-heading sm:text-6xl lg:text-7xl">
              Cherupushpa Mission League Library
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Discover faith, knowledge and inspiration through books, magazines and resources — thoughtfully curated for every soul on the journey.
            </p>

            <form className="mt-8 flex items-center gap-2 rounded-3xl border border-border bg-card p-2 shadow-card">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-surface text-primary">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder="Search books, authors or categories…"
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-heading outline-none placeholder:text-muted-foreground"
              />
              <button type="button" className="shrink-0 rounded-2xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:shadow-lift sm:px-5">
                Search
              </button>

            </form>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Advent", "St. Thérèse", "Youth", "New arrivals"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card-soft overflow-hidden p-0">
              <img src={heroBooks} alt="Open Bible with light" width={1280} height={896} className="h-64 w-full object-cover sm:h-[380px] lg:h-[420px]" />
            </div>
            <div className="card-soft absolute -bottom-6 -left-4 hidden w-56 items-center gap-3 p-4 sm:flex">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/20 text-accent-foreground">
                <BookMarked className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">New this week</div>
                <div className="text-sm font-semibold text-heading">18 titles added</div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card-soft card-soft-hover flex items-center gap-4 p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-2xl font-semibold text-heading">{s.value}</div>
                <div className="text-xs font-medium text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Banner */}
      <section className="mx-auto mt-14 max-w-7xl sm:mt-20 px-5 sm:px-8">
        <div className="card-soft grid gap-0 overflow-hidden lg:grid-cols-[1.1fr_1fr]">
          <div className="p-8 sm:p-12">
            <span className="inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-foreground">
              Featured this month
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-heading sm:text-4xl">
              A month with the Little Flower
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              A curated collection of writings, letters and reflections by and about St. Thérèse of Lisieux — the patroness of missions.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link to="/catalogue" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:shadow-lift">
                Explore collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/events" className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-heading hover:bg-surface">
                See events
              </Link>
            </div>
          </div>
          <div className="relative h-64 lg:h-auto">
            <img src={featuredBanner} alt="Featured books" width={1280} height={640} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto mt-14 max-w-7xl sm:mt-20 px-5 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">Browse by category</h2>
            <p className="mt-2 text-sm text-muted-foreground">Find your next read — organised for easy discovery.</p>
          </div>
          <Link to="/catalogue" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <Link key={c.name} to="/catalogue" className="card-soft card-soft-hover group flex flex-col items-start gap-3 p-5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-surface text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-heading">{c.name}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{c.count}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="mx-auto mt-14 max-w-7xl sm:mt-20 px-5 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">Featured books</h2>
            <p className="mt-2 text-sm text-muted-foreground">Hand-picked reads from our librarians.</p>
          </div>
        </div>
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8">
          {featuredBooks.map((b) => (
            <article key={b.title} className="card-soft card-soft-hover w-56 shrink-0 snap-start overflow-hidden p-3 sm:w-64">
              <div className="relative h-64 overflow-hidden rounded-2xl" style={{ background: `linear-gradient(160deg, ${b.tone}, oklch(0.35 0.05 255))` }}>
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-primary-foreground">
                  <BookOpen className="h-5 w-5 opacity-70" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wide opacity-80">Spiritual Classic</div>
                    <div className="mt-1 font-display text-base font-semibold leading-tight">{b.title}</div>
                  </div>
                </div>
              </div>
              <div className="p-3 pt-4">
                <div className="text-xs text-muted-foreground">{b.author}</div>
                <div className={`mt-2 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${b.status === "Available" ? "bg-emerald-50 text-emerald-700" : b.status === "Reserved" ? "bg-amber-50 text-amber-700" : "bg-blue-50 text-blue-700"}`}>
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" /> {b.status}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Latest Arrivals / Resources */}
      <section className="mx-auto mt-14 max-w-7xl sm:mt-20 px-5 sm:px-8">
        <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">Latest arrivals & resources</h2>
        <p className="mt-2 text-sm text-muted-foreground">Fresh magazines, archived newsletters and event memories.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {arrivals.map((a, i) => (
            <article key={a.title} className="card-soft card-soft-hover flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-primary">
                  <Newspaper className="h-3 w-3" /> {a.tag}
                </span>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-heading">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              <Link to="/resources" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                Open <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto mt-14 max-w-7xl sm:mt-20 px-5 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">Upcoming events</h2>
            <p className="mt-2 text-sm text-muted-foreground">Reading circles, retreats, and youth gatherings.</p>
          </div>
          <Link to="/events" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">All events <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => (
            <article key={e.title} className="card-soft card-soft-hover p-5">
              <div className="flex items-start gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-surface">
                  <div className="text-center leading-tight">
                    <div className="font-display text-xl font-semibold text-primary">{e.day}</div>
                    <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{e.month}</div>
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-heading">{e.title}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> {e.place}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> {e.time}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Membership CTA */}
      <section className="mx-auto mt-14 max-w-7xl sm:mt-20 px-5 sm:px-8">
        <div className="card-soft relative overflow-hidden p-8 sm:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground">Membership</span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-heading sm:text-4xl">Become a member of our reading family.</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Borrow books, receive our monthly magazine, and join reading circles — all in a warm, welcoming community.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link to="/membership" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:shadow-lift">Register now</Link>
                <Link to="/contact" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-heading hover:bg-surface">
                  <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Talk to us</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "Annual", v: "₹ 300 / year" },
                { k: "Student", v: "₹ 150 / year" },
                { k: "Family", v: "₹ 500 / year" },
                { k: "Patron", v: "₹ 2,000 / yr" },
              ].map((p) => (
                <div key={p.k} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <div className="text-xs font-medium text-muted-foreground">{p.k}</div>
                  <div className="mt-1 font-display text-base font-semibold text-heading">{p.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="mx-auto mt-14 max-w-7xl sm:mt-20 px-5 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">Moments from the library</h2>
            <p className="mt-2 text-sm text-muted-foreground">A glimpse into readings, retreats and community.</p>
          </div>
          <Link to="/gallery" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">Open gallery <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {galleryTones.map((tone, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-3xl shadow-soft transition hover:shadow-lift" style={{ background: `linear-gradient(150deg, ${tone}, oklch(0.95 0.02 245))` }} />
          ))}
        </div>
      </section>
    </div>
  );
}
