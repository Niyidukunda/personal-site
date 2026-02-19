import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto w-full max-w-5xl px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="text-base font-semibold tracking-tight">
            delitweb.site
          </Link>

          <nav className="flex flex-1 items-center justify-center gap-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}