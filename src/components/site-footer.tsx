import { Link } from "@tanstack/react-router";
import { BookOpen, Mail, MapPin, Phone, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </span>
              <span className="font-display text-base font-semibold text-heading">Cherupushpa Library</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A quiet place for faith, learning and reflection — serving the Mission League community.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-2xl bg-card text-muted-foreground shadow-soft transition hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-heading">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {[["/catalogue","Catalogue"],["/resources","Resources"],["/events","Events"],["/gallery","Gallery"]].map(([to,l]) => (
                <li key={to}><Link to={to} className="hover:text-primary">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-heading">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>CML Centre, Thrissur, Kerala 680001</span></li>
              <li className="flex gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>library@cherupushpa.org</span></li>
              <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>+91 487 000 0000</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-heading">Opening Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><div><div className="text-heading">Mon – Sat</div><div>9:00 AM — 7:00 PM</div></div></li>
              <li className="flex items-start gap-2.5 pl-6.5"><div><div className="text-heading">Sunday</div><div>After Holy Mass</div></div></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Cherupushpa Mission League. All rights reserved.</p>
          <p>Made with grace and care.</p>
        </div>
      </div>
    </footer>
  );
}
