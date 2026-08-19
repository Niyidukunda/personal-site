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
        className="relative overflow-hidden border-b border-[#cfe8e2]/80 bg-[#f2fbf8] py-0 text-[#080d22]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,97,87,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,97,87,0.055)_1px,transparent_1px)] bg-[size:40px_40px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(167,239,219,0.42),transparent_32%),radial-gradient(circle_at_100%_0%,rgba(188,244,241,0.18),transparent_36%),linear-gradient(90deg,rgba(242,251,248,0.92)_0%,rgba(248,253,251,0.9)_48%,rgba(247,251,248,0.78)_100%)]"
        />
        <div className="absolute inset-y-0 right-0 hidden w-[66%] lg:block">
          <div
            aria-hidden="true"
            className="absolute inset-y-14 right-0 w-[62%] bg-[radial-gradient(ellipse_at_70%_50%,rgba(20,184,166,0.06)_0%,rgba(235,249,246,0.34)_40%,rgba(242,251,248,0)_74%)]"
          />
          <div className="absolute inset-y-6 right-0 w-[39rem] max-w-[84%]">
            <Image
              src="/images/about/about-alt-1-compressed.jpg"
              alt="Portrait of Fidel Niyidukunda"
              fill
              priority
              sizes="34rem"
              className="scale-[1.08] object-contain object-right opacity-90 [mask-image:linear-gradient(90deg,transparent_0%,transparent_28%,rgba(0,0,0,0.04)_40%,rgba(0,0,0,0.18)_50%,rgba(0,0,0,0.58)_62%,rgba(0,0,0,0.9)_72%,black_82%,rgba(0,0,0,0.72)_90%,rgba(0,0,0,0.18)_97%,transparent_100%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-[62%] bg-[linear-gradient(90deg,#f5fbf8_0%,rgba(245,251,248,0.98)_34%,rgba(245,251,248,0.74)_54%,rgba(245,251,248,0.28)_76%,rgba(245,251,248,0)_100%)]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,251,248,0)_0%,rgba(242,251,248,0)_20%,rgba(242,251,248,0.18)_36%,rgba(242,251,248,0.08)_52%,rgba(242,251,248,0)_70%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,251,248,0.24)_0%,rgba(242,251,248,0)_30%,rgba(242,251,248,0.14)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-[18%] bg-[linear-gradient(90deg,rgba(247,251,248,0)_0%,rgba(247,251,248,0.28)_62%,rgba(248,251,248,0.72)_100%)]"
          />
        </div>

        <Container className="relative z-10 max-w-6xl">
          <div className="grid min-h-[485px] items-center gap-10 py-10 md:py-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#bde7df] bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#005f50] shadow-[0_8px_20px_rgba(15,97,87,0.08)] backdrop-blur">
                <Image
                  src="/images/icononly.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-4 w-auto"
                />
                <span>Del IT+Web</span>
              </div>
              <h1 className="mt-7 text-4xl font-semibold tracking-tight text-[#080d22] md:text-6xl md:leading-[1.02]">
                Build websites, online stores, and digital systems.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#18324f] md:text-lg md:leading-8">
                For professionals, businesses, and learning programmes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/work"
                  variant="primary"
                  className="border-[#071028] bg-[#071028] px-6 py-3 text-white hover:bg-[#111b34]"
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
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#18324f]">
                {["Personal guidance", "Clear communication", "Reliable support"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="grid h-5 w-5 place-items-center rounded-full border border-[#00856f]/35 bg-white/55 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#006b5a] before:content-['']"
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
            Online tools that fit your work
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-10 bg-emerald-800" />
          <p className="mt-5 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
            Clear, practical ways to bring your work online, support your clients, and manage the next step.
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
