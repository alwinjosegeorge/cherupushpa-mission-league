import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { BookOpen, Search, X, CheckCircle, Calendar, User, Hash } from "lucide-react";
import { useState } from "react";
import libraryReservation from "@/assets/library-reservation.jpg";

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
  category: [
    "Bible Studies",
    "Saints",
    "Spirituality",
    "Spirituality",
    "Spirituality",
    "Spirituality",
    "Missionary",
    "Spirituality",
    "Spirituality",
    "Youth",
    "Youth",
    "Saints",
    "Missionary",
    "Missionary",
    "Saints"
  ][i],
  status: i % 3 === 0 ? "Reserved" : "Available",
  tone: `oklch(0.55 0.09 ${(i * 47) % 360})`,
}));

function Catalogue() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBook, setSelectedBook] = useState<typeof books[number] | null>(null);
  
  // Form states
  const [memberName, setMemberName] = useState("");
  const [memberId, setMemberId] = useState("");
  const [reserveDate, setReserveDate] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const filteredBooks = books.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenModal = (book: typeof books[number]) => {
    setSelectedBook(book);
    setIsSuccess(false);
    setMemberName("");
    setMemberId("");
    setReserveDate("");
  };

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (memberName && memberId && reserveDate) {
      setIsSuccess(true);
      // Update local book status for demo purpose
      if (selectedBook) {
        selectedBook.status = "Reserved";
      }
    }
  };

  return (
    <div className="pb-8">
      <PageHeader eyebrow="Catalogue" title="Every book in our library." description="Search and explore titles across every category — updated weekly." />
      <section className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
        <div className="flex items-center gap-2 rounded-3xl border border-border bg-card p-2 shadow-card">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-surface text-primary"><Search className="h-5 w-5" /></div>
          <input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-muted-foreground" 
            placeholder="Search titles or authors…" 
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button 
              key={c} 
              onClick={() => setSelectedCategory(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${selectedCategory === c ? "bg-primary text-primary-foreground shadow-soft" : "border border-border bg-card text-muted-foreground hover:text-heading"}`}
            >
              {c}
            </button>
          ))}
        </div>
        
        {filteredBooks.length === 0 ? (
          <div className="mt-16 text-center text-muted-foreground">
            No books found matching your criteria.
          </div>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredBooks.map((b) => (
              <article 
                key={b.title} 
                onClick={() => handleOpenModal(b)}
                className="card-soft card-soft-hover overflow-hidden p-3 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden rounded-2xl" style={{ background: `linear-gradient(160deg, ${b.tone}, oklch(0.35 0.05 255))` }}>
                  <div className="absolute inset-0 flex flex-col justify-between p-4 text-primary-foreground">
                    <div className="flex justify-between items-start">
                      <BookOpen className="h-5 w-5 opacity-70" />
                      <span className="text-[10px] uppercase font-semibold bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full">{b.category}</span>
                    </div>
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
        )}
      </section>

      {/* Reservation Details Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-background/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-[1.1fr_1fr] max-h-[90vh]">
            
            {/* Left side: Book banner & Info */}
            <div className="relative flex flex-col justify-between p-8 text-primary-foreground min-h-[300px] md:min-h-full">
              <div className="absolute inset-0 z-0">
                <img src={libraryReservation} alt="Library Interior" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/30" />
              </div>
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {selectedBook.category}
                </span>
                <h3 className="mt-4 font-display text-3xl font-bold leading-tight">{selectedBook.title}</h3>
                <p className="mt-2 text-sm text-white/80">by {selectedBook.author}</p>
              </div>

              <div className="relative z-10 mt-8">
                <div className="text-xs text-white/60 uppercase tracking-wider">Availability Status</div>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${selectedBook.status === "Available" ? "bg-emerald-400" : "bg-amber-400"}`} />
                  <span className="text-sm font-semibold">{selectedBook.status}</span>
                </div>
              </div>
            </div>

            {/* Right side: Form / Success state */}
            <div className="p-8 flex flex-col justify-center bg-card relative">
              <button 
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface text-muted-foreground hover:text-heading transition"
              >
                <X className="h-5 w-5" />
              </button>

              {isSuccess ? (
                <div className="text-center py-6 animate-in zoom-in-95 duration-200">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-heading">Reservation Confirmed!</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Thank you <strong>{memberName}</strong>. Your request for <strong>"{selectedBook.title}"</strong> has been processed successfully.
                  </p>
                  <div className="mt-6 p-4 rounded-2xl bg-surface/50 border border-border/40 text-left text-xs text-muted-foreground space-y-1.5">
                    <div><strong>Member ID:</strong> {memberId}</div>
                    <div><strong>Pickup Date:</strong> {reserveDate}</div>
                    <div>Please collect the book from the front counter within 3 days.</div>
                  </div>
                  <button 
                    onClick={() => setSelectedBook(null)}
                    className="mt-6 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-lift transition"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in duration-200">
                  <h4 className="font-display text-xl font-bold text-heading">Reserve this Book</h4>
                  <p className="mt-1 text-xs text-muted-foreground">Submit this reservation form to secure your copy.</p>
                  
                  {selectedBook.status === "Reserved" ? (
                    <div className="mt-6 p-5 rounded-2xl bg-amber-50/50 border border-amber-200 text-amber-800 text-sm">
                      <strong>Currently Reserved:</strong> This book is already reserved by another member. You can check back in later or ask at the front desk.
                    </div>
                  ) : (
                    <form onSubmit={handleReserveSubmit} className="mt-6 space-y-4">
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Member Name</label>
                        <div className="mt-1.5 relative flex items-center">
                          <User className="absolute left-3 h-4 w-4 text-muted-foreground/70" />
                          <input 
                            required
                            type="text" 
                            value={memberName}
                            onChange={(e) => setMemberName(e.target.value)}
                            placeholder="Alwin Jose George"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-border bg-transparent text-sm focus:border-primary focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Member ID</label>
                        <div className="mt-1.5 relative flex items-center">
                          <Hash className="absolute left-3 h-4 w-4 text-muted-foreground/70" />
                          <input 
                            required
                            type="text" 
                            value={memberId}
                            onChange={(e) => setMemberId(e.target.value)}
                            placeholder="CML-2026-45"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-border bg-transparent text-sm focus:border-primary focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Reservation Pickup Date</label>
                        <div className="mt-1.5 relative flex items-center">
                          <Calendar className="absolute left-3 h-4 w-4 text-muted-foreground/70" />
                          <input 
                            required
                            type="date" 
                            value={reserveDate}
                            onChange={(e) => setReserveDate(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-border bg-transparent text-sm focus:border-primary focus:outline-none text-muted-foreground"
                          />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="mt-2 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-lift transition"
                      >
                        Confirm Reservation
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
