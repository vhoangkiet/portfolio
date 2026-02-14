"use client";

import { useState } from "react";

export function ContactForm() {
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("sending");
		// Replace with your form backend (e.g. Formspree, server action, API)
		await new Promise((r) => setTimeout(r, 800));
		setStatus("sent");
	}

	if (status === "sent") {
		return (
			<div className="rounded-2xl border-2 border-[var(--accent)]/20 bg-[var(--accent)]/5 p-8 text-center">
				<p className="text-lg font-semibold text-[var(--foreground)]">Thanks for your message.</p>
				<p className="mt-2 text-[var(--muted)]">I usually reply within 24–48 hours.</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
					Name
				</label>
				<input
					id="name"
					name="name"
					type="text"
					required
					className="mt-1 block w-full rounded-xl border-2 border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
					placeholder="Your name"
					disabled={status === "sending"}
				/>
			</div>
			<div>
				<label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
					Email
				</label>
				<input
					id="email"
					name="email"
					type="email"
					required
					className="mt-1 block w-full rounded-xl border-2 border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
					placeholder="you@example.com"
					disabled={status === "sending"}
				/>
			</div>
			<div>
				<label htmlFor="subject" className="block text-sm font-medium text-[var(--foreground)]">
					Subject
				</label>
				<select
					id="subject"
					name="subject"
					className="mt-1 block w-full rounded-xl border-2 border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
					disabled={status === "sending"}
				>
					<option value="project">Project inquiry</option>
					<option value="speaking">Speaking / collaboration</option>
					<option value="other">Other</option>
				</select>
			</div>
			<div>
				<label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					rows={4}
					required
					className="mt-1 block w-full rounded-xl border-2 border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
					placeholder="How can I help?"
					disabled={status === "sending"}
				/>
			</div>
			<button
				type="submit"
				disabled={status === "sending"}
				className="inline-flex h-12 min-w-[170px] items-center justify-center rounded-xl px-6 font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:opacity-50"
				style={{ background: "var(--gradient-hero)" }}
			>
				{status === "sending" ? "Sending…" : "Send message"}
			</button>
		</form>
	);
}
