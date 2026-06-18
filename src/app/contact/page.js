"use client";

import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder submission — wire up to an email service (e.g. Resend) when ready
    setSubmitted(true);
  }

  const info = [
    { icon: Mail,    label: "Email",   value: "hello@allganix.com" },
    { icon: MapPin,  label: "Base",    value: "Portland, OR — ship nationwide" },
    { icon: Clock,   label: "Support", value: "Mon–Fri, 9 am–5 pm PT" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf-green mb-2">
          Get in Touch
        </p>
        <h1 className="font-display text-4xl font-bold text-brand-green">
          We'd love to hear from you
        </h1>
        <p className="text-brand-text/60 mt-3 text-sm max-w-md">
          Questions about an order, a product, or a wholesale enquiry — we read every message.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14">

        {/* Contact form */}
        <div>
          {submitted ? (
            <div className="bg-card-sage rounded-2xl p-10 text-center flex flex-col gap-3">
              <span className="text-3xl">🌿</span>
              <h2 className="font-display text-2xl font-bold text-brand-green">
                Message received
              </h2>
              <p className="text-brand-text/60 text-sm">
                We'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-brand-text/50">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-card-sage border border-leaf-green/20 rounded-xl px-4 py-3 text-sm text-brand-text placeholder:text-brand-text/30 focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-brand-text/50">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-card-sage border border-leaf-green/20 rounded-xl px-4 py-3 text-sm text-brand-text placeholder:text-brand-text/30 focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-brand-text/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind…"
                  className="bg-card-sage border border-leaf-green/20 rounded-xl px-4 py-3 text-sm text-brand-text placeholder:text-brand-text/30 focus:outline-none focus:ring-2 focus:ring-brand-green/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-brand-green text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-leaf-green transition-colors duration-200 self-start"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact info panel */}
        <div className="flex flex-col gap-6 pt-2">
          {info.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="bg-card-sage rounded-xl p-3 flex-shrink-0">
                <Icon size={18} className="text-brand-green" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-text/40">
                  {label}
                </span>
                <span className="text-sm text-brand-text">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
