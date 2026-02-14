export interface Testimonial {
	id: string;
	quote: string;
	name: string;
	title: string;
	company?: string;
	avatar?: string;
	linkedIn?: string;
}

export const testimonials = [
	{
		id: "1",
		quote: "References available from Gojob Vietnam leadership. Contact for professional recommendation.",
		name: "Thái Đình Sang",
		title: "CEO",
		company: "Gojob Vietnam",
		avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&fit=crop&crop=face",
	},
	{
		id: "2",
		quote: "Brought both technical depth and collaboration. Delivered backend services and APIs on time, with clean and maintainable code.",
		name: "Team",
		title: "Briswell-VN",
		company: "",
		avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=face",
	},
	{
		id: "3",
		quote: "Clear process, followed documentation and best practices. Gained hands-on experience and contributed to the warehouse system effectively.",
		name: "Team",
		title: "ISD CORP",
		company: "",
		avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&fit=crop&crop=face",
	},
] as const;
