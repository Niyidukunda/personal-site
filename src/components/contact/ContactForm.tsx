"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  preferredContact: "email" | "call";
  goal: string;
  timeline: string;
  currentState: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  preferredContact: "email",
  goal: "",
  timeline: "",
  currentState: "",
};

const labelClass =
  "block text-sm font-medium text-slate-900";
const inputClass =
  "mt-1.5 block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1";
const selectClass =
  "mt-1.5 block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Enquiry – ${form.name}${form.company ? ` (${form.company})` : ""}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.company ? `Company: ${form.company}` : null,
        `Preferred contact: ${form.preferredContact}`,
        ``,
        `Goal:`,
        form.goal,
        ``,
        `Timeline: ${form.timeline || "Not specified"}`,
        `Current state: ${form.currentState || "Not specified"}`,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    );

    window.location.href = `mailto:hello@delitweb.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name <span aria-hidden="true" className="text-slate-400">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email <span aria-hidden="true" className="text-slate-400">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="cf-company" className={labelClass}>
          Company <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          id="cf-company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={set("company")}
          placeholder="Organisation or project name"
          className={inputClass}
        />
      </div>

      {/* Preferred contact */}
      <fieldset>
        <legend className={labelClass}>Preferred contact method</legend>
        <div className="mt-2 flex gap-5">
          {(["email", "call"] as const).map((option) => (
            <label key={option} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
              <input
                type="radio"
                name="preferredContact"
                value={option}
                checked={form.preferredContact === option}
                onChange={set("preferredContact")}
                className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
              />
              {option === "email" ? "Email" : "Call"}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Goal */}
      <div>
        <label htmlFor="cf-goal" className={labelClass}>
          What are you trying to achieve? <span aria-hidden="true" className="text-slate-400">*</span>
        </label>
        <textarea
          id="cf-goal"
          required
          rows={4}
          value={form.goal}
          onChange={set("goal")}
          placeholder="Describe the problem, goal, or outcome you're working toward."
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Timeline + Current state */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-timeline" className={labelClass}>
            Timeline
          </label>
          <select
            id="cf-timeline"
            value={form.timeline}
            onChange={set("timeline")}
            className={selectClass}
          >
            <option value="">Select a timeline</option>
            <option value="This week">This week</option>
            <option value="This month">This month</option>
            <option value="This quarter">This quarter</option>
            <option value="Exploring">Exploring</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-state" className={labelClass}>
            Current state
          </label>
          <select
            id="cf-state"
            value={form.currentState}
            onChange={set("currentState")}
            className={selectClass}
          >
            <option value="">Select current state</option>
            <option value="Idea">Idea</option>
            <option value="In progress">In progress</option>
            <option value="In production">In production</option>
            <option value="In trouble">In trouble</option>
          </select>
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4 pt-1">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md border border-slate-900 bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-sm active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
        >
          Open email draft
        </button>
        {submitted && (
          <p role="status" aria-live="polite" className="text-sm text-slate-600">
            Email draft opened.{" "}
            <span className="font-medium text-slate-900">Send it to reach me.</span>
          </p>
        )}
      </div>
    </form>
  );
}
