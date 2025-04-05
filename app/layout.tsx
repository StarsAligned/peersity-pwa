import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationLinksList from "@/components/shared/layout/navigation-links-list";
import UserInfo from "@/components/auth/user-info";
import { Suspense } from "react";

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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NavigationLinksList />
				___
				<Suspense fallback={<div>Loading user...</div>}>
					<UserInfo />
				</Suspense>
				___
				{children}
			</body>
		</html>
	);
}
