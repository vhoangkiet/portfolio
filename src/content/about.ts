export const about = {
	headline: "About me",
	bio: "I'm a Backend Developer with 2 years of experience in Laravel and PHP, and knowledge of Java and Spring Boot. I focus on developing scalable backend systems, designing RESTful APIs, and integrating third-party services. I build efficient, maintainable solutions and optimize performance. I work in Agile environments and collaborate with cross-functional teams, and I'm always eager to learn new technologies.",
	journey: [
		{ period: "Sep 2024 – Present", role: "Backend Developer", detail: "Gojob Vietnam — Laravel backend services, RESTful APIs, microservices. Occasional Next.js/TypeScript frontend support. Deploy and manage apps on Ubuntu." },
		{ period: "Jan 2024 – Aug 2024", role: "Backend Developer", detail: "Briswell-VN — Develop and maintain Laravel applications. Design and optimize RESTful APIs for web and mobile. Collaborate with Frontend, QA, DevOps. Agile/Scrum." },
		{ period: "Aug 2023 – Dec 2023", role: "Backend Developer (Contractor)", detail: "ISD CORP — Backend for warehouse management system. PHP & PostgreSQL, APIs for PDA devices. Followed team best practices and documentation." },
		{ period: "May 2023 – Aug 2023", role: "Mobile React Native Intern", detail: "ALTA Software — Two React Native apps. Problem-solving, reporting, and presenting technical ideas." },
	],
	skills: [
		{ category: "Backend", items: ["PHP", "Laravel", "Java", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JPA", "NestJS"] },
		{ category: "Mobile", items: ["Android Java", "React Native"] },
		{ category: "Database", items: ["MySQL", "PostgreSQL", "SQLite"] },
		{ category: "API & Real-time", items: ["RESTful API", "WebSockets", "Socket.IO", "Firebase", "FireStorage"] },
		{ category: "Frontend", items: ["jQuery", "JavaScript", "HTML", "CSS", "Next.js", "TypeScript"] },
		{ category: "DevOps & Tools", items: ["Git", "GitHub", "Redmine", "GitHub/GitLab Actions", "Maven", "Gradle"] },
	],
	values: ["Scalable systems", "Clean, maintainable code", "Agile collaboration", "Performance optimization"],
	cvUrl: "/cv.pdf",
	photo: "https://lh3.googleusercontent.com/d/1PhMHqvn_iusXpdkrfX3W3BlVstyD4IPZ",
} as const;
