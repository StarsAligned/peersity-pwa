"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon, BookUp2 } from "lucide-react";

export default function NavbarLinks({ mobile }: { mobile?: boolean }) {
	return (
		<>
			<NavbarLink href="/learning/skills" icon={BookUp2} mobile={mobile}>
				Skills
			</NavbarLink>
		</>
	);
}

function NavbarLink({
	href,
	icon: Icon,
	mobile,
	children,
}: {
	href: string;
	icon: LucideIcon;
	mobile?: boolean;
	children: React.ReactNode;
}) {
	const currentPath = usePathname();
	const isActive = href === "/" ? currentPath === "/" : currentPath.startsWith(href);

	const className = mobile ?
		(isActive
			? "rounded-md px-3 py-2 text-sm font-medium flex items-center text-white bg-gray-900 dark:bg-gray-800"
			: "rounded-md px-3 py-2 text-sm font-medium flex items-center text-gray-300 hover:text-white hover:bg-gray-700")
		: (isActive
			? "rounded-md px-3 py-2 text-base font-medium flex items-center text-white bg-gray-900"
			: "flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700")

	return (
		<Link
			href={href}
			className={className}
			aria-current={isActive ? "page" : undefined}
		>
			<Icon className="w-5 h-5 mr-2" aria-hidden="true" />
			{children}
		</Link>
	);
}
