import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "Inventory" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  return (
    <header
      className={
        transparent
          ? "absolute inset-x-0 top-0 z-30 text-cream"
          : "sticky top-0 z-30 border-b border-border bg-background/85 text-foreground backdrop-blur"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight">Altitude</span>
          <span className="font-display text-2xl italic text-horizon">One</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="opacity-80 transition hover:opacity-100"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "opacity-100 font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/inventory"
          className="hidden rounded-full bg-horizon px-5 py-2 text-sm font-medium text-twilight transition hover:brightness-105 md:inline-flex"
        >
          Browse aircraft
        </Link>
      </div>
    </header>
  );
}
