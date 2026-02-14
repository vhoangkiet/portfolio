"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				<Link
					href="/#home"
					className="text-lg font-bold text-[var(--foreground)] transition hover:opacity-90"
					style={{ fontFamily: "var(--font-display), var(--font-sans)" }}
					aria-label="Home"
				>
					{site.name}
				</Link>

				<nav className="hidden items-center gap-1 md:flex" aria-label="Main">
					{site.nav.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="relative rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)] after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:scale-x-0 after:rounded-full after:bg-[var(--accent)] after:transition after:content-[''] hover:after:scale-x-100"
						>
							{item.label}
						</Link>
					))}
				</nav>

				<button
					type="button"
					className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] md:hidden"
					onClick={() => setMobileOpen((o) => !o)}
					aria-expanded={mobileOpen}
					aria-label="Toggle menu"
				>
					{mobileOpen ? (
						<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					) : (
						<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					)}
				</button>
			</div>

			{mobileOpen && (
				<div className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4 md:hidden">
					<nav className="flex flex-col gap-1" aria-label="Mobile">
						{site.nav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="rounded-lg px-3 py-2.5 font-medium text-[var(--foreground)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
								onClick={() => setMobileOpen(false)}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
