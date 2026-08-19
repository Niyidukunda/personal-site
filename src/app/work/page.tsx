import Image from "next/image";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Recent websites, stores, learning support, and business systems by Del IT+Web.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Del IT+Web",
    description:
      "A calm look at recent projects for professionals, businesses, and learning programmes.",
    url: "/work",
  },
};

const workStories = [
  {
    id: "assessment-platform",
    title: "Assessment & Review Platform",
    category: "Learning workflow",
    lead: "Automatic grading, quick results, and clearer feedback for learning activities.",
    need: "Learner activities needed faster marking, clearer results, and less manual work for teachers and assessors.",
    built:
      "A grading workspace that returns results and keeps feedback visible for learners, teachers, assessors, and management.",
    result: "Less manual marking. Faster feedback. Easier oversight.",
    tools: ["Automatic grading", "Feedback flow", "Results dashboard"],
    images: [
      {
        src: "/images/proof/assessment-student-workspace.png",
        alt: "Student workspace for assessments with learner details hidden",
        caption:
          "Student workspace with the learner name and student number hidden.",
      },
    ],
  },
  {
    id: "online-store",
    title: "Premium Online Store",
    category: "E-commerce",
    lead: "A polished online experience for browsing, ordering, and delivery.",
    need: "The store needed to feel clear, refined, and easy for customers to use.",
    built: "A cleaner purchase flow with product details, delivery costs, and order totals.",
    result: "Simple browsing. Clear pricing. A more confident customer journey.",
    tools: ["Store setup", "Cart design", "Order flow"],
    images: [
      {
        src: "/images/proof/ecommerce-cart-laptop-cutout.png",
        alt: "Online store cart page shown on a laptop",
        caption:
          "Online store cart view with products, delivery, and order total.",
      },
    ],
  },
  {
    id: "business-support",
    title: "Business Support Portal",
    category: "Small business system",
    lead: "Documents, compliance steps, and support activity organized in one practical place.",
    need: "Small business support work can become hard to manage when forms, documents, checks, and updates sit in separate places.",
    built:
      "A clearer portal structure was created for admin tasks, business records, compliance checks, and support follow-up.",
    result:
      "The work became easier to explain, easier to manage, and easier to support after launch.",
    tools: ["Dashboard views", "Role access", "Support flow"],
    images: [
      {
        src: "/images/proof/business-support-dashboard-clean.png",
        alt: "Business support dashboard with compliance, readiness, and scoring views",
        caption:
          "Business dashboard for compliance, readiness, reminders, and scoring.",
      },
    ],
  },
] as const;

const workStyles = [
  {
    title: "Websites and online stores",
    text: "Clean, mobile-friendly pages that help visitors understand the offer, browse with ease, and take the next step.",
  },
  {
    title: "Business systems and portals",
    text: "Practical dashboards, forms, accounts, and admin flows that keep daily work easier to manage in one place.",
  },
  {
    title: "Teaching, learning, and assessment support",
    text: "Course, quiz, review, and learner/admin workflows shaped for smoother teaching, learning, feedback, and support.",
  },
] as const;

const behindTheWork = [
  {
    src: "/images/gallery/behind-the-work-laptop-setup.jpg",
    alt: "Laptop setup used for practical website and system work",
    caption: "Working through layouts, setup, and testing in a real project space.",
  },
  {
    src: "/images/gallery/remote-callout-setup.jpg",
    alt: "Remote support setup with laptops for project callout work",
    caption: "Remote callout setup for checks, updates, and support.",
  },
  {
    src: "/videos/work-on-the-go.mp4",
    poster: "/images/gallery/remote-callout-setup.jpg",
    type: "video",
    alt: "Work on the go with remote support setup",
    caption: "Remote support, checks, and updates on the go.",
  },
  {
    src: "/images/gallery/practical-setup-window-detail.jpg",
    alt: "Hands-on support during a practical technology setup",
    caption: "Hands-on setup support when the real environment needs attention.",
  },
] as const;

function StoryImages({ story }: { story: (typeof workStories)[number] }) {
  if (story.images.length > 1) {
    return (
      <figure className="rounded-lg border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="grid grid-cols-3 gap-3">
          {story.images.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-md border border-slate-200 bg-slate-50 ${
                index === 0 ? "aspect-[9/16]" : "aspect-[9/16] translate-y-6"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 13vw, 29vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
        <figcaption className="mt-9 grid gap-2 text-xs leading-5 text-slate-500 md:grid-cols-3">
          {story.images.map((image) => (
            <span key={image.caption}>{image.caption}</span>
          ))}
        </figcaption>
      </figure>
    );
  }

  const image = story.images[0];

  return (
    <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      <div className="relative aspect-[16/11] overflow-hidden rounded-md border border-slate-200 bg-slate-50">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 44vw, 92vw"
          className="object-cover object-top"
        />
      </div>
      <figcaption className="px-1 pt-3 text-xs leading-5 text-slate-500">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export default function WorkPage() {
  return (
    <div className="bg-white">
      <Section className="border-b border-slate-200 bg-[#fbfcfb] py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_0.92fr_15rem] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
              Recent work
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.04]">
              Practical work for your needs.
            </h1>
          </div>
          <div className="max-w-2xl md:ml-auto">
            <p className="text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              A closer look at projects shaped to be clear, reliable, and easier to manage.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                href="/contact"
                variant="primary"
                className="border-emerald-900 bg-emerald-900 text-white hover:bg-emerald-800"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "work_hero", label: "contact" }}
              >
                Start a Project
              </Button>
            </div>
          </div>
          <figure className="w-full max-w-[15rem] overflow-hidden rounded-lg border border-emerald-900/10 bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.05)] lg:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-slate-100">
              <Image
                src="/images/gallery/Iris-lab.jpeg"
                alt="Fidel collaborating during a practical learning and technology session"
                fill
                priority
                sizes="(min-width: 1024px) 15rem, 72vw"
                className="object-cover object-center"
              />
            </div>
          </figure>
        </div>
      </Section>

      <Section className="border-b border-slate-200 bg-white">
        <div className="grid gap-3 md:grid-cols-3">
          {workStyles.map((item) => (
            <article key={item.title} className="border-t border-slate-200 pt-5">
              <h2 className="text-base font-semibold tracking-tight text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[#fbfcfb]">
        <div className="space-y-16 md:space-y-20">
          {workStories.map((story, index) => (
            <article
              id={story.id}
              key={story.id}
              className="scroll-mt-24 border-t border-slate-200 pt-12 first:border-t-0 first:pt-0 md:pt-16"
            >
              <div
                className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${
                  index % 2 === 1 ? "lg:[&>figure]:order-last" : ""
                }`}
              >
                <StoryImages story={story} />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
                    {story.category}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                    {story.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-700">{story.lead}</p>

                  <div className="mt-7 space-y-5 border-t border-slate-200 pt-6">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">Need</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{story.need}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">Built</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{story.built}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">Result</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{story.result}</p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {story.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-slate-200 bg-white"
        title="Behind the work"
        description="A look at the practical setup behind planning, testing, launch, and support."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {behindTheWork.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                {"type" in item && item.type === "video" ? (
                  <video
                    aria-label={item.alt}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={item.poster}
                    preload="metadata"
                    className="h-full w-full bg-[#fbfcfb] object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 92vw"
                    className="object-cover"
                  />
                )}
              </div>
              <figcaption className="p-4 text-sm leading-6 text-slate-600">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section contained={false} className="bg-slate-950 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Send a short note and the next step can be made clear.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "work_cta", label: "contact" }}
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
