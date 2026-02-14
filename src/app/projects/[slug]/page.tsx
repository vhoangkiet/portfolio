import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/content/projects";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);
	if (!project) return { title: "Project | Portfolio" };
	return {
		title: `${project.title} | Portfolio`,
		description: project.shortDescription,
	};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);
	if (!project) notFound();

	const allSlugs = getProjectSlugs();
	const currentIndex = allSlugs.indexOf(slug);
	const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
	const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;

	return (
		<article className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-4xl">
				<Link
					href="/projects"
					className="mb-8 inline-flex items-center text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
				>
					<svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
					</svg>
					Back to all projects
				</Link>

				<header className="mb-10">
					<div className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
						{project.year}
						{project.client ? ` · ${project.client}` : null}
						{project.tags.map((t) => (
							<span key={t} className="rounded bg-[var(--surface)] px-2 py-0.5">
								{t}
							</span>
						))}
					</div>
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
						{project.title}
					</h1>
					<p className="mt-2 text-lg text-[var(--muted)]">
						{project.shortDescription}
					</p>
				</header>

				<div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[var(--surface)]">
					<Image
						src={project.image}
						alt=""
						fill
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 896px"
						priority
					/>
				</div>

				<div className="prose prose-neutral mt-12 max-w-none dark:prose-invert">
					{project.challenge && (
						<section className="mb-10">
							<h2 className="text-xl font-semibold text-[var(--foreground)]">Challenge</h2>
							<p className="mt-2 text-[var(--foreground)]">{project.challenge}</p>
						</section>
					)}
					{project.solution && (
						<section className="mb-10">
							<h2 className="text-xl font-semibold text-[var(--foreground)]">Solution</h2>
							<p className="mt-2 text-[var(--foreground)]">{project.solution}</p>
						</section>
					)}
					{project.results && (
						<section className="mb-10">
							<h2 className="text-xl font-semibold text-[var(--foreground)]">Results</h2>
							<p className="mt-2 text-[var(--foreground)]">{project.results}</p>
						</section>
					)}
					{project.tech && project.tech.length > 0 && (
						<section className="mb-10">
							<h2 className="text-xl font-semibold text-[var(--foreground)]">Tech & tools</h2>
							<ul className="mt-2 flex flex-wrap gap-2">
								{project.tech.map((t) => (
									<li
										key={t}
										className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm"
									>
										{t}
									</li>
								))}
							</ul>
						</section>
					)}
				</div>

				{(project.liveUrl || project.repoUrl) && (
					<div className="mt-10 flex flex-wrap gap-4">
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-11 items-center justify-center rounded-lg bg-[var(--accent)] px-5 font-medium text-white transition hover:opacity-90"
							>
								View live site
							</a>
						)}
						{project.repoUrl && (
							<a
								href={project.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border)] px-5 font-medium transition hover:bg-[var(--surface)]"
							>
								View repository
							</a>
						)}
					</div>
				)}

				<nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-10">
					{prevSlug ? (
						<Link
							href={`/projects/${prevSlug}`}
							className="inline-flex items-center text-[var(--accent)] transition hover:underline"
						>
							<svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
							</svg>
							Previous project
						</Link>
					) : (
						<span />
					)}
					{nextSlug ? (
						<Link
							href={`/projects/${nextSlug}`}
							className="inline-flex items-center text-[var(--accent)] transition hover:underline"
						>
							Next project
							<svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</Link>
					) : (
						<span />
					)}
				</nav>
			</div>
		</article>
	);
}
