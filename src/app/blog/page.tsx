import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="text-slate-600">Blog content will be published soon.</p>
      <Link href="/" className="text-sm font-medium text-slate-900 underline">
        Back to home
      </Link>
    </div>
  );
}
