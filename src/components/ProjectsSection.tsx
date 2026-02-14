import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
	return (
		<section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2
					className="section-title text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl"
					style={{ fontFamily: "var(--font-display), var(--font-sans)" }}
				>
					Selected work
				</h2>
				<p className="mt-3 max-w-2xl text-[var(--muted)]">
					Projects I’ve designed and built. Click through for full case studies.
				</p>
				<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, i) => (
						<ProjectCard key={project.slug} project={project} index={i} />
					))}
				</div>
				<div className="mt-14 text-center">
					<a
						href="/projects"
						className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-[var(--accent)]/50 bg-transparent px-6 font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
					>
						See all projects
					</a>
				</div>
			</div>
		</section>
	);
}
