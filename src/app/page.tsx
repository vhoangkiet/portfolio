import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
	return (
		<>
			<Hero />
			<AboutSection />
			<ProjectsSection />
			<TestimonialsSection />
			<ContactSection />
		</>
	);
}
