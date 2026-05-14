import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-twilight-gradient text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-semibold">Altitude</span>
            <span className="font-display text-3xl italic text-horizon">One</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-cream/75">
            Honoring the legacy of pilots who came before. Lifting the next generation into the sky.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-horizon">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/inventory" className="hover:text-cream">Inventory</Link></li>
            <li><Link to="/about" className="hover:text-cream">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-horizon">Reach us</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>(801) 917-4049</li>
            <li>Find our listings on Barnstormers & Facebook</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-cream/60 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Altitude One Aviation Co.</span>
          <span className="italic">"What we do for ourselves dies with us. What we do for others endures."</span>
        </div>
      </div>
    </footer>
  );
}
