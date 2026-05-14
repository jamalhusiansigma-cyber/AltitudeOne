import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { inventory } from "@/data/inventory";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory — Altitude One" },
      { name: "description", content: "Browse aircraft from estate acquisitions, priced 25–35% below market for first-time pilots." },
      { property: "og:title", content: "Inventory — Altitude One" },
      { property: "og:description", content: "Aircraft priced for the next generation of pilots." },
    ],
  }),
  component: InventoryPage,
});

function InventoryPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">In the hangar</span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-tight md:text-6xl text-balance">
            Aircraft with stories. Priced for new chapters.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Each aircraft has been independently appraised, fully inspected, and is offered
            below typical market value. Ask us about financing for first-time buyers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {inventory.map((a) => {
            const savings = Math.round(((a.marketPrice - a.ourPrice) / a.marketPrice) * 100);
            return (
              <article key={a.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <img src={a.image} alt={a.name} loading="lazy" width={1280} height={960}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute right-4 top-4 rounded-full bg-horizon px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-twilight">
                    Save {savings}%
                  </span>
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <h2 className="font-display text-2xl">{a.name}</h2>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{a.year}</span>
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-display text-3xl text-twilight">${a.ourPrice.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">${a.marketPrice.toLocaleString()}</span>
                </div>
                <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-border pt-4 text-sm">
                  <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Total time</dt><dd className="mt-1">{a.hours.toLocaleString()} hrs</dd></div>
                  <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Location</dt><dd className="mt-1">{a.location}</dd></div>
                  <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Status</dt><dd className="mt-1">Available</dd></div>
                </dl>
                <p className="mt-5 italic text-muted-foreground">"{a.story}"</p>
              </article>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
