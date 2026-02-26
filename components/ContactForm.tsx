"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Send, User, Mail, Building2, MessageSquare, ChevronDown, CheckCircle2, Sparkles, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

const enquiryTypes = [
  "Partnership",
  "Membership",
  "Sponsorship",
  "Events",
  "Media & Press",
  "General Enquiry",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    enquiryType: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  /* ─── Success state ─── */
  if (state === "success") {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden"
        >
          {/* Light card */}
          <div className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-xl">
            {/* Animated top gradient */}
            <div className="h-1 w-full bg-gradient-to-r from-[#22C55E] via-[#2563EB] to-[#22C55E]" />

            <div className="relative px-10 py-20 text-center">
              {/* Animated checkmark */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                className="relative inline-flex items-center justify-center mb-8"
              >
                {/* Outer glow ring */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 0.6, 0.3], scale: [0.5, 1.2, 1] }}
                  transition={{ delay: 0.4, duration: 1.2 }}
                  className="absolute w-24 h-24 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)" }}
                />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#22C55E]/15 to-[#22C55E]/5 flex items-center justify-center border border-[#22C55E]/25 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                  <CheckCircle2 className="w-8 h-8 text-[#22C55E]" strokeWidth={1.8} />
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="font-heading font-bold text-2xl text-[#1C1F2E] mb-3"
              >
                Message Received
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="text-[#5A5F72] text-sm leading-relaxed max-w-sm mx-auto"
              >
                Thank you for reaching out. A member of our team will be in touch within 2-3 business days.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  /* ─── Form state ─── */
  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
    >
      {/* Light card container */}
      <div className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-xl">
        {/* Animated top gradient accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#2563EB]" />

        {/* ─── Personal Details Section ─── */}
        <div className="relative px-7 pt-8 pb-2">
          <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-6">
            <div className="w-6 h-6 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
              <User className="w-3 h-3 text-[#2563EB]" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">
              Personal Details
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${focusedField === "name" ? "text-[#2563EB]" : "text-[#1C1F2E]"}`}
              >
                Full Name <span className="text-[#C41E3A]">*</span>
              </label>
              <div className="relative group">
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === "name" ? "shadow-[0_0_20px_rgba(37,99,235,0.1)]" : ""}`} />
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${focusedField === "name" ? "bg-[#2563EB] opacity-100" : "bg-transparent opacity-0"}`} />
                <User className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === "name" ? "text-[#2563EB]" : "text-[#9A9EAF]"}`} />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-[#F5F4F2] border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#2563EB]/50 focus:bg-white focus:ring-1 focus:ring-[#2563EB]/20"
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${focusedField === "email" ? "text-[#2563EB]" : "text-[#1C1F2E]"}`}
              >
                Email Address <span className="text-[#C41E3A]">*</span>
              </label>
              <div className="relative group">
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === "email" ? "shadow-[0_0_20px_rgba(37,99,235,0.1)]" : ""}`} />
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${focusedField === "email" ? "bg-[#2563EB] opacity-100" : "bg-transparent opacity-0"}`} />
                <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === "email" ? "text-[#2563EB]" : "text-[#9A9EAF]"}`} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-[#F5F4F2] border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#2563EB]/50 focus:bg-white focus:ring-1 focus:ring-[#2563EB]/20"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mx-7 my-5">
          <div className="h-px bg-gradient-to-r from-[#D8D5CF] via-[#E8E6E3] to-transparent" />
        </div>

        {/* ─── Enquiry Details Section ─── */}
        <div className="relative px-7 pb-2">
          <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-6">
            <div className="w-6 h-6 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-[#22C55E]" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">
              Enquiry Details
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Phone */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="phone"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${focusedField === "phone" ? "text-[#22C55E]" : "text-[#1C1F2E]"}`}
              >
                Phone
              </label>
              <div className="relative group">
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${focusedField === "phone" ? "bg-[#22C55E] opacity-100" : "bg-transparent opacity-0"}`} />
                <Phone className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === "phone" ? "text-[#22C55E]" : "text-[#9A9EAF]"}`} />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+44 7000 000000"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-[#F5F4F2] border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-white focus:ring-1 focus:ring-[#22C55E]/20"
                />
              </div>
            </motion.div>

            {/* Organisation */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="organisation"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${focusedField === "organisation" ? "text-[#22C55E]" : "text-[#1C1F2E]"}`}
              >
                Organisation
              </label>
              <div className="relative group">
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${focusedField === "organisation" ? "bg-[#22C55E] opacity-100" : "bg-transparent opacity-0"}`} />
                <Building2 className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === "organisation" ? "text-[#22C55E]" : "text-[#9A9EAF]"}`} />
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  placeholder="Your company"
                  value={form.organisation}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("organisation")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-[#F5F4F2] border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-white focus:ring-1 focus:ring-[#22C55E]/20"
                />
              </div>
            </motion.div>

            {/* Enquiry Type */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="enquiryType"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${focusedField === "enquiryType" ? "text-[#22C55E]" : "text-[#1C1F2E]"}`}
              >
                Enquiry Type <span className="text-[#C41E3A]">*</span>
              </label>
              <div className="relative group">
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${focusedField === "enquiryType" ? "bg-[#22C55E] opacity-100" : "bg-transparent opacity-0"}`} />
                <MessageSquare className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === "enquiryType" ? "text-[#22C55E]" : "text-[#9A9EAF]"}`} />
                <ChevronDown className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors duration-300 ${focusedField === "enquiryType" ? "text-[#22C55E]" : "text-[#9A9EAF]"}`} />
                <select
                  id="enquiryType"
                  name="enquiryType"
                  required
                  value={form.enquiryType}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("enquiryType")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-[#F5F4F2] border border-[#D8D5CF] text-[#1C1F2E] text-sm pl-11 pr-10 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-white focus:ring-1 focus:ring-[#22C55E]/20 appearance-none cursor-pointer [&>option]:bg-white [&>option]:text-[#1C1F2E]"
                >
                  <option value="" disabled className="text-[#9A9EAF]">
                    Select a topic
                  </option>
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mx-7 my-5">
          <div className="h-px bg-gradient-to-r from-[#D8D5CF] via-[#E8E6E3] to-transparent" />
        </div>

        {/* ─── Message Section ─── */}
        <div className="relative px-7 pb-7">
          <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-6">
            <div className="w-6 h-6 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center">
              <Send className="w-3 h-3 text-[#8b5cf6]" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">
              Your Message
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label
              htmlFor="message"
              className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${focusedField === "message" ? "text-[#8b5cf6]" : "text-[#1C1F2E]"}`}
            >
              Message <span className="text-[#C41E3A]">*</span>
            </label>
            <div className="relative group">
              <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === "message" ? "shadow-[0_0_20px_rgba(139,92,246,0.08)]" : ""}`} />
              <div className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${focusedField === "message" ? "bg-[#8b5cf6] opacity-100" : "bg-transparent opacity-0"}`} />
              <MessageSquare className={`absolute left-3.5 top-4 w-4 h-4 transition-colors duration-300 ${focusedField === "message" ? "text-[#8b5cf6]" : "text-[#9A9EAF]"}`} />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us how we can help..."
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="relative w-full bg-[#F5F4F2] border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#8b5cf6]/50 focus:bg-white focus:ring-1 focus:ring-[#8b5cf6]/20 resize-none"
              />
            </div>
          </motion.div>
        </div>

        {/* ─── Footer ─── */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#D8D5CF] bg-[#FAFAF9] px-7 py-5"
        >
          <p className="text-[11px] text-[#5A5F72] leading-relaxed max-w-xs">
            We respond to all enquiries within 2-3 business days.
          </p>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="group relative shrink-0 inline-flex items-center gap-2.5 px-7 py-3 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#1a4fd4] hover:from-[#3b82f6] hover:to-[#2563EB] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state === "submitting" ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending...
              </span>
            ) : (
              <>
                Send Message
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </motion.form>
  );
}
