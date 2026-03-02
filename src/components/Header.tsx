import Link from "next/link";
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
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-base font-semibold tracking-tight">
            delitweb.site
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-5 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </Container>
    </header>
  );
}