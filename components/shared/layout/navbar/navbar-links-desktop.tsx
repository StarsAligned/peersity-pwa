"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon, Newspaper, BookUp2 } from "lucide-react";

export default function NavbarLinksDesktop() {
	return (
		<>
			<NavbarLinkDesktop href="/" icon={Newspaper}>
				Timeline
			</NavbarLinkDesktop>
			<NavbarLinkDesktop href="/learning/skills" icon={BookUp2}>
				Skills
			</NavbarLinkDesktop>
		</>
	);
}

function NavbarLinkDesktop({
	href,
	icon: Icon,
	children,
}: {
	href: string;
	icon: LucideIcon;
	children: React.ReactNode;
}) {
	const currentPath = usePathname();
	const isActive = href === "/" ? currentPath === "/" : currentPath.startsWith(href);

	return (
		<Link
			href={href}
			className={
				isActive
					? "rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-800 flex items-center"
					: "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
			}
			aria-current={isActive ? "page" : undefined}
		>
			<Icon className="w-5 h-5 mr-2" aria-hidden="true" />
			{children}
		</Link>
	);
}