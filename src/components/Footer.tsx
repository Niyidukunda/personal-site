import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <Container className="py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="inline-flex w-fit items-center" aria-label="Del IT and Web home">
              <Image
                src="/images/FullLogo_Transparent_NoBuffer.png"
                alt="Del IT and Web"
                width={150}
                height={47}
                className="h-10 w-auto sm:h-11"
              />
            </Link>
            <p className="text-xs text-slate-500">Quietly technical growth systems for modern teams.</p>
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Del IT+Web</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <Link href="/services" className="rounded-sm hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">
              Services
            </Link>
            <Link href="/work" className="rounded-sm hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">
              Work
            </Link>
            <Link href="/contact" className="rounded-sm hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}