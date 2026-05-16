"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HOT_CAKE_API_URL } from "@/lib/constants";

type FormData = {
  name: string;
  companyName: string;
  email: string;
  mobile: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  companyName: "",
  email: "",
  mobile: "",
  message: "",
};

type ContactFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactFormModal({
  isOpen,
  onClose,
}: ContactFormModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setFormData(initialFormData);
        setFieldErrors({});
        setSubmitError("");
        setIsSubmitting(false);
        setIsSuccess(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(HOT_CAKE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 400 && result.errors) {
          setFieldErrors(result.errors);
          setSubmitError(result.message || "Please fix the errors below.");
        } else {
          setSubmitError(result.message || "Something went wrong. Please try again.");
        }
        return;
      }

      setIsSuccess(true);
    } catch {
      setSubmitError("Unable to reach the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#162456]/60 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl shadow-blue-900/20"
          >
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-t-3xl bg-gradient-to-br from-[#162456] to-[#155DFC] px-8 pt-10 pb-8"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-blue-100">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
                Get in touch
              </div>
              <h2
                id="contact-form-title"
                className="text-2xl sm:text-3xl font-black text-white tracking-tight"
              >
                Start your AI audit
              </h2>
              <p className="mt-2 text-sm sm:text-base text-blue-100/80 font-medium">
                Tell us about your organization and we&apos;ll reach out shortly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="px-8 py-8"
            >
              {isSuccess ? (
                <div className="text-center py-6">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-[#162456] mb-2">
                    Submission received!
                  </h3>
                  <p className="text-slate-500 font-medium mb-8">
                    Thank you for reaching out. Our team will contact you soon.
                  </p>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full rounded-2xl bg-[#155DFC] py-4 text-sm font-black text-white uppercase tracking-wider shadow-lg shadow-blue-600/30"
                  >
                    Done
                  </motion.button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Full name"
                      id="name"
                      value={formData.name}
                      onChange={(v) => updateField("name", v)}
                      error={fieldErrors.name}
                      placeholder="John Doe"
                      required
                    />
                    <Field
                      label="Company"
                      id="companyName"
                      value={formData.companyName}
                      onChange={(v) => updateField("companyName", v)}
                      error={fieldErrors.companyName}
                      placeholder="Acme Corp"
                      required
                    />
                  </div>

                  <Field
                    label="Work email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(v) => updateField("email", v)}
                    error={fieldErrors.email}
                    placeholder="john@company.com"
                    required
                  />

                  <Field
                    label="Mobile number"
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(v) => updateField("mobile", v)}
                    error={fieldErrors.mobile}
                    placeholder="9876543210"
                    required
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Tell us about your AI goals..."
                      className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-600/20 ${
                        fieldErrors.message
                          ? "border-red-300 focus:border-red-400"
                          : "border-slate-200 focus:border-blue-400"
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                      {submitError}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                    whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                    className="w-full rounded-2xl bg-[#155DFC] py-4 text-sm font-black text-white uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit inquiry"
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-xl border bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-600/20 ${
          error
            ? "border-red-300 focus:border-red-400"
            : "border-slate-200 focus:border-blue-400"
        }`}
      />
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}
