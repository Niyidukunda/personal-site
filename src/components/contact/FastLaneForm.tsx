"use client";

import { useState } from "react";

const inputClass =
  "mt-1.5 block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1";
const labelClass = "block text-sm font-medium text-slate-900";

export default function FastLaneForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Quick note via delitweb.com");
    const body = encodeURIComponent(
      [
        message,
        "",
        email ? `Reply to: ${email}` : null,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    );

    window.location.href = `mailto:hello@delitweb.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
      <div>
        <label htmlFor="fl-email" className={labelClass}>
          Your email{" "}
          <span className="font-normal text-slate-400">(optional — so I can reply directly)</span>
        </label>
        <input
          id="fl-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="fl-message" className={labelClass}>
          Message <span aria-hidden="true" className="text-slate-400">*</span>
        </label>
        <textarea
          id="fl-message"
          required
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex items-center gap-4 pt-1">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md border border-slate-900 bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-sm active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
        >
          Open email draft
        </button>
        {submitted && (
          <p role="status" aria-live="polite" className="text-sm text-slate-600">
            Draft opened.{" "}
            <span className="font-medium text-slate-900">Send it to reach me.</span>
          </p>
        )}
      </div>
    </form>
  );
}
