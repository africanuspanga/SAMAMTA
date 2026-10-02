import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Coins, Scale, Search, ShieldCheck, Sprout } from "lucide-react";
import type { Programme } from "@/lib/site";

export const programmeIcons = {
  coins: Coins,
  shield: ShieldCheck,
  sprout: Sprout,
  book: BookOpen,
  scale: Scale,
  search: Search,
} satisfies Record<Programme["icon"], unknown>;

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] ${
        light ? "text-gold-300" : "text-gold-600"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-gold-300" : "bg-gold-500"}`} />
      {children}
    </p>
  );
}

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "forest" | "outline" | "white";
  className?: string;
};

export function Button({ href, children, variant = "gold", className = "" }: BtnProps) {
  const styles = {
    gold: "bg-gold-400 text-forest-900 hover:bg-gold-300",
    forest: "bg-forest-700 text-white hover:bg-forest-800",
    outline: "border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white",
    white: "bg-white text-forest-800 hover:bg-gold-100",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold transition ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="px-3 pt-3 sm:px-6">
      <div className="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] bg-forest-900">
        <Image src={image} alt="" fill fetchPriority="high" loading="eager" sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/60 to-transparent" />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-24 size-80 rounded-full border-[36px] border-gold-400/30"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl animate-fade-up">
            <Eyebrow light>{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance font-display text-5xl font-extrabold leading-[1.02] text-white md:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{intro}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.08] text-forest-800 md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-ink/70">{intro}</p>}
    </div>
  );
}

export function ProgrammeCard({ p }: { p: Programme }) {
  const Icon = programmeIcons[p.icon];
  return (
    <Link
      href={`/programmes#${p.id}`}
      className="group relative flex flex-col rounded-[1.75rem] bg-white p-7 ring-1 ring-forest-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10"
    >
      <span className="grid size-14 place-items-center rounded-2xl bg-forest-50 text-forest-700 transition group-hover:bg-forest-700 group-hover:text-gold-300">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-6 font-display text-xl font-bold leading-snug text-forest-800">{p.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-ink/70">{p.short}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-gold-600">
        Learn more <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="px-3 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gold-100">
        <div aria-hidden className="absolute -right-20 -top-24 size-96 rounded-full bg-gold-200/70" />
        <div
          aria-hidden
          className="absolute -bottom-40 right-40 size-80 rounded-full border-[40px] border-forest-700/10"
        />
        <div className="relative grid items-center gap-10 p-8 md:grid-cols-[1.2fr_1fr] md:p-14">
          <div>
            <Eyebrow>Stand with us</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-tight text-forest-800 md:text-5xl">
              Every mother and child deserves a voice.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/75">
              Partner with SAMAMTA, become a member, or give a gift that helps women, children and youth
              build better lives across Tanzania.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-involved#donate" variant="forest">Donate Today</Button>
              <Button href="/get-involved#partner" variant="outline">Partner With Us</Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full bg-forest-700" />
            <Image
              src="/images/mother-caring.jpg"
              alt="A mother lovingly holding her baby"
              fill
              sizes="(min-width: 768px) 384px, 90vw"
              className="rounded-full object-cover p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
