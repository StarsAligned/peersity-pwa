"use client";

import { useEffect, useState } from "react";
import getCurrentUser from "@/lib/portal/functions/user";
import type UserInfo from "@/lib/portal/models/user";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { BackgroundColorClassName, HoverBackgroundColorClassName, TextColorClassName } from "@/lib/shared/colors";
import ThemeButton from "@/components/shared/layout/navbar/theme-button";

export default function UserMenu({ mobile }: { mobile?: boolean }) {
	const [user, setUser] = useState<UserInfo | null>(null);
	const [loading, setLoading] = useState(true);
	const homeUrl = process.env.NEXT_PUBLIC_PWA_URL || "";
	const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

	useEffect(() => {
		async function fetchUser() {
			try {
				const currentUser = await getCurrentUser();
				setUser(currentUser);
			} catch (error) {
				console.error("Error fetching user", error);
			}
			setLoading(false);
		}
		fetchUser();
	}, []);

	if (loading) {
		return (
			<div className={`${mobile ? "ml-3" : ""} animate-spin inline-block size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500`} role="status" aria-label="loading">
				<span className="sr-only">Loading...</span>
			</div>
		);
	}

	if (!user || user.code === "Anonymous" || loading) {
		return (
			<>
				<Link
					href={`${apiUrl}/portal/auth/github/login?redirect=${encodeURIComponent(
						homeUrl
					)}`}
					onClick={() => setLoading(true)}
					type="button"
					className={`${mobile ? "ml-3" : ""} py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none 
						text-white ${BackgroundColorClassName.Social} ${HoverBackgroundColorClassName.Social}`}
				>
					Login
				</Link>
				{mobile && <ThemeButton mobile />}
			</>
		);
	}

	if (mobile) {
		return (
			<>
				<div className="flex items-center px-5">
					<div className="shrink-0">
						<Image
							className="size-10 rounded-full"
							src={user.avatar_url}
							alt="User avatar"
							width={40}
							height={40}
						/>
					</div>
					<div className="ml-3">
						<div className={`text-base font-medium  ${TextColorClassName.Social}`}>
							{user.name}
						</div>
						<div className="text-sm font-medium text-gray-400">
							{user.code}
						</div>
					</div>
					<ThemeButton mobile />
				</div>
				<div className="mt-3 space-y-1 px-2">
					<Link
						className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
						href={`${apiUrl}/portal/auth/logout?redirect=${encodeURIComponent(
							homeUrl
						)}`}
						onClick={() => setLoading(true)}
					>
						<LogOut className="w-5 h-5 mr-2" />
						Logout
					</Link>
				</div>
			</>
		);
	}

	return (
		<div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
			<button
				id="hs-dropdown-account"
				type="button"
				className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 hover:ring-offset-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-800"
				aria-haspopup="menu"
				aria-expanded="false"
				aria-label="Dropdown"
			>
				<Image
					className="size-8 rounded-full shrink-0"
					src={user.avatar_url}
					alt="User avatar"
					width={32}
					height={32}
				/>
			</button>
			<div
				className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full bg-neutral-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="hs-dropdown-account"
			>
				<div className="py-3 px-5 rounded-t-lg bg-gray-300 dark:bg-neutral-700">
					<p className={`text-sm font-medium ${TextColorClassName.Social}`}>
						{user.name}
					</p>
					<p className="text-sm text-gray-500 dark:text-neutral-500">
						{user.code}
					</p>
				</div>
				<div className="p-1.5 space-y-0.5">
					<Link
						className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
						href={`${apiUrl}/portal/auth/logout?redirect=${encodeURIComponent(
							homeUrl
						)}`}
						onClick={() => setLoading(true)}
					>
						<LogOut className="shrink-0 size-4" />
						Logout
					</Link>
				</div>
			</div>
		</div>
	);
}