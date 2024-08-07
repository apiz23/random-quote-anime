import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Random Quotes Anime",
	description: "Generates random anime",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/logo.jpg" />
				<link rel="manifest" href="/manifest.json" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
