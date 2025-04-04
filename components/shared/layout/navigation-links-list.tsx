import Link from "next/link";

export default async function NavigationLinksList() {
	return (
		<ul>
			<li>
				<Link href={`/`}>
					Home
				</Link>
			</li>
			<li>
				<Link href={`/learning/skills`}>
					Skills
				</Link>
			</li>
		</ul>
	);
}
