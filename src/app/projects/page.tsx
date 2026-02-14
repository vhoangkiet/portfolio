import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
	title: "Projects | Portfolio",
	description: "Selected projects and case studies.",
};

export default function ProjectsPage() {
	return (
		<div className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<Link
					href="/#projects"
					className="mb-8 inline-flex items-center text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
				>
					<svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
					</svg>
					Back to home
				</Link>
				<h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
					All projects
				</h1>
				<p className="mt-2 text-[var(--muted)]">
					Case studies and project highlights.
				</p>
				<div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}
