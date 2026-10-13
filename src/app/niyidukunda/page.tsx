import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: { absolute: "Fidele Niyidukunda | IT, software and technology education" },
  description: "A professional biography of Fidele Niyidukunda: IT support, software development, networking and technology education in South Africa.",
  alternates: { canonical: "https://www.delitweb.com/niyidukunda" },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  openGraph: {
    title: "Fidele Niyidukunda",
    description: "Practical technology, continuous learning and systems people can use.",
    url: "https://www.delitweb.com/niyidukunda",
    type: "profile",
    firstName: "Fidele",
    lastName: "Niyidukunda",
    images: [{ url: "https://www.delitweb.com/images/about/about-alt-1.png", alt: "Fidele Niyidukunda" }],
  },
  twitter: { card: "summary_large_image", title: "Fidele Niyidukunda", description: "IT support, software development and technology education.", images: ["https://www.delitweb.com/images/about/about-alt-1.png"] },
};

const qualifications = ["CompTIA A+, Network+ and Security+", "Cisco CCNA", "Kubernetes and Cloud Native Associate (KCNA)"] as const;

export default function BiographyPage() {
  return (
    <article>
      <Section className="border-b border-slate-200/70 bg-[linear-gradient(180deg,#f8fcfa_0%,#fbfdfc_100%)] pt-6 md:pt-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
          <div className="ds-gap max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-800">Professional biography</p>
            <h1 className="ds-h1 break-words">Fidele Niyidukunda</h1>
            <p className="text-lg leading-8 text-slate-800">IT consultant, software developer and technology educator.</p>
            <p className="ds-body">My work sits between software, teaching, support and practical problem-solving. I turn ideas and manual processes into digital systems people can use, and help them understand the technology behind those systems.</p>
            <p className="ds-muted">Based in Pietermaritzburg, KwaZulu-Natal, South Africa.</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Get in touch</Button>
              <a href="https://github.com/Niyidukunda" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">GitHub</a>
            </div>
          </div>
          <div className="relative mx-auto aspect-[5/6] w-full max-w-xs overflow-hidden rounded-xl border border-emerald-100 bg-slate-100 shadow-sm md:justify-self-end">
            <Image src="/images/about/about-alt-1.png" alt="Portrait of Fidele Niyidukunda" fill priority sizes="(min-width: 768px) 320px, 80vw" className="object-cover object-[center_27%]" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          <section className="space-y-4" aria-labelledby="background">
            <h2 id="background" className="ds-h2">From engineering to digital systems</h2>
            <p className="ds-body">My background includes S4-level coursework in Electronic Engineering at Durban University of Technology. It gave me a grounding in how systems work and an interest in solving technical problems. I am continuing my studies in Informatics at UNISA while applying what I learn in practical projects.</p>
            <p className="ds-body">Over time, my work has brought together IT support, networking and application development. I enjoy the connection between a useful interface and the infrastructure that makes it reliable.</p>
          </section>

          <section className="space-y-4" aria-labelledby="teaching">
            <h2 id="teaching" className="ds-h2">Technology and teaching</h2>
            <p className="ds-body">Teaching and tutoring have shaped the way I communicate. I have worked in school environments, supported learners and helped people build confidence with unfamiliar concepts. At BSG and Technologies, my work combines IT administration and course facilitation.</p>
            <p className="ds-body">This includes work with coding and robotics, online learning platforms and assessment tools. I care about making technical ideas approachable and giving learners opportunities to practise, rather than only watch or memorise.</p>
          </section>

          <section className="space-y-4" aria-labelledby="building">
            <h2 id="building" className="ds-h2">Building useful tools</h2>
            <p className="ds-body">Through DEL IT AND WEB, I work on websites, software solutions and everyday IT support. My development work includes JavaScript and TypeScript applications, React and Next.js interfaces, server-side services and PostgreSQL databases. I also work with deployment tools, containers and version-controlled workflows.</p>
            <p className="ds-body">Projects in learning technology and business systems have strengthened my interest in connecting development with operations. DelegateIT Practice is one example: an assessment simulator designed to help students practise accounting in a familiar online format.</p>
          </section>

          <section className="space-y-4" aria-labelledby="learning">
            <h2 id="learning" className="ds-h2">Learning as a working habit</h2>
            <p className="ds-body">My training and certifications include:</p>
            <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-slate-700">
              {qualifications.map((qualification) => <li key={qualification}>{qualification}</li>)}
            </ul>
            <p className="ds-body">I continue to develop my skills in cloud-native infrastructure, CI/CD and DevOps. My goal is to connect software delivery with the networking, security and operational practices that keep systems dependable.</p>
          </section>

          <section className="space-y-4" aria-labelledby="approach">
            <h2 id="approach" className="ds-h2">How I approach my work</h2>
            <p className="ds-body">I value calm problem-solving, integrity and clear communication. I prefer to understand the need, work within real constraints and explain decisions in a way people can follow. Whether supporting a user, building an application or teaching a lesson, I want the result to be useful and understandable.</p>
            <p className="ds-body">My interests in science and continuous learning keep me curious. I am drawn to work where technology helps people learn, simplifies a process or makes everyday operations more reliable.</p>
          </section>
          <div className="border-t border-slate-200 pt-8">
            <p className="ds-muted">For professional enquiries, use the contact page or explore my development work on GitHub.</p>
            <Button href="/contact" className="mt-4">Start a conversation</Button>
          </div>
        </div>
      </Section>
    </article>
  );
}
