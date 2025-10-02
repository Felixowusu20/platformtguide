
"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB_FORMS_API_KEY || "f0296e7e-6a9d-42f3-a7ef-98f6455a25c4");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setSuccess("Thank you! Your message has been sent.");
        setSubmitted(true);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (e) {
      setError("Network error. Please try again later.");
    }
    setLoading(false);
  }

  return (
    <section className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10 mb-16">
      <h2 className="text-2xl font-bold text-[#22305a] mb-2 text-center">Contact Us</h2>
      <div className="w-16 h-1 rounded bg-[#2FA3FF] mb-6 mt-2 mx-auto" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="block text-[#22305a] font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 border border-[#2FA3FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FA3FF] text-[#22305a] bg-[#f9fafb] shadow-sm"
            placeholder="Your Name"
            disabled={loading || submitted}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[#22305a] font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-[#2FA3FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FA3FF] text-[#22305a] bg-[#f9fafb] shadow-sm"
            placeholder="you@email.com"
            disabled={loading || submitted}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-[#22305a] font-medium mb-1">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-[#2FA3FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FA3FF] text-[#22305a] bg-[#f9fafb] resize-none shadow-sm"
            placeholder="Type your message..."
            disabled={loading || submitted}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#2FA3FF] text-white font-bold text-lg shadow hover:bg-[#1b8edb] transition disabled:opacity-60"
          disabled={loading || submitted}
        >
          {loading ? "Sending..." : submitted ? "Sent" : "Send Message"}
        </button>
        {error && <p className="text-center text-red-600 mt-2">{error}</p>}
        {success && <p className="text-center text-green-600 mt-2">{success}</p>}
      </form>
    </section>
  );
}