"use client";

import { useState } from "react";
import { therapies } from "@/lib/therapies";

export default function ContactForm({ defaultTherapy = "" }: { defaultTherapy?: string }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl bg-white/70 p-8 text-center">
        <p className="font-serif text-2xl text-forest">Thank you for reaching out.</p>
        <p className="mt-2 text-sm text-ink/70">We&apos;ll reply within one working day to arrange your free call.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-forest/15 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-sage-deep focus:ring-2 focus:ring-sage/30";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4 rounded-3xl bg-white/70 p-6 sm:grid-cols-2 sm:p-8"
    >
      <label className="grid gap-1.5 text-sm">
        Name
        <input required name="name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm">
        Phone or email
        <input required name="contact" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm sm:col-span-2">
        I&apos;m interested in
        <select name="therapy" defaultValue={defaultTherapy} className={field}>
          <option value="">Not sure yet, help me choose</option>
          {therapies.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm sm:col-span-2">
        Anything you&apos;d like us to know (optional)
        <textarea name="message" rows={4} className={field} />
      </label>
      <button
        type="submit"
        className="rounded-full bg-sage-deep px-6 py-3 text-sm font-medium text-cream transition hover:bg-forest sm:col-span-2 sm:justify-self-start"
      >
        Request a free 15-minute call
      </button>
    </form>
  );
}
