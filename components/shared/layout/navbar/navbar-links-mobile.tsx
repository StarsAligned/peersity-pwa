"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLinksMobile() {
	return (
		<>
			<NavbarLinkMobile href="/">Home</NavbarLinkMobile>
			<NavbarLinkMobile href="/learning/skills">Skills</NavbarLinkMobile>
		</>
	);
}

function NavbarLinkMobile({ href, children }: { href: string; children: React.ReactNode }) {
	const currentPath = usePathname();
	const isActive = href === "/" ? currentPath === "/" : currentPath.startsWith(href);

	return (
		<Link
			href={href}
			className={isActive ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
				: "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
}
