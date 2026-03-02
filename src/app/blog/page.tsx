import Link from "next/link";
import Section from "@/components/ui/Section";

export default function BlogPage() {
  return (
    <Section className="pt-4 md:pt-8">
      <div className="ds-gap max-w-3xl">
        <h1 className="ds-h1">Blog</h1>
        <p className="ds-body">Blog content will be published soon.</p>
        <Link
          href="/"
          className="inline-flex text-sm font-medium text-slate-900 underline underline-offset-4"
        >
          Back to home
        </Link>
      </div>
    </Section>
  );
}
