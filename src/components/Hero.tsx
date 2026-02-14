import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
	return (
		<section
			id="home"
			className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8"
		>
			{/* Background mesh gradient */}
			<div
				className="pointer-events-none absolute inset-0 opacity-100"
				style={{ background: "var(--gradient-mesh)" }}
			/>
			{/* Subtle grid pattern */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
				style={{
					backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
						linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
					backgroundSize: "64px 64px",
				}}
			/>
			<div className="relative z-10 mx-auto max-w-4xl">
				<span
					className="inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--accent)]"
					style={{ fontFamily: "var(--font-display), var(--font-sans)" }}
				>
					Backend Developer
				</span>
				<h1
					className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl"
					style={{
						fontFamily: "var(--font-display), var(--font-sans)",
						background: "var(--gradient-hero)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
					}}
				>
					{site.name}
				</h1>
				<p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
					{site.tagline}
				</p>
				<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
					<Link
						href="/#projects"
						className="group inline-flex h-12 min-w-[170px] items-center justify-center rounded-xl px-6 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						style={{ background: "var(--gradient-hero)" }}
					>
						View my work
						<svg className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</Link>
					<Link
						href="/#contact"
						className="inline-flex h-12 min-w-[170px] items-center justify-center rounded-xl border-2 border-[var(--accent)]/50 bg-transparent px-6 font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
					>
						Get in touch
					</Link>
				</div>
				<div className="mt-14 flex justify-center gap-6">
					{site.social.map((s) => (
						<a
							key={s.name}
							href={s.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition hover:border-[var(--accent)]/40 hover:shadow-md"
							aria-label={s.name}
						>
							<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
								<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
							</svg>
							{s.name}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
