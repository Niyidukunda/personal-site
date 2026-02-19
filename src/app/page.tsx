import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">Del IT+Web</h1>
        <p className="text-slate-600">
          We build and maintain reliable websites and web applications.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Contact
        </Link>
        <Link
          href="/services"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          View services
        </Link>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">What we do</h2>
        <p className="text-slate-600">
          Web development, site maintenance, and practical technical support.
        </p>
      </div>
    </div>
  );
}
