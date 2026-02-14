import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin", "vietnamese"],
	display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
	variable: "--font-display",
	subsets: ["latin", "vietnamese"],
	weight: ["500", "600", "700", "800"],
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Vo Hoang Kiet | Backend Developer",
	description: "Backend Developer with Laravel, PHP & Java. RESTful APIs, microservices, and scalable systems. Portfolio, projects, and contact.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${beVietnamPro.variable} ${geistMono.variable} font-sans antialiased`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
