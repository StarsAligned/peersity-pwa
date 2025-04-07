"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLinksDesktop() {
	return (
		<>
			<NavbarLinkDesktop href="/">Home</NavbarLinkDesktop>
			<NavbarLinkDesktop href="/learning/skills">Skills</NavbarLinkDesktop>
		</>
	);
}

function NavbarLinkDesktop({ href, children }: { href: string; children: React.ReactNode }) {
	const currentPath = usePathname();
	const isActive = href === "/" ? currentPath === "/" : currentPath.startsWith(href);

	return (
		<Link
			href={href}
			className={isActive ? "rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-800"
				: "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
}