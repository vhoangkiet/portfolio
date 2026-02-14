import Image from "next/image";
import { about } from "@/content/about";

export function AboutSection() {
	return (
		<section id="about" className="scroll-mt-20 bg-[var(--surface)] px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2
					className="section-title text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl"
					style={{ fontFamily: "var(--font-display), var(--font-sans)" }}
				>
					{about.headline}
				</h2>
				<div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
					{/* Photo with gradient ring */}
					<div className="relative flex justify-center lg:justify-start">
						<div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-[var(--background)] lg:max-w-md">
							<div
								className="absolute -inset-1 rounded-2xl opacity-60"
								style={{ background: "var(--gradient-hero)", filter: "blur(12px)" }}
							/>
							<div className="relative h-full w-full overflow-hidden rounded-2xl p-1">
								<div className="h-full w-full overflow-hidden rounded-xl bg-[var(--surface)]">
									<Image
										src={about.photo}
										alt=""
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
										priority
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-10">
						<p className="text-lg leading-relaxed text-[var(--foreground)]">
							{about.bio}
						</p>
						{/* Timeline */}
						<div>
							<h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
								Background
							</h3>
							<ul className="relative mt-4 border-l-2 border-[var(--border)] pl-6">
								{about.journey.map((item) => (
									<li key={item.period} className="relative pb-8 last:pb-0">
										<span
											className="absolute -left-[29px] top-0.5 h-3 w-3 rounded-full ring-4 ring-[var(--surface)]"
											style={{ background: "var(--gradient-hero)" }}
										/>
										<span className="text-xs font-medium text-[var(--muted)]">{item.period}</span>
										<p className="mt-0.5 font-semibold text-[var(--foreground)]">{item.role}</p>
										<p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
								Skills
							</h3>
							<div className="mt-3 flex flex-wrap gap-2">
								{about.skills.flatMap((s) =>
									s.items.map((item) => (
										<span
											key={item}
											className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5"
										>
											{item}
										</span>
									))
								)}
							</div>
						</div>
						<div>
							<h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
								What I value
							</h3>
							<ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[var(--foreground)]">
								{about.values.map((v) => (
									<li key={v} className="flex items-center gap-2">
										<span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
										{v}
									</li>
								))}
							</ul>
						</div>
						{about.cvUrl && (
							<a
								href={about.cvUrl}
								className="inline-flex w-fit items-center gap-2 rounded-xl border-2 border-[var(--accent)]/50 bg-[var(--accent)]/5 px-5 py-2.5 font-semibold text-[var(--accent)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
							>
								Download CV
								<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
								</svg>
							</a>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
