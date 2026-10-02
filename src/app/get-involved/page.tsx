import type { Metadata } from "next";
import Image from "next/image";
import { Building2, HandHeart, Heart, Smartphone, UserPlus, Users } from "lucide-react";
import { Button, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Partner with, join, volunteer for or donate to SAMAMTA and help women, children and youth in Tanzania.",
};

const ways = [
  {
    id: "partner",
    icon: Building2,
    title: "Partner With Us",
    text: "We welcome partnerships with donors, foundations, government agencies, NGOs and the private sector to co-design and fund programmes for women, children and youth.",
    cta: "Start a conversation",
  },
  {
    id: "member",
    icon: UserPlus,
    title: "Become a Member",
    text: "Members are the heart of SAMAMTA. Join our General Meeting, help shape our direction and contribute through membership fees.",
    cta: "Ask about membership",
  },
  {
    id: "volunteer",
    icon: Users,
    title: "Volunteer",
    text: "Share your time and skills — from training and facilitation to research, communications and community outreach.",
    cta: "Offer your skills",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Lend your voice to theirs."
        intro="However you choose to help — as a partner, member, volunteer or donor — you become part of the voice of the mother and child."
        image="/images/mother-kissing.jpg"
      />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading center eyebrow="Ways to help" title="Find your place in our work." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ways.map(({ id, icon: Icon, title, text, cta }) => (
              <div
                key={id}
                id={id}
                className="flex scroll-mt-28 flex-col rounded-[1.75rem] bg-white p-8 ring-1 ring-forest-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-gold-100 text-gold-700">
                  <Icon className="size-6" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-forest-800">{title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-ink/70">{text}</p>
                <Button href={`/contact?topic=${id}`} variant="forest" className="mt-8 self-start">
                  {cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="scroll-mt-28 px-3 sm:px-6">
        <div className="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] bg-forest-800">
          <div aria-hidden className="absolute -left-20 -top-20 size-80 rounded-full border-[40px] border-gold-500/15" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className="text-white">
              <Eyebrow light>Donate</Eyebrow>
              <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Your gift helps a mother, a child, a young person.
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-forest-100/85">
                Donations fund community trainings, rights awareness, livelihoods support and the systems that keep
                our work accountable.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-gold-300">
                    <Smartphone className="size-5" />
                    <p className="font-bold">Mobile Money</p>
                  </div>
                  <p className="mt-3 text-sm text-forest-100/80">M-Pesa / Tigo Pesa / Airtel Money</p>
                  <p className="mt-1 font-mono text-lg font-semibold text-white">000 000</p>
                  <p className="text-xs text-forest-100/60">Business number — placeholder</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-gold-300">
                    <Building2 className="size-5" />
                    <p className="font-bold">Bank Transfer</p>
                  </div>
                  <p className="mt-3 text-sm text-forest-100/80">Bank Name — placeholder</p>
                  <p className="mt-1 font-mono text-lg font-semibold text-white">0000 0000 0000</p>
                  <p className="text-xs text-forest-100/60">Account: SAMAMTA</p>
                </div>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-forest-100/70">
                <HandHeart className="size-4 text-gold-300" />
                For in-kind gifts or grants, email{" "}
                <a href={`mailto:${site.contact.email}`} className="font-semibold text-white underline underline-offset-4">
                  {site.contact.email}
                </a>
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image src="/images/about.jpg" alt="A happy baby in her mother's arms" fill sizes="(min-width: 1024px) 448px, 90vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-3xl bg-gold-400 p-5 shadow-xl">
                <Heart className="size-8 fill-forest-800 text-forest-800" />
                <p className="font-display text-lg font-bold leading-tight text-forest-900">
                  Asante kwa
                  <br />
                  kujali.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
