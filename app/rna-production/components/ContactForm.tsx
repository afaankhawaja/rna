"use client";

import { useState } from "react";

export default function ContactForm() {
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you! Your message has been sent successfully.");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 text-neutral-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2 uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
            placeholder="+1 234 567 8900"
          />
        </div>
        <div>
          <label htmlFor="reason" className="block text-sm font-medium mb-2 uppercase tracking-wider">
            Reason for Contact
          </label>
          <select
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-[var(--brand-orange)] transition-colors appearance-none"
            required
            style={{ backgroundColor: reason ? 'rgba(255, 255, 255, 0.1)' : '' }}
          >
            <option value="" disabled className="bg-[var(--deep-teal)] text-white">Select a reason</option>
            <option value="wedding" className="bg-[var(--deep-teal)] text-white">Wedding Photography/Videography</option>
            <option value="event" className="bg-[var(--deep-teal)] text-white">Event Photography/Videography</option>
            <option value="fashion" className="bg-[var(--deep-teal)] text-white">Model & Fashion Photography</option>
            <option value="corporate" className="bg-[var(--deep-teal)] text-white">Corporate Content Creation</option>
            <option value="other" className="bg-[var(--deep-teal)] text-white">Other Inquiry</option>
          </select>
        </div>
      </div>

      {['wedding', 'event', 'fashion', 'corporate'].includes(reason) && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500">
          <label htmlFor="event-date" className="block text-sm font-medium mb-2 uppercase tracking-wider">
            Event Date / Preferred Schedule
          </label>
          <input
            type="text"
            id="event-date"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
            placeholder="E.g., December 15th, 2024"
            required
          />
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 uppercase tracking-wider">
          Message / Project Details
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-[var(--brand-orange)] transition-colors resize-none"
          placeholder="Tell us about your project or event..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-8 py-4 bg-[var(--brand-orange)] hover:opacity-90 text-white font-bold rounded-md transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest"
      >
        Submit
      </button>
    </form>
  );
}
