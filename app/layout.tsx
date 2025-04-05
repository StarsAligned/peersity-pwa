import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationLinksList from "@/components/shared/layout/navigation-links-list";
import UserInfo from "@/components/portal/auth/user-info";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import ThemeButton from "@/components/shared/layout/theme-button";
import PrelineWrapper from "@/components/shared/layout/preline-wrapper";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
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
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}
			>
				<ThemeProvider attribute="class">
					<NavigationLinksList />
					___
					<UserInfo />
					___
					{children}
					___
					<ThemeButton />
				</ThemeProvider>
			</body>
			<PrelineWrapper />
		</html>
	);
}
