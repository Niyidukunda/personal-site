import Image from "next/image";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Recent client-safe work across websites, platforms, learning workflows, smoother launches, and practical digital systems.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Del IT+Web",
    description:
      "Recent project stories showing how messy processes became clearer, easier-to-manage digital systems.",
    url: "/work",
  },
};

const workStories = [
  {
    id: "compliance",
    title: "Compliance & Scoring Platform",
    summary:
      "A private system that brought intake, review, scoring, and reporting into a clearer working flow.",
    problem:
      "The team needed one place to manage sensitive review work instead of relying on scattered steps and manual tracking.",
    helped:
      "I helped shape the user flows, build the main interface, connect the supporting services, and prepare the system for a smoother launch.",
    changed:
      "The work became easier to follow: users could move through clearer steps, admins had a more structured view, and the setup was easier to support after launch.",
    shows:
      "This shows how I can turn a complex private process into a practical digital system without exposing sensitive project details.",
    tools: ["Next.js", "NestJS", "FastAPI", "Keycloak", "Docker", "AWS", "GitHub Actions"],
    image: {
      src: "/images/work/wave-stats-obscured.png",
      alt: "Obscured dashboard from a compliance and scoring platform",
      caption:
        "Sensitive names and data are hidden. The image is included to show the dashboard-style structure and reporting flow.",
    },
    privacy:
      "Client and project details are anonymized, and private data has been removed or obscured.",
  },
  {
    id: "business-website",
    title: "Design-Led Business Website",
    summary:
      "A polished business website built to feel clear, visual, and easy for potential clients to browse.",
    problem:
      "The business needed a refined online presence that could present its work clearly without feeling cluttered or difficult to navigate.",
    helped:
      "I helped translate the design direction into responsive pages, clean sections, careful image handling, and a reliable launch setup.",
    changed:
      "The site became easier to browse across devices, with a clearer structure for visitors and a simpler foundation for future updates.",
    shows:
      "This shows how I can build premium client-facing websites that balance visual polish with practical setup.",
    tools: ["Next.js", "React", "Tailwind CSS", "Vercel", "SEO structure"],
    image: {
      src: "/images/work/velvet-room-site-obscured.png",
      alt: "Obscured screenshot of a design-led business website",
      caption:
        "Brand-sensitive details are softened. The image demonstrates layout, visual direction, and responsive page structure.",
    },
    privacy:
      "The screenshot is intentionally obscured where needed and does not imply public client endorsement.",
  },
  {
    id: "learning-platform",
    title: "Online Learning Platform",
    summary:
      "A learning system organized around course content, learner progress, and admin support.",
    problem:
      "The education workflow needed a clearer way to manage learning content, learner progress, and admin tasks in one place.",
    helped:
      "I helped structure the course areas, organize content, support learner/admin flows, and prepare guidance for day-to-day use.",
    changed:
      "The programme became easier to manage, with clearer paths for learners and a more practical admin experience behind the scenes.",
    shows:
      "This shows how I can support education teams with digital learning systems that are useful beyond the first launch.",
    tools: ["WordPress", "Tutor LMS", "Role flows", "Content structure", "Admin support"],
    image: {
      src: "/images/about/tutor-lms-backend.png",
      alt: "Backend view from an online learning platform",
      caption:
        "Private learner and client details should stay hidden. The image is useful only where admin structure remains visible.",
    },
    privacy:
      "Public wording stays broad and avoids exposing private learner, curriculum, or client details.",
  },
  {
    id: "deployment-workflow",
    title: "Launch & Infrastructure Workflow",
    summary:
      "A cleaner path for getting a multi-part system from build to live use with clearer setup and support notes.",
    problem:
      "The project needed a more dependable launch path, with less uncertainty around hosting, routing, release steps, and future support.",
    helped:
      "I helped improve the hosting setup, release flow, routing, configuration approach, and operating notes.",
    changed:
      "The system became easier to launch, easier to explain, and easier to support after changes were made.",
    shows:
      "This shows how I can help when a digital project needs both the build and the launch details handled carefully.",
    tools: ["Docker Compose", "EC2", "Nginx", "GitHub Actions", "Setup notes"],
    image: {
      src: "/images/about/key-cloak-admin.png",
      alt: "Administrative setup screen with sensitive details hidden",
      caption:
        "Sensitive access details must stay hidden. Use only cropped or blurred views that show setup structure without exposing users or secrets.",
    },
    privacy:
      "Infrastructure and access details are described at a safe level and screenshots avoid secret, user, or client exposure.",
  },
  {
    id: "assessment-workflow",
    title: "AI-Assisted Assessment Workflow",
    summary:
      "A private workflow exploration for making review and assessment support easier to manage.",
    problem:
      "Education and project teams can spend too much time on repeated review tasks without enough structure around feedback and oversight.",
    helped:
      "I helped think through safer review flows, rubric structure, practical feedback loops, and where human checking should stay central.",
    changed:
      "The work created a clearer direction for assisted review without presenting private implementation details publicly.",
    shows:
      "This shows the kind of early-stage thinking I can bring when a team needs a practical digital workflow before a full build.",
    tools: ["Workflow design", "Rubric structure", "Review support", "Human-in-the-loop checks"],
    privacy:
      "This remains a placeholder project story until details are safe to describe publicly.",
  },
] as const;

export default function WorkPage() {
  return (
    <div>
      <Section className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(180deg,#f8fcfa_0%,#f6fbf9_52%,#fbfdfc_100%)] pt-6 md:pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(46%_48%_at_8%_0%,rgba(34,197,94,0.11),transparent_74%)]"
        />
        <div className="relative ds-gap max-w-3xl">
          <h1 className="ds-h1">Work</h1>
          <p className="ds-body">
            Recent client-safe examples of messy processes becoming clearer websites,
            platforms, learning systems, and launch-ready setups.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-200/85 pt-6">
            {workStories.map((story) => (
              <a
                key={story.id}
                href={`#${story.id}`}
                className="group relative inline-flex text-sm font-medium tracking-[0.02em] text-slate-600 transition-colors hover:text-slate-900 focus-visible:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100"
              >
                {story.title}
              </a>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="border-t border-slate-200/85 divide-y divide-slate-200/75">
          {workStories.map((story) => (
            <article id={story.id} key={story.id} className="relative scroll-mt-24 py-12 md:py-14">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <h2 className="ds-h2">{story.title}</h2>
                  <p className="mt-3 ds-body">{story.summary}</p>
                  <div className="mt-7 border-t border-slate-200 pt-5">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
                      Tools involved
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {story.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-7 lg:border-l lg:border-slate-200/60 lg:pl-8">
                  {"image" in story && story.image ? (
                    <figure className="overflow-hidden rounded-lg border border-neutral-200/70 bg-white p-2 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                      <div className="overflow-hidden rounded-md border border-neutral-200/70 bg-white">
                        <Image
                          src={story.image.src}
                          alt={story.image.alt}
                          width={1600}
                          height={900}
                          sizes="(min-width: 1024px) 42vw, 92vw"
                          className="h-[240px] w-full object-cover object-top opacity-85 md:h-[280px] lg:h-[300px]"
                        />
                      </div>
                      <figcaption className="px-1 pt-3 text-xs leading-5 text-slate-500">
                        {story.image.caption}
                      </figcaption>
                    </figure>
                  ) : null}

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                      The problem
                    </h3>
                    <p className="mt-3 ds-body">{story.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                      What I helped with
                    </h3>
                    <p className="mt-3 ds-body">{story.helped}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                      What changed
                    </h3>
                    <p className="mt-3 ds-body">{story.changed}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                      What this shows
                    </h3>
                    <p className="mt-3 ds-body">{story.shows}</p>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-xs leading-5 text-slate-500">
                      <span className="font-semibold text-slate-700">Privacy note:</span>{" "}
                      {story.privacy}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section contained={false} className="relative overflow-hidden border-t border-emerald-200/35 bg-[linear-gradient(180deg,#0f172a_0%,#11201d_100%)] py-16 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(42%_56%_at_18%_12%,rgba(34,197,94,0.14),transparent_72%)]"
        />
        <Container>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Have a process that needs to become easier to manage?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Send a short project note and we can shape a clear next step.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/contact"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "work_cta", label: "contact" }}
              >
                Send a Project Note
              </Button>
              <Button
                href="/capabilities"
                variant="secondary"
                className="border-slate-300 bg-transparent text-slate-100 transition-colors hover:bg-slate-800/20 hover:text-white"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "work_cta", label: "capabilities" }}
              >
                See How I Can Help
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
