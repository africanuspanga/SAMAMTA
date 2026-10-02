import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  ClipboardList,
  Coins,
  FileText,
  Gift,
  HandCoins,
  Handshake,
  Landmark,
  Layers,
  Scale,
  Store,
  UserCheck,
  Users,
  UsersRound,
  Vote,
} from "lucide-react";
import { CtaBand, Eyebrow, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SAMAMTA — Sauti ya Mama na Mtoto Tanzania — our vision, mission, governance and priorities.",
};

const objectives = [
  { icon: Users, title: "Community Empowerment" },
  { icon: Vote, title: "Advocacy" },
  { icon: Scale, title: "Legal Aid" },
  { icon: FileText, title: "Education" },
  { icon: Handshake, title: "Collaboration with Government & Civil Society" },
  { icon: Layers, title: "Inclusive Socio-economic Development" },
];

const governance = [
  {
    icon: UsersRound,
    title: "General Meeting",
    text: "The supreme decision-making body, bringing members together to set direction and hold leadership accountable.",
  },
  {
    icon: Landmark,
    title: "Board of Directors",
    text: "Provides strategic oversight, stewardship and guidance in line with the organisation's constitution.",
  },
  {
    icon: UserCheck,
    title: "Elected Office Bearers",
    text: "Lead day-to-day affairs of the organisation and implement the decisions of the Board and General Meeting.",
  },
];

const funding = [
  { icon: BadgeCheck, label: "Membership fees" },
  { icon: HandCoins, label: "Fundraising" },
  { icon: Gift, label: "Gifts" },
  { icon: Coins, label: "Grants" },
  { icon: Handshake, label: "Donations" },
  { icon: Store, label: "Income-generating activities" },
];

const priorities = [
  { icon: ClipboardList, title: "Strategic Plan", text: "Setting a clear multi-year direction for our programmes." },
  { icon: Coins, title: "Financial Management", text: "Robust, transparent financial procedures and controls." },
  { icon: Briefcase, title: "HR Policies", text: "A strong HR manual to support staff and volunteers." },
  { icon: HandCoins, title: "Resource Mobilisation", text: "Building capacity to attract grants and sustainable funding." },
  { icon: Building2, title: "Partnerships", text: "Long-term relationships with government, donors and civil society." },
  { icon: Layers, title: "Programme Portfolio", text: "A strong, well-designed portfolio of community programmes." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SAMAMTA"
        title="The voice of the mother and child."
        intro="A Tanzanian NGO working nationally to improve the wellbeing of women, children and youth."
        image="/images/mother-caring.jpg"
      />

      {/* Who we are */}
      <section id="who-we-are" className="scroll-mt-28 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading eyebrow="Who we are" title="Born in Handeni. Working for all of Tanzania." />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
              <p>
                <strong className="text-forest-800">Sauti ya Mama na Mtoto Tanzania (SAMAMTA)</strong> is a newly
                established non-governmental organisation headquartered in Handeni Town, Tanga Region, and
                registered to operate nationally.
              </p>
              <p>
                We focus on improving the wellbeing of women, children and youth through empowerment, education,
                advocacy, training, research and the promotion of social and economic development.
              </p>
              <p>
                Our name means <em>“the voice of the mother and child”</em> — a reminder that the people we serve
                deserve to be heard, and that lasting change starts in the family.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-forest-100 pt-8">
              {[
                ["HQ", "Handeni, Tanga"],
                ["Scope", "National"],
                ["Focus", "Women · Children · Youth"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{k}</p>
                  <p className="mt-1.5 font-display text-lg font-bold leading-snug text-forest-800">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div aria-hidden className="absolute -right-6 -top-6 size-40 rounded-full bg-gold-300" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[12rem] rounded-b-[2rem] shadow-2xl shadow-forest-900/20">
              <Image src="/images/mother-girl.jpg" alt="A mother playing with her young daughter" fill sizes="(min-width: 1024px) 448px, 90vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="scroll-mt-28 px-3 sm:px-6">
        <div className="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] bg-forest-800 px-6 py-20 md:py-24">
          <div aria-hidden className="absolute -right-24 -top-24 size-96 rounded-full border-[48px] border-gold-500/15" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[1.75rem] bg-white/5 p-8 text-white ring-1 ring-white/10">
                <Eyebrow light>Vision</Eyebrow>
                <p className="mt-5 font-display text-2xl font-bold leading-snug">
                  To raise awareness in social and economic development through education, training, seminars,
                  workshops and research.
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-gold-400 p-8 text-forest-900">
                <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em]">
                  <span className="h-px w-8 bg-forest-800" /> Mission
                </p>
                <ul className="mt-5 space-y-3 text-lg font-semibold leading-snug">
                  <li>• Empower women and youth in social and economic activities.</li>
                  <li>• Protect youth social and economic rights.</li>
                  <li>• Provide social and economic development education to communities.</li>
                </ul>
              </div>
              <div className="rounded-[1.75rem] bg-white p-8">
                <Eyebrow>Geographic scope</Eyebrow>
                <p className="mt-5 font-display text-2xl font-bold leading-snug text-forest-800">
                  National coverage across Tanzania.
                </p>
                <p className="mt-3 leading-relaxed text-ink/70">
                  Headquartered in Handeni Town, Tanga Region, and registered to work in every region of the
                  country.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="font-display text-2xl font-bold text-white">Core objectives</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {objectives.map(({ icon: Icon, title }) => (
                  <div key={title} className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-400 text-forest-900">
                      <Icon className="size-5" />
                    </span>
                    <p className="font-semibold text-white">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="scroll-mt-28 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="Governance"
            title="Accountable by design."
            intro="SAMAMTA is governed in accordance with its constitution through three connected bodies."
          />
          <div className="relative mt-14 grid gap-6 md:grid-cols-3">
            <div aria-hidden className="absolute left-[16%] right-[16%] top-12 hidden h-0.5 bg-gradient-to-r from-gold-300 via-forest-200 to-gold-300 md:block" />
            {governance.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="relative rounded-[1.75rem] bg-white p-8 text-center ring-1 ring-forest-100">
                <span className="relative mx-auto grid size-16 place-items-center rounded-full bg-forest-700 text-gold-300 ring-8 ring-cream">
                  <Icon className="size-7" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Tier {i + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-forest-800">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[1.75rem] bg-sand p-8 md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="lg:w-1/3">
                <Eyebrow>How we are funded</Eyebrow>
                <p className="mt-3 font-display text-2xl font-bold text-forest-800">Diverse, community-rooted sources.</p>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
                {funding.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
                    <Icon className="size-5 shrink-0 text-gold-600" />
                    <span className="text-sm font-semibold text-forest-800">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section id="priorities" className="scroll-mt-28 px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <SectionHeading
                eyebrow="Current priorities"
                title="Building strong foundations."
                intro="As a young organisation, we are investing in the systems that make great work possible — and grant mobilisation is a strategic priority."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {priorities.map(({ icon: Icon, title, text }) => (
                <div key={title} className="group rounded-[1.5rem] bg-white p-6 ring-1 ring-forest-100 transition hover:ring-gold-300">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-forest-50 text-forest-700">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-bold text-gold-700">In progress</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-forest-800">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
