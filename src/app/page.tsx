import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, GraduationCap, Handshake, MapPin, Megaphone, Target, Users } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import NewsletterForm from "@/components/NewsletterForm";
import { Button, CtaBand, Eyebrow, ProgrammeCard, SectionHeading } from "@/components/ui";
import { programmes } from "@/lib/site";

const pillars = [
  { icon: Users, title: "Women, Children & Youth", text: "The people at the centre of everything we do." },
  { icon: MapPin, title: "Rooted in Handeni", text: "Headquartered in Handeni Town, Tanga Region." },
  { icon: Compass, title: "National Reach", text: "Registered to operate across all of Tanzania." },
  { icon: Target, title: "Six Programme Areas", text: "From livelihoods to legal awareness and research." },
];

const approach = [
  { icon: GraduationCap, title: "Educate", text: "Seminars, workshops and trainings that build practical knowledge." },
  { icon: Megaphone, title: "Advocate", text: "Raising the voices of women, children and youth, and promoting their rights." },
  { icon: Users, title: "Empower", text: "Skills and opportunities for social and economic participation." },
  { icon: Handshake, title: "Collaborate", text: "Working hand in hand with government and civil society." },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Who we are */}
      <section id="who-we-are" className="scroll-mt-28 px-6 pt-28 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-lg">
            <div aria-hidden className="absolute -left-8 -top-8 size-48 rounded-full bg-gold-200" />
            <div
              aria-hidden
              className="absolute -bottom-10 -right-6 size-64 rounded-full border-[28px] border-forest-700/15"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest-900/20">
              <Image
                src="/images/about.jpg"
                alt="A smiling baby held close by her mother"
                fill
                sizes="(min-width: 1024px) 512px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 max-w-[16rem] rounded-3xl bg-forest-700 p-5 text-white shadow-xl">
              <p className="font-display text-lg font-bold leading-snug">“Sauti ya Mama na Mtoto”</p>
              <p className="mt-1 text-sm text-gold-200">The voice of the mother and child</p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A Tanzanian NGO for the wellbeing of women, children and youth."
            />
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              SAMAMTA is a newly established non-governmental organisation headquartered in Handeni Town, Tanga
              Region, and registered to operate nationally. We improve the wellbeing of women, children and youth
              through empowerment, education, advocacy, training, research and the promotion of social and
              economic development.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-forest-100">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-100 text-gold-700">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-bold text-forest-800">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button href="/about" variant="forest" className="mt-10">
              More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="px-3 sm:px-6">
        <div className="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] bg-forest-800 px-6 py-20 text-white md:py-24">
          <div aria-hidden className="absolute -left-24 -top-24 size-96 rounded-full border-[48px] border-gold-500/15" />
          <div aria-hidden className="absolute -bottom-32 right-10 size-72 rounded-full bg-forest-700" />
          <div className="relative mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur md:p-10">
              <Eyebrow light>Our Vision</Eyebrow>
              <p className="mt-5 font-display text-2xl font-bold leading-snug md:text-3xl">
                To raise awareness in social and economic development through education, training, seminars,
                workshops and research.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-gold-400 p-8 text-forest-900 md:p-10">
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] text-forest-800">
                <span className="h-px w-8 bg-forest-800" /> Our Mission
              </p>
              <ul className="mt-5 space-y-4 font-display text-xl font-bold leading-snug md:text-2xl">
                <li>Empower women and youth in social and economic activities.</li>
                <li>Protect youth social and economic rights.</li>
                <li>Provide social and economic development education to communities.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Work"
              title="Six programme areas, one shared purpose."
              intro="Our programmes work together to strengthen families and communities — from a mother's livelihood to a child's safety and a young person's future."
            />
            <Link
              href="/programmes"
              className="inline-flex shrink-0 items-center gap-2 font-bold text-forest-700 hover:text-gold-600"
            >
              View all programmes <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p) => (
              <ProgrammeCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Our Approach"
              title="How we create lasting change."
              intro="We believe communities hold the power to shape their own development. Our role is to inform, equip and stand alongside them."
            />
            <div className="mt-10 space-y-3">
              {approach.map(({ icon: Icon, title, text }, idx) => (
                <div key={title} className="flex items-start gap-5 rounded-2xl p-4 transition hover:bg-white">
                  <span className="font-display text-sm font-bold text-gold-600">0{idx + 1}</span>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest-700 text-gold-300">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-forest-800">{title}</p>
                    <p className="mt-0.5 leading-relaxed text-ink/70">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-[2rem]">
              <Image src="/images/clinic.jpg" alt="A health worker supporting a young patient" fill sizes="(min-width: 1024px) 300px, 45vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
              <Image src="/images/mother-kissing.jpg" alt="A mother kissing her baby's feet" fill sizes="(min-width: 1024px) 300px, 45vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-forest-100">
              <p className="font-display text-lg font-bold text-forest-800">Funded by community and partners</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/65">
                Membership fees, fundraising, gifts, grants, donations and income-generating activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-8">
        <CtaBand />
      </div>

      {/* Newsletter */}
      <section className="px-3 pt-16 sm:px-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest-900 px-6 py-14 md:px-14">
          <div aria-hidden className="absolute -right-16 -top-16 size-64 rounded-full border-[32px] border-gold-500/20" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
                Always stay connected.
              </h2>
              <p className="mt-3 max-w-md text-forest-100/80">
                Get news on our programmes, events and opportunities to support women, children and youth in
                Tanzania.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
