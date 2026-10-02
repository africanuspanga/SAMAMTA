import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SAMAMTA in Handeni, Tanga, Tanzania.",
};

const topics = ["partner", "member", "volunteer", "donate", "general"] as const;

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { topic } = await searchParams;
  const initialTopic = topics.find((t) => t === topic) ?? "general";

  const cards = [
    { icon: MapPin, title: "Visit us", lines: site.contact.address },
    { icon: Mail, title: "Email us", lines: [site.contact.email], href: `mailto:${site.contact.email}` },
    { icon: Phone, title: "Call us", lines: [site.contact.phone], href: `tel:${site.contact.phone.replace(/\s/g, "")}` },
    { icon: Clock, title: "Office hours", lines: site.contact.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        intro="Questions, partnership ideas or a story to share? We'd love to hear from you. Karibu sana."
        image="/images/clinic.jpg"
      />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {cards.map(({ icon: Icon, title, lines, href }) => (
              <div key={title} className="flex gap-5 rounded-[1.5rem] bg-white p-6 ring-1 ring-forest-100">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-forest-700 text-gold-300">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-forest-800">{title}</p>
                  {lines.map((l) =>
                    href ? (
                      <a key={l} href={href} className="block text-ink/75 hover:text-gold-600">
                        {l}
                      </a>
                    ) : (
                      <p key={l} className="text-ink/75">
                        {l}
                      </p>
                    ),
                  )}
                </div>
              </div>
            ))}
            <p className="px-2 text-sm text-ink/50">
              * Contact details shown are placeholders and will be updated soon.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-forest-900/5 ring-1 ring-forest-100 md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-forest-800">Send us a message</h2>
            <p className="mt-2 text-ink/65">We aim to reply within two working days.</p>
            <ContactForm initialTopic={initialTopic} />
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] ring-1 ring-forest-100">
          <iframe
            title="Map of Handeni, Tanga, Tanzania"
            src="https://www.google.com/maps?q=Handeni,Tanga,Tanzania&z=12&output=embed"
            className="h-[420px] w-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
