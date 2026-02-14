import Link from "next/link";

export const metadata = {
	title: "Blog | Portfolio",
	description: "Thoughts and insights on design, development, and more.",
};

export default function BlogPage() {
	return (
		<div className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-3xl">
				<Link
					href="/#home"
					className="mb-8 inline-flex items-center text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
				>
					<svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
					</svg>
					Back to home
				</Link>
				<h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
					Blog
				</h1>
				<p className="mt-2 text-[var(--muted)]">
					Thoughts on design, development, and building products. More posts coming soon.
				</p>
				<div className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
					<p className="text-[var(--muted)]">No posts yet. Check back later.</p>
				</div>
			</div>
		</div>
	);
}
