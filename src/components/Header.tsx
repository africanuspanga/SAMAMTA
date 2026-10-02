"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Heart, Mail, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div
        className={`hidden bg-forest-900 text-forest-100 transition-all duration-300 md:block ${
          scrolled ? "h-0 overflow-hidden" : "h-10"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-[13px]">
          <p className="tracking-wide">
            <span className="text-gold-300">Sauti ya Mama na Mtoto</span> · Handeni, Tanga · Tanzania
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5" /> {site.contact.email}
            </a>
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="size-3.5" /> {site.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled ? "border-forest-100 bg-cream/90 backdrop-blur-md" : "border-transparent bg-cream"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="SAMAMTA home">
            <span className="grid size-14 place-items-center rounded-full bg-white shadow-md ring-1 ring-forest-100">
              <Image src="/images/logo.png" alt="" width={48} height={48} loading="eager" className="size-12 object-contain" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-extrabold tracking-wide text-forest-700">SAMAMTA</span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-gold-600">
                Mama na Mtoto Tanzania
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            <NavLink href="/" active={isActive("/")}>Home</NavLink>
            {nav.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                      isActive(item.href) ? "text-forest-700" : "text-ink/80 hover:text-forest-700"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <span
                    className={`absolute -bottom-0.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-gold-500 transition-opacity ${
                      isActive(item.href) ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-3xl bg-white p-3 shadow-xl shadow-forest-900/10 ring-1 ring-forest-100">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-2xl px-4 py-2.5 text-[15px] font-semibold text-ink/85 transition-colors hover:bg-forest-50 hover:text-forest-700"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={item.href} href={item.href} active={isActive(item.href)}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/get-involved#donate"
              className="hidden items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-[15px] font-bold text-forest-900 shadow-sm transition hover:bg-gold-300 sm:inline-flex"
            >
              <Heart className="size-4 fill-current" /> Support Us
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-11 place-items-center rounded-full bg-forest-700 text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-forest-950/50 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-forest-100 px-6 py-5">
          <span className="font-display text-lg font-extrabold text-forest-700">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid size-10 place-items-center rounded-full bg-forest-50 text-forest-700"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav
          className="flex-1 overflow-y-auto px-4 py-4"
          aria-label="Mobile"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <Link href="/" className="block rounded-2xl px-4 py-3 text-lg font-semibold text-ink">
            Home
          </Link>
          {nav.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === item.href ? null : item.href)}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-lg font-semibold text-ink"
                    aria-expanded={expanded === item.href}
                  >
                    {item.label}
                    <ChevronDown className={`size-5 transition-transform ${expanded === item.href ? "rotate-180" : ""}`} />
                  </button>
                  {expanded === item.href && (
                    <div className="mb-2 ml-4 border-l-2 border-gold-300 pl-3">
                      <Link href={item.href} className="block px-3 py-2 font-semibold text-forest-700">
                        Overview
                      </Link>
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-ink/75">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="block rounded-2xl px-4 py-3 text-lg font-semibold text-ink">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="space-y-3 border-t border-forest-100 p-6">
          <Link
            href="/get-involved#donate"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3.5 font-bold text-forest-900"
          >
            <Heart className="size-4 fill-current" /> Support Us
          </Link>
          <p className="text-center text-sm text-ink/60">{site.contact.email}</p>
        </div>
      </aside>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <div className="relative">
      <Link
        href={href}
        className={`block rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
          active ? "text-forest-700" : "text-ink/80 hover:text-forest-700"
        }`}
      >
        {children}
      </Link>
      <span
        className={`absolute -bottom-0.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-gold-500 transition-opacity ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
