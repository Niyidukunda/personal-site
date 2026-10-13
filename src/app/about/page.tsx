import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About the business",
  description: "DEL IT AND WEB is a South African technology business providing web development, software solutions, IT support and practical learning platforms.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About DEL IT AND WEB",
    description: "Tech that works. Support you can trust.",
    url: "https://www.delitweb.com/about",
    type: "website",
  },
};

const services = [
  { title: "Web and software", text: "Websites, applications and integrations built around the work your business needs to do." },
  { title: "IT support and networks", text: "Practical troubleshooting, connectivity support and dependable systems for everyday operations." },
  { title: "Learning technology", text: "Online learning tools, assessment workflows and digital resources that make teaching and study easier to manage." },
] as const;

const approach = [
  { title: "Understand the need", text: "Start with your goals, current systems, budget and constraints. Agree on what a useful result looks like." },
  { title: "Build with purpose", text: "Choose a manageable solution, communicate progress clearly and check that it works in practice." },
  { title: "Support what we deliver", text: "Include deployment, documentation and handover so the solution can be maintained after launch." },
] as const;

export default function AboutPage() {
  return (
    <div>
      <Section className="border-b border-slate-200/70 bg-[linear-gradient(180deg,#f8fcfa_0%,#fbfdfc_100%)] pt-6 md:pt-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
          <div className="ds-gap max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-800">About DEL IT AND WEB</p>
            <h1 className="ds-h1">Tech that works.<br />Support you can trust.</h1>
            <p className="ds-body">We help businesses and education organisations turn practical needs into useful digital systems — from a clear, reliable website to the software and support behind daily operations.</p>
            <p className="ds-muted md:text-base">A registered South African business, working online with clients through focused development, consultation and ongoing support.</p>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Built around your work</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>Clear scope and useful outcomes</li>
              <li>Practical, maintainable solutions</li>
              <li>Support that stays understandable</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="ds-h2">Our purpose</h2>
            <p className="ds-body">Technology should help people get things done. DEL IT AND WEB brings software development, infrastructure and hands-on support together so that the tools you use fit the way you work.</p>
          </div>
          <div className="space-y-4">
            <h2 className="ds-h2">What matters to us</h2>
            <p className="ds-body">Consistency, integrity and customer care guide our work. We value honest communication, realistic commitments and solutions that remain useful beyond the initial delivery.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="border-t border-slate-200 pt-5">
              <h3 className="ds-h3">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{service.text}</p>
            </div>
          ))}
        </div>
        <Link href="/services" className="mt-6 inline-block rounded-sm text-sm font-semibold text-emerald-800 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Explore our services</Link>
      </Section>

      <Section className="bg-slate-50">
        <h2 className="ds-h2">How we work</h2>
        <dl className="mt-6 grid gap-6 md:grid-cols-3">
          {approach.map((step) => (
            <div key={step.title} className="space-y-3">
              <dt className="text-base font-semibold text-slate-900">{step.title}</dt>
              <dd className="text-sm leading-7 text-slate-700">{step.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="ds-h2">Our products</h2>
            <p className="ds-body">DelegateIT is a brand of DEL IT AND WEB for practical digital tools and services. DelegateIT Practice brings this approach to exam preparation through an online assessment simulator, starting with FAC1502 accounting.</p>
            <a href="https://practice.delegateit.live/" className="inline-block rounded-sm text-sm font-semibold text-emerald-800 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Explore DelegateIT Practice</a>
          </div>
          <div className="flex items-start gap-5 rounded-xl border border-slate-200 p-6">
            <Image src="/images/about/about-alt-1.png" alt="Fidele Niyidukunda, founder of DEL IT AND WEB" width={88} height={104} className="h-24 w-20 shrink-0 rounded-lg object-cover object-[center_27%]" sizes="80px" />
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">Founder and director</h2>
              <p className="text-sm leading-7 text-slate-700">Fidele Niyidukunda brings experience across IT support, software development and technology education. His approach is practical and people-focused: understand the problem, build carefully and help others use the result with confidence.</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">Registered company: DEL IT AND WEB · Registration number 2024/221522/07</p>
      </Section>

      <Section contained={false} className="bg-slate-900 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Let’s make technology work for you.</h2>
            <p className="mt-4 text-base leading-7 text-slate-200">Tell us what you need, what is getting in the way and where you want to go.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="secondary" className="border-white bg-white text-slate-900" analyticsEventName="cta_click" analyticsParams={{ location: "about", label: "contact" }}>Start a conversation</Button>
              <Button href="/work" variant="secondary" className="border-slate-300 bg-transparent text-slate-100 hover:bg-slate-800/20 hover:text-white">View selected work</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
