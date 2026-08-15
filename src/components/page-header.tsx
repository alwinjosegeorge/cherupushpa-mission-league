export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-20">
      <div className="max-w-3xl">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-surface px-3.5 py-1.5 text-xs font-medium text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-heading sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>}
      </div>
    </section>
  );
}
