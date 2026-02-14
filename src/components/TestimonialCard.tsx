import Image from "next/image";
import type { Testimonial } from "@/content/testimonials";

interface TestimonialCardProps {
	testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
	return (
		<blockquote className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
			{/* Accent left border */}
			<div
				className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full opacity-0 transition-opacity group-hover:opacity-100"
				style={{ background: "var(--gradient-hero)" }}
			/>
			<span
				className="text-6xl font-serif leading-none text-[var(--accent)]/20"
				aria-hidden
			>
				"
			</span>
			<p className="-mt-4 text-[var(--foreground)]">
				{testimonial.quote}
			</p>
			<footer className="mt-6 flex items-center gap-4">
				{testimonial.avatar ? (
					<div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--accent)]/20">
						<Image
							src={testimonial.avatar}
							alt=""
							width={48}
							height={48}
							className="object-cover"
						/>
					</div>
				) : null}
				<div>
					<cite className="not-italic font-semibold text-[var(--foreground)]">
						{testimonial.linkedIn ? (
							<a
								href={testimonial.linkedIn}
								target="_blank"
								rel="noopener noreferrer"
								className="transition hover:text-[var(--accent)]"
							>
								{testimonial.name}
							</a>
						) : (
							testimonial.name
						)}
					</cite>
					<p className="text-sm text-[var(--muted)]">
						{testimonial.title}
						{testimonial.company ? ` · ${testimonial.company}` : ""}
					</p>
				</div>
			</footer>
		</blockquote>
	);
}
