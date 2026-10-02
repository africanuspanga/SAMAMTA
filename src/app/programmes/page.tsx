import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button, CtaBand, PageHero, programmeIcons } from "@/components/ui";
import { programmes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "SAMAMTA's six programme areas: women's economic empowerment, child welfare, youth livelihoods, community education, advocacy and research.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Programmes that grow with communities."
        intro="Six connected programme areas that strengthen women, protect children and open opportunities for youth."
        image="/images/medic-pregnant.jpg"
      />

      {/* Quick jump */}
      <div className="sticky top-20 z-30 mt-6 px-6">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto rounded-full bg-white/90 p-2 shadow-sm ring-1 ring-forest-100 backdrop-blur [scrollbar-width:none]">
          {programmes.map((p) => (
            <Link
              key={p.id}
              href={`#${p.id}`}
              className="shrink-0 rounded-full px-4 py-2 text-sm font-semibold text-ink/75 transition hover:bg-forest-700 hover:text-white"
            >
              {p.title.split(" &")[0].replace("Community ", "")}
            </Link>
          ))}
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-24 md:space-y-32">
          {programmes.map((p, i) => {
            const Icon = programmeIcons[p.icon];
            const flip = i % 2 === 1;
            return (
              <section
                key={p.id}
                id={p.id}
                className="grid scroll-mt-40 items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                  <div
                    aria-hidden
                    className={`absolute -top-6 size-40 rounded-full ${flip ? "-right-6 bg-forest-100" : "-left-6 bg-gold-200"}`}
                  />
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-xl shadow-forest-900/15">
                    <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 600px, 90vw" className="object-cover" />
                  </div>
                  <span className="absolute -bottom-6 right-8 grid size-20 place-items-center rounded-3xl bg-forest-700 text-gold-300 shadow-xl">
                    <Icon className="size-9" />
                  </span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
                    Programme 0{i + 1}
                  </p>
                  <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-tight text-forest-800 md:text-[2.75rem]">
                    {p.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-ink/75">{p.body}</p>
                  <ul className="mt-8 space-y-3">
                    {p.focus.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold-400 text-forest-900">
                          <Check className="size-3.5" strokeWidth={3} />
                        </span>
                        <span className="font-medium text-ink/85">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/get-involved#partner" variant="outline" className="mt-10">
                    Support this programme
                  </Button>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
