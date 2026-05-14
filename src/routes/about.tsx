import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import youngPilot from "@/assets/young-pilot.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Altitude One" },
      { name: "description", content: "Altitude One was founded to honor the legacy of pilots who came before, and lift the next generation into the sky." },
      { property: "og:title", content: "About Altitude One" },
      { property: "og:description", content: "An aircraft brokerage with a purpose." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our story</span>
          <h1 className="mt-4 font-display text-5xl font-medium leading-tight md:text-6xl text-balance">
            Founded on the runway between <em className="text-horizon not-italic">grief</em> and <em className="font-light italic">first flight.</em>
          </h1>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>
              Altitude One began with a phone call. A widow in Montana didn't know what to do
              with her late husband's Cessna. A flight student in Oregon couldn't afford the
              one he'd been training in. We helped them meet.
            </p>
            <p>
              That single transaction taught us something: the general aviation community is
              one of the warmest in the world, but it's getting older every year. The cost of
              entry keeps would-be aviators on the ground. Meanwhile, beautiful aircraft sit
              dormant in hangars across the country, waiting.
            </p>
            <p>
              We exist to bridge that gap — with patience for families, transparency in
              pricing, and a deep respect for everyone who has ever loved to fly.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <img src={youngPilot} alt="Young pilot in cockpit" loading="lazy" width={1080} height={1600}
            className="aspect-[3/4] w-full rounded-sm object-cover shadow-soft" />
        </div>
      </section>

      <section className="bg-twilight text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="font-display text-3xl font-medium md:text-4xl">By the numbers</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-4">
            {[
              { n: "127", l: "Aircraft re-homed" },
              { n: "31%", l: "Average savings vs. market" },
              { n: "$2.4M", l: "Returned to families" },
              { n: "94", l: "First-time pilot owners" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-6xl text-horizon">{s.n}</div>
                <div className="mt-3 text-sm uppercase tracking-widest text-cream/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
