"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon, Newspaper, BookUp2 } from "lucide-react";

export default function NavbarLinksMobile() {
	return (
		<>
			<NavbarLinkMobile href="/" icon={Newspaper}>
				Timeline
			</NavbarLinkMobile>
			<NavbarLinkMobile href="/learning/skills" icon={BookUp2}>
				Skills
			</NavbarLinkMobile>
		</>
	);
}

function NavbarLinkMobile({
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
					? "rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white flex items-center"
					: "rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
			}
			aria-current={isActive ? "page" : undefined}
		>
			<Icon className="w-5 h-5 mr-2" aria-hidden="true" />
			{children}
		</Link>
	);
}