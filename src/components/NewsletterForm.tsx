"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

// Placeholder: no mailing service is connected yet — submissions are not stored.
export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-5 text-white">
        <CheckCircle2 className="size-6 text-gold-300" />
        <p className="font-semibold">Asante! You&apos;re on the list.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
    >
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-forest-100">Name (required)</span>
        <input
          required
          name="name"
          className="w-full rounded-full border border-white/25 bg-transparent px-5 py-3 text-white placeholder:text-white/40 focus:border-gold-300 focus:outline-none"
          placeholder="Your name"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-forest-100">Email (required)</span>
        <input
          required
          type="email"
          name="email"
          className="w-full rounded-full border border-white/25 bg-transparent px-5 py-3 text-white placeholder:text-white/40 focus:border-gold-300 focus:outline-none"
          placeholder="you@example.com"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-gold-400 px-7 py-3.5 font-bold text-forest-900 transition hover:bg-gold-300"
      >
        Subscribe
      </button>
    </form>
  );
}
