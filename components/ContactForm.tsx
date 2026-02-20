"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Send } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

const enquiryTypes = [
  "Partnership",
  "Membership",
  "Sponsorship",
  "Events",
  "Media & Press",
  "General Enquiry",
];

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    // Placeholder: swap for your actual submission endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  const inputBase =
    "w-full bg-[#EEECEA] border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#7A7E8F] text-sm px-4 py-3 rounded-none outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15";

  if (state === "success") {
    return (
      <div className="border border-[#D8D5CF] bg-white p-10 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#22C55E]/10 mb-5">
          <svg
            className="w-6 h-6 text-[#22C55E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-2">
          Message Received
        </h3>
        <p className="text-[#3D4152] text-sm leading-relaxed">
          Thank you for reaching out. A member of our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D8D5CF]">
        {/* Name */}
        <div className="bg-[#FAFAF9] p-6">
          <label
            htmlFor="name"
            className="block text-[10px] font-semibold tracking-[0.13em] uppercase text-[#7A7E8F] mb-2"
          >
            Full Name <span className="text-[#C41E3A]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        {/* Email */}
        <div className="bg-[#FAFAF9] p-6">
          <label
            htmlFor="email"
            className="block text-[10px] font-semibold tracking-[0.13em] uppercase text-[#7A7E8F] mb-2"
          >
            Email Address <span className="text-[#C41E3A]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        {/* Organisation */}
        <div className="bg-[#FAFAF9] p-6">
          <label
            htmlFor="organisation"
            className="block text-[10px] font-semibold tracking-[0.13em] uppercase text-[#7A7E8F] mb-2"
          >
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            placeholder="Your company or institution"
            value={form.organisation}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        {/* Enquiry Type */}
        <div className="bg-[#FAFAF9] p-6">
          <label
            htmlFor="enquiryType"
            className="block text-[10px] font-semibold tracking-[0.13em] uppercase text-[#7A7E8F] mb-2"
          >
            Enquiry Type <span className="text-[#C41E3A]">*</span>
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            required
            value={form.enquiryType}
            onChange={handleChange}
            className={`${inputBase} appearance-none cursor-pointer`}
          >
            <option value="" disabled>
              Select a topic
            </option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message — full width */}
        <div className="bg-[#FAFAF9] p-6 sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-[10px] font-semibold tracking-[0.13em] uppercase text-[#7A7E8F] mb-2"
          >
            Message <span className="text-[#C41E3A]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us how we can help..."
            value={form.message}
            onChange={handleChange}
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      {/* Footer row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-[#D8D5CF] bg-white px-6 py-5">
        <p className="text-[11px] text-[#7A7E8F] leading-relaxed max-w-xs">
          We respond to all enquiries within 2–3 business days.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={state === "submitting"}
          className="shrink-0"
        >
          {state === "submitting" ? (
            "Sending…"
          ) : (
            <>
              Send Message
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
