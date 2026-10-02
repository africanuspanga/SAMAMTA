"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

const slides = [
  {
    image: "/images/hero.jpg",
    kicker: "Sauti ya Mama na Mtoto",
    title: ["A Voice for", "Mothers &", "Children."],
    text: "We empower women, protect children and open opportunities for youth across Tanzania.",
    cta: { label: "Discover Our Work", href: "/programmes" },
  },
  {
    image: "/images/mother-girl.jpg",
    kicker: "Women's Economic Empowerment",
    title: ["Strong Women,", "Stronger", "Families."],
    text: "Skills, income and confidence for women to lead in their homes and communities.",
    cta: { label: "Women's Programme", href: "/programmes#women" },
  },
  {
    image: "/images/medic-pregnant.jpg",
    kicker: "Community Education",
    title: ["Knowledge", "That Changes", "Lives."],
    text: "Seminars, workshops and trainings that bring practical knowledge to every community.",
    cta: { label: "How We Educate", href: "/programmes#education" },
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const s = slides[i];

  return (
    <section className="px-3 pt-3 sm:px-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative mx-auto max-w-[90rem]">
        <div className="relative h-[min(88vh,760px)] min-h-[560px] overflow-hidden rounded-[2rem] bg-forest-900">
          {slides.map((sl, idx) => (
            <Image
              key={sl.image}
              src={sl.image}
              alt=""
              fill
              fetchPriority={idx === 0 ? "high" : "auto"} loading={idx === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className={`object-cover object-[70%_center] transition-[opacity,transform] duration-[1400ms] ${
                idx === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-900/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-950/50 to-transparent" />

          <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
            <div key={i} className="max-w-xl animate-fade-up">
              <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-gold-200 backdrop-blur">
                {s.kicker}
              </p>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                {s.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">{s.text}</p>
              <p className="mt-3 font-semibold text-white">We walk with families every step of the way.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={s.cta.href}
                  className="rounded-full bg-gold-400 px-7 py-4 text-[15px] font-bold text-forest-900 shadow-lg transition hover:bg-gold-300"
                >
                  {s.cta.label}
                </Link>
                <Link
                  href="/get-involved"
                  className="rounded-full border-2 border-white/70 px-7 py-[14px] text-[15px] font-bold text-white transition hover:bg-white hover:text-forest-800"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Slides">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => go(idx)}
                aria-label={`Show slide ${idx + 1}`}
                aria-selected={idx === i}
                role="tab"
                className={`h-2.5 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>

          <div className="absolute bottom-6 right-6 hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(i - 1)}
              aria-label="Previous slide"
              className="grid size-12 place-items-center rounded-xl bg-forest-800/80 text-white backdrop-blur transition hover:bg-gold-400 hover:text-forest-900"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              aria-label="Next slide"
              className="grid size-12 place-items-center rounded-xl bg-forest-800/80 text-white backdrop-blur transition hover:bg-gold-400 hover:text-forest-900"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <a
          href="#who-we-are"
          aria-label="Scroll to content"
          className="absolute -bottom-8 left-1/2 grid size-16 -translate-x-1/2 place-items-center rounded-full bg-cream text-forest-700 shadow-lg transition hover:translate-y-1"
        >
          <ChevronDown className="size-6" />
        </a>
      </div>
    </section>
  );
}
