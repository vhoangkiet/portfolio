import { testimonials } from "@/content/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
	return (
		<section id="testimonials" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2
					className="section-title text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl"
					style={{ fontFamily: "var(--font-display), var(--font-sans)" }}
				>
					What people say
				</h2>
				<p className="mt-3 text-[var(--muted)]">
					Kind words from clients and colleagues.
				</p>
				<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((t) => (
						<TestimonialCard key={t.id} testimonial={t} />
					))}
				</div>
			</div>
		</section>
	);
}
