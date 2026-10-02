"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const topicLabels: Record<string, string> = {
  general: "General enquiry",
  partner: "Partnership",
  member: "Membership",
  volunteer: "Volunteering",
  donate: "Donation / grants",
};

const field =
  "w-full rounded-2xl border border-forest-100 bg-cream px-5 py-3.5 text-ink placeholder:text-ink/35 transition focus:border-forest-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-forest-100";

// Placeholder: no email/backend is connected yet — submissions are not sent anywhere.
export default function ContactForm({ initialTopic }: { initialTopic: string }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-8 flex flex-col items-center rounded-3xl bg-forest-50 p-10 text-center">
        <CheckCircle2 className="size-12 text-forest-700" />
        <p className="mt-4 font-display text-2xl font-bold text-forest-800">Asante sana!</p>
        <p className="mt-2 text-ink/70">Thank you for reaching out. We&apos;ll be in touch soon.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 font-semibold text-gold-600 hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="mt-8 grid gap-5 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-forest-800">Full name *</span>
        <input required name="name" className={field} placeholder="Your name" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-forest-800">Email *</span>
        <input required type="email" name="email" className={field} placeholder="you@example.com" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-forest-800">Phone</span>
        <input type="tel" name="phone" className={field} placeholder="+255 …" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-forest-800">Topic</span>
        <select name="topic" defaultValue={initialTopic} className={field}>
          {Object.entries(topicLabels).map(([v, l]) => (
            <option key={v} value={v}>
              {l}
            </option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-2 block text-sm font-semibold text-forest-800">Message *</span>
        <textarea required name="message" rows={5} className={`${field} resize-none`} placeholder="How can we help?" />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-bold text-forest-900 transition hover:bg-gold-300"
        >
          Send Message <Send className="size-4" />
        </button>
      </div>
    </form>
  );
}
