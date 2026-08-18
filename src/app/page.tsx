import Image from "next/image";
import { FiBookOpen, FiGrid, FiShoppingBag, FiUploadCloud } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const buildOptions = [
  {
    title: "Websites & Online Stores",
    icon: FiShoppingBag,
    description: "Simple sites and shops made easy to use.",
  },
  {
    title: "Digital Systems & Portals",
    icon: FiGrid,
    description: "One place for forms, accounts, content, and daily work.",
  },
  {
    title: "Learning & Training Tools",
    icon: FiBookOpen,
    description: "Courses, quizzes, assessments, and admin flows.",
  },
  {
    title: "Launch & Ongoing Support",
    icon: FiUploadCloud,
    description: "Setup, guidance, fixes, and next steps.",
  },
] as const;

const selectedWork = [
  {
    title: "AI-Assisted Assessment Platform",
    description: "Submissions, review, scoring, and follow-up in one place.",
  },
  {
    title: "Premium E-commerce Storefront",
    description: "A clean mobile shopping experience.",
  },
  {
    title: "SMME Support & Compliance Ecosystem",
    description: "Compliance, documents, and business support made easier.",
  },
] as const;

const workingStyle = ["Clear scope", "Simple updates", "Launch support"] as const;

export default function HomePage() {
  return (
    <div className="bg-white">
      <Section
        contained={false}
        className="relative overflow-hidden border-b border-slate-200 bg-[#fbfcfb] py-0"
      >
        <div className="absolute inset-y-0 right-0 hidden w-[62%] lg:block">
          <div
            aria-hidden="true"
            className="absolute inset-y-14 right-0 w-[58%] bg-[radial-gradient(ellipse_at_72%_50%,rgba(16,185,129,0.08)_0%,rgba(241,245,249,0.62)_38%,rgba(251,252,251,0)_72%)]"
          />
          <div className="absolute inset-y-6 right-[3%] w-[34rem] max-w-[72%]">
            <Image
              src="/images/about/about-alt-1-compressed.jpg"
              alt="Portrait of Fidel Niyidukunda"
              fill
              priority
              sizes="34rem"
              className="scale-[1.08] object-contain object-center opacity-90 [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.08)_10%,rgba(0,0,0,0.42)_24%,rgba(0,0,0,0.82)_40%,black_58%,black_84%,rgba(0,0,0,0.46)_94%,transparent_100%)]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,#fbfcfb_0%,rgba(251,252,251,0.99)_18%,rgba(251,252,251,0.9)_31%,rgba(251,252,251,0.58)_43%,rgba(251,252,251,0.2)_56%,rgba(251,252,251,0.04)_70%,transparent_88%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,252,251,0.32)_0%,rgba(251,252,251,0)_30%,rgba(251,252,251,0.14)_100%)]"
          />
        </div>

        <Container className="relative z-10 max-w-6xl">
          <div className="grid min-h-[580px] items-center gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)]">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                Clean solutions. Real impact.
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.02]">
                Build websites, stores, and digital systems.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                For individuals, small businesses, and education teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/work"
                  variant="primary"
                  className="border-emerald-900 bg-emerald-900 px-6 py-3 text-white hover:bg-emerald-800"
                  analyticsEventName="cta_click"
                  analyticsParams={{ location: "hero", label: "work" }}
                >
                  View Work
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  className="px-6 py-3"
                  analyticsEventName="cta_click"
                  analyticsParams={{ location: "hero", label: "contact" }}
                >
                  Start a Project
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
                {["Personal guidance", "Clear communication", "Reliable support"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="grid h-5 w-5 place-items-center rounded-full border border-emerald-700/40 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-800 before:content-['']"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:hidden">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <Image
                  src="/images/about/about-alt-1-compressed.jpg"
                  alt="Portrait of Fidel Niyidukunda"
                  fill
                  priority
                  sizes="88vw"
                  className="object-cover object-[center_28%]"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            What can be built
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-10 bg-emerald-800" />
          <p className="mt-5 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
            Clean digital work for useful outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {buildOptions.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="text-center md:text-left">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg border border-emerald-800/25 text-emerald-800 md:mx-0">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border border-emerald-900/10 bg-[#f8fbf8] p-5 md:flex md:items-center md:justify-between md:gap-6">
          <p className="text-lg font-semibold tracking-tight text-slate-950">
            Have an idea? Send a project note.
          </p>
          <Button
            href="/contact"
            variant="primary"
            className="mt-5 border-emerald-900 bg-emerald-900 text-white hover:bg-emerald-800 md:mt-0"
            analyticsEventName="cta_click"
            analyticsParams={{ location: "build_section", label: "contact" }}
          >
            Send a Project Note
          </Button>
        </div>
      </Section>

      <Section
        className="border-b border-slate-200 bg-slate-50/60"
        title="Selected work"
        description="A few examples. More on the Work page."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {selectedWork.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold tracking-tight text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
        <Button href="/work" variant="secondary" className="mt-8">
          View Work
        </Button>
      </Section>

      <Section className="border-b border-slate-200 bg-white">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Simple to work with.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
              Calm, clear, and practical from first note to launch.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {workingStyle.map((item) => (
              <div key={item} className="border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section contained={false} className="bg-slate-950 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Have an idea?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Send a short project note.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "final_cta", label: "contact" }}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
