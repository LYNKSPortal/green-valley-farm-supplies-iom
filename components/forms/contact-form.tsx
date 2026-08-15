"use client";

import { useState, type FormEvent } from "react";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { UploadIcon, CheckIcon } from "@/components/ui/icons";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  category: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  category: "",
  message: "",
  consent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please enter a message.";
  if (!values.consent) errors.consent = "Please confirm you're happy for us to contact you.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialState);
      setFileName(null);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-brand-olive/30 bg-brand-olive/10 p-8 text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-olive text-white">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-bold text-brand-black">Thank you — your message has been sent</h3>
        <p className="max-w-md text-sm text-foreground-muted">
          A member of our team will be in touch as soon as possible. If your
          enquiry is urgent, please call us directly.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-black">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-xl border border-brand-cream px-4 py-3 text-sm text-brand-black focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green-light"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-black">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-xl border border-brand-cream px-4 py-3 text-sm text-brand-black focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green-light"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-black">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-xl border border-brand-cream px-4 py-3 text-sm text-brand-black focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green-light"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-brand-black">
            Company / Farm name <span className="text-foreground-muted">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className="w-full rounded-xl border border-brand-cream px-4 py-3 text-sm text-brand-black focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green-light"
          />
        </div>
      </div>

      <div>
        <label htmlFor="category" className="mb-1.5 block text-sm font-semibold text-brand-black">
          Product Category
        </label>
        <select
          id="category"
          name="category"
          value={values.category}
          onChange={(e) => update("category", e.target.value)}
          className="w-full rounded-xl border border-brand-cream px-4 py-3 text-sm text-brand-black focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green-light"
        >
          <option value="">Select a category (optional)</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-xl border border-brand-cream px-4 py-3 text-sm text-brand-black focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green-light"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="file" className="mb-1.5 block text-sm font-semibold text-brand-black">
          Upload image / document <span className="text-foreground-muted">(optional)</span>
        </label>
        <label
          htmlFor="file"
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-brand-cream px-4 py-4 text-sm text-foreground-muted hover:border-brand-green"
        >
          <UploadIcon className="h-5 w-5 text-brand-green" />
          {fileName ?? "Choose a file to attach"}
        </label>
        <input
          id="file"
          name="file"
          type="file"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={values.consent}
          onChange={(e) => update("consent", e.target.checked)}
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          className="mt-1 h-4 w-4 rounded border-brand-cream text-brand-olive focus:ring-brand-green-light"
        />
        <label htmlFor="consent" className="text-sm text-foreground-muted">
          I consent to Green Valley Supplies contacting me about my enquiry.
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" className="text-xs text-red-600">
          {errors.consent}
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong sending your message. Please try again or call us directly.
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
