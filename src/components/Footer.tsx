import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/SocialIcons";
import { programmes, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-forest-900 text-forest-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[28rem] rounded-full border-[48px] border-gold-600/20"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4">
            <span className="grid size-20 place-items-center rounded-full bg-white">
              <Image src="/images/logo.png" alt="SAMAMTA logo" width={68} height={68} className="size-[68px] object-contain" />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold text-white">SAMAMTA</p>
              <p className="text-sm text-gold-300">{site.fullName}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-forest-100/80">
            Improving the wellbeing of women, children and youth across Tanzania through empowerment,
            education, advocacy, training and research.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.social.facebook, Icon: FacebookIcon, label: "Facebook" },
              { href: site.social.instagram, Icon: InstagramIcon, label: "Instagram" },
              { href: site.social.x, Icon: XIcon, label: "X" },
              { href: site.social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold-400 hover:text-forest-900"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-display text-base font-bold text-white">Useful Links</h3>
          <ul className="mt-5 space-y-3 text-[15px]">
            {[
              ["About Us", "/about"],
              ["Our Work", "/programmes"],
              ["Get Involved", "/get-involved"],
              ["Donate", "/get-involved#donate"],
              ["Contact Us", "/contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="text-forest-100/80 transition hover:text-gold-300">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-base font-bold text-white">Programme Areas</h3>
          <ul className="mt-5 space-y-3 text-[15px]">
            {programmes.map((p) => (
              <li key={p.id}>
                <Link href={`/programmes#${p.id}`} className="text-forest-100/80 transition hover:text-gold-300">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-base font-bold text-white">Get in Touch</h3>
          <address className="mt-5 space-y-1 text-[15px] not-italic text-forest-100/80">
            {site.contact.address.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </address>
          <p className="mt-5 text-[15px] font-semibold text-white">Office Hours</p>
          {site.contact.hours.map((h) => (
            <p key={h} className="text-[15px] text-forest-100/80">
              {h}
            </p>
          ))}
          <a href={`mailto:${site.contact.email}`} className="mt-5 block font-semibold text-white hover:text-gold-300">
            {site.contact.email}
          </a>
          <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="mt-1 block font-semibold text-white hover:text-gold-300">
            {site.contact.phone}
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-[13px] text-forest-100/60 md:flex-row">
          <p>© {new Date().getFullYear()} Sauti ya Mama na Mtoto Tanzania (SAMAMTA). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white">Terms of Use</Link>
            <a href="#top" className="flex items-center gap-1 font-semibold text-gold-300 hover:text-gold-200">
              Back to Top <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
