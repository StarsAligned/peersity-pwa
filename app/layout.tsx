import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import PrelineWrapper from "@/components/shared/layout/preline/preline-wrapper";
import Navbar from "@/components/shared/layout/navbar/navbar";
import Footer from "@/components/shared/layout/footer/footer";

const fontInter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "PEERSITY",
	description: "Learning resources recommendations and reviews.",
	icons: {
		icon: "/icons/peersity-logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full" suppressHydrationWarning={true}>
			<body
				className={`${fontInter.className} h-full antialiased text-neutral-900 bg-white dark:text-neutral-200 dark:bg-gray-950`}
			>
				<ThemeProvider attribute="class">
					<div className="min-h-screen bg-[url('/backgrounds/shattered.webp')] dark:bg-[url('/backgrounds/shattered-dark.webp')]">
						<Navbar />
						{children}
					</div>
					<Footer />
				</ThemeProvider>
			</body>
			<PrelineWrapper />
		</html>
	);
}
