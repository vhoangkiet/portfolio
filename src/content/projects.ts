export interface Project {
	slug: string;
	title: string;
	shortDescription: string;
	description?: string;
	year: string;
	tags: string[];
	image: string;
	client?: string;
	challenge?: string;
	solution?: string;
	results?: string;
	tech?: string[];
	liveUrl?: string;
	repoUrl?: string;
}

export const projects: Project[] = [
	{
		slug: "talent-fusion",
		title: "Talent Fusion",
		shortDescription: "AI-powered recruitment platform for the Southeast Asian market, enhancing job matching efficiency.",
		year: "2024",
		tags: ["Java", "Laravel", "Firebase", "WebSocket", "Next.js"],
		image: "https://images.unsplash.com/photo-1551431009-a22ee0f54b36?w=800&h=600&fit=crop",
		client: "Gojob Vietnam",
		challenge: "Building a recruitment platform that efficiently matches candidates with jobs across Southeast Asia, with real-time communication between recruiters and candidates.",
		solution: "Developed and maintained backend services using Java, PHP (Laravel), and Firebase. Implemented real-time chat with WebSocket for candidate-recruiter communication. Collaborated with frontend on Next.js and Tailwind CSS integration. Optimized API endpoints and database design for scalability. Integrated AI-powered job matching features.",
		results: "Seamless performance and data synchronization; improved interaction efficiency through real-time chat; scalable API and database design.",
		tech: ["Java", "PHP", "Laravel", "Firebase", "WebSocket", "Next.js", "Tailwind CSS"],
	},
	{
		slug: "card-hub",
		title: "Card Hub",
		shortDescription: "Digital card platform for instant information sharing via QR code scanning. Create, share, and manage digital cards.",
		year: "2024",
		tags: ["Laravel", "Firebase", "WebSocket", "Flutter"],
		image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
		client: "Gojob Vietnam",
		challenge: "Enabling easy, instant information sharing between users through digital cards and QR codes for networking and contact sharing.",
		solution: "Developed backend for the digital card platform using Laravel (user data, card information). Integrated WebSocket for real-time communication and notifications. Used Firebase for authentication and real-time database updates. Collaborated with frontend on QR code scanning and card-sharing. Designed and optimized APIs for user profiles and card management.",
		results: "Improved platform performance and scalability through optimized backend processes.",
		tech: ["PHP", "Laravel", "Firebase", "WebSocket", "Flutter"],
	},
	{
		slug: "mimaki-ecommerce-warehouse",
		title: "Mimaki — E-commerce & Warehouse Management",
		shortDescription: "Comprehensive e-commerce and warehouse management system for a Japanese partner: admin site, API services, webview for mobile.",
		year: "2024",
		tags: ["Laravel", "Blade", "MySQL", "S3"],
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
		client: "Briswell-VN (Japanese partner)",
		challenge: "Delivering a full system: admin website for products, orders, customers, inventory; API services for warehouse app; webview for mobile customer interactions.",
		solution: "Developed and maintained RESTful APIs with Laravel. Designed and implemented Blade templates for the mobile app webview. Implemented S3 storage for media and file management. Contributed to both backend and frontend—data handling to UI—throughout the project.",
		results: "Scalable system with optimized performance; complete admin, API, and mobile webview delivered.",
		tech: ["Laravel", "Blade", "MySQL", "S3"],
	},
	{
		slug: "digiworld-pda-warehouse",
		title: "Digiworld PDA Warehouse",
		shortDescription: "Warehouse management system for Digiworld: inventory, order processing, and integration with PDA devices for real-time data.",
		year: "2023",
		tags: ["PHP", "Laravel", "PostgreSQL", "API"],
		image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
		client: "ISD CORP",
		challenge: "Supporting warehouse operations with inventory management, order processing, and real-time data input via PDA devices.",
		solution: "Assisted in backend services for the warehouse management system following documentation and established processes. Implemented backend functionalities with PHP and PostgreSQL for inventory (storage, retrieval). Supported API integration between backend and PDA devices. Followed team best practices for consistency and code quality.",
		results: "Hands-on experience in backend development and collaboration in a real-world environment.",
		tech: ["PHP", "Laravel", "PostgreSQL", "API"],
	},
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
	return projects.map((p) => p.slug);
}
