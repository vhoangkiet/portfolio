import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
	project: Project;
	index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
	return (
		<article
			className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30 hover:shadow-xl"
			style={{ animationDelay: `${index * 0.05}s` }}
		>
			<Link href={`/projects/${project.slug}`} className="block overflow-hidden">
				<div className="relative aspect-video w-full bg-[var(--background)]">
					<Image
						src={project.image}
						alt=""
						fill
						className="object-cover transition duration-500 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
					{/* Gradient overlay on hover for depth */}
					<div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				</div>
			</Link>
			<div className="flex flex-1 flex-col p-6">
				<div className="mb-3 flex flex-wrap gap-2">
					{project.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="rounded-lg bg-[var(--accent)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--accent)]"
						>
							{tag}
						</span>
					))}
				</div>
				<h3
					className="text-xl font-bold text-[var(--foreground)]"
					style={{ fontFamily: "var(--font-display), var(--font-sans)" }}
				>
					<Link
						href={`/projects/${project.slug}`}
						className="transition hover:text-[var(--accent)]"
					>
						{project.title}
					</Link>
				</h3>
				<p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
					{project.shortDescription}
				</p>
				<Link
					href={`/projects/${project.slug}`}
					className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] transition hover:gap-2"
				>
					View project
					<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</Link>
			</div>
		</article>
	);
}
