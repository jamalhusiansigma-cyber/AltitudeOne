import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { inventory } from "@/data/inventory";
import heroSky from "@/assets/hero-sky.jpg";
import youngPilot from "@/assets/young-pilot.jpg";
import planeReflective from "@/assets/plane-reflective.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Altitude One — Aircraft with a legacy, priced for first-time pilots" },
      { name: "description", content: "Altitude One acquires aircraft from the estates of late pilots and passes them on, at honest prices, to a new generation of aviators." },
      { property: "og:title", content: "Altitude One — Where legacies take flight" },
      { property: "og:description", content: "Aircraft with a legacy, priced for first-time pilots." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative isolate min-h-[92vh] overflow-hidden text-cream">
        <img
          src={heroSky}
          alt="Single propeller airplane silhouetted against a twilight sky"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-twilight/70 via-twilight/40 to-twilight/85" />
        <SiteHeader transparent />
        <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 pb-24 pt-28">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-horizon">
            Aircraft brokerage with a purpose
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-balance md:text-7xl lg:text-8xl">
            Where a pilot's <em className="text-horizon not-italic">legacy</em><br />
            becomes another's <em className="font-light italic">first flight.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-cream/80">
            Altitude One acquires aircraft from the estates of late aviators and passes them
            on, honestly and affordably, to the next generation taking the controls.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/inventory"
              className="rounded-full bg-horizon px-7 py-3.5 text-sm font-medium text-twilight shadow-glow transition hover:brightness-110"
            >
              See available aircraft
            </Link>
            <a
              href="tel:+18019174049"
              className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur transition hover:bg-cream/10"
            >
              Call (801) 917-4049
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-cream/60">
          Scroll
        </div>
      </section>

      {/* REFLECTIVE SHOWCASE */}
      <section className="relative overflow-hidden bg-black text-cream">
        <img
          src={planeReflective}
          alt="A small propeller airplane in silhouette on a glossy reflective black floor"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-[70vh] w-full object-cover md:h-[85vh]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-horizon">In memoriam</span>
            <blockquote className="mt-6 font-display text-3xl font-light italic leading-tight text-cream md:text-5xl text-balance">
              "What we do for ourselves dies with us. What we do for others endures."
            </blockquote>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our mission</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl text-balance">
              Every aircraft has a soul. We make sure it keeps flying.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              When a pilot passes away, their aircraft often sits idle — too expensive for a
              grieving family to keep, too valuable to give away. We step in with care,
              purchase the aircraft fairly, and find it a new home with a young pilot who
              could never afford one otherwise.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              The result is simple: families honor a memory, and new aviators get their wings.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 bg-horizon-gradient opacity-25 blur-3xl" />
            <img
              src={youngPilot}
              alt="A young pilot smiling in the cockpit of a small aircraft at golden hour"
              width={1080}
              height={1600}
              loading="lazy"
              className="aspect-[3/4] w-full rounded-sm object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-twilight-gradient text-cream">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-horizon">How it works</span>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl text-balance">
                A respectful process from first call to first flight.
              </h2>
            </div>
            <p className="max-w-sm text-cream/70">
              We've structured every step around two things: dignity for the family, and
              accessibility for the new pilot.
            </p>
          </div>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-sm bg-cream/10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "We listen first",
                d: "Our team reaches out gently, often through obituary notices, only when families are ready. No pressure, no cold sales pitch.",
              },
              {
                n: "02",
                t: "Honest valuation",
                d: "Certified appraisers evaluate the aircraft. Families receive a fair, transparent offer — usually within 14 days.",
              },
              {
                n: "03",
                t: "A new chapter takes off",
                d: "We perform a full inspection, then sell the aircraft to a vetted young pilot at 25–35% below market.",
              },
            ].map((s) => (
              <li key={s.n} className="bg-twilight p-10">
                <div className="font-display text-5xl text-horizon">{s.n}</div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INVENTORY PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Currently flying out</span>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">In the hangar</h2>
          </div>
          <Link to="/inventory" className="hidden text-sm font-medium text-twilight underline underline-offset-4 hover:text-horizon md:inline">
            View all aircraft →
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {inventory.map((a) => (
            <article key={a.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                <img
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[10px] uppercase tracking-widest text-twilight">
                  {a.year}
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl">{a.name}</h3>
                <span className="font-display text-xl text-twilight">${a.ourPrice.toLocaleString()}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {a.hours.toLocaleString()} hrs · {a.location}
              </p>
              <p className="mt-3 text-sm italic text-muted-foreground">"{a.story}"</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-sm bg-twilight px-10 py-20 text-center text-cream shadow-soft">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-horizon/40 blur-3xl animate-drift" />
          <h2 className="font-display text-4xl font-medium md:text-5xl text-balance">
            Ready to inherit the sky?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/75">
            Whether you're settling an estate or chasing your private pilot's license, we'd be
            honored to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/inventory" className="rounded-full bg-horizon px-7 py-3.5 text-sm font-medium text-twilight transition hover:brightness-110">
              Browse the hangar
            </Link>
            <a href="tel:+18019174049" className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition hover:bg-cream/10">
              Call (801) 917-4049
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
