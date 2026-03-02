import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <Container className="py-8">
        <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Del IT+Web</p>
          <div className="flex items-center gap-4">
            <Link href="/services" className="hover:text-slate-800">
              Services
            </Link>
            <Link href="/work" className="hover:text-slate-800">
              Work
            </Link>
            <Link href="/contact" className="hover:text-slate-800">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}