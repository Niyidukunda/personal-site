"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="h-0.5 bg-slate-900" aria-hidden="true" />
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-base font-semibold tracking-tight">
            delitweb.site
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-5 text-sm md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "transition-colors",
                    active ? "font-semibold text-slate-900" : "text-slate-600 hover:text-slate-900",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              href="/contact"
              variant="secondary"
              className="border-slate-900 bg-slate-900 text-slate-50 transition-colors hover:border-slate-300 hover:bg-white hover:text-slate-900"
            >
              Book a consult
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-900 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen ? (
          <div id="mobile-nav" className="mt-4 space-y-2 border-t border-slate-200 pt-4 md:hidden">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "block rounded-md px-2 py-2 text-sm transition-colors",
                    active
                      ? "bg-slate-100 font-semibold text-slate-900"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-2" onClick={() => setMenuOpen(false)}>
              <Button
                href="/contact"
                variant="secondary"
                className="w-full border-slate-900 bg-slate-900 text-slate-50 transition-colors hover:border-slate-300 hover:bg-white hover:text-slate-900"
              >
                Book a consult
              </Button>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
