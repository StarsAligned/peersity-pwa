import Link from "next/link";

export default function NavbarUserLinks() {
	const frontendHomeUrl = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:10401";

	return (
		<ul>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/learning/skills">Skills</Link>
			</li>
			<li>
				<Link
					href={`http://localhost:10402/portal/auth/github/login?redirect=${encodeURIComponent(
						frontendHomeUrl
					)}`}
				>
					Login
				</Link>
			</li>
			<li>
				<Link
					href={`http://localhost:10402/portal/auth/logout?redirect=${encodeURIComponent(
						frontendHomeUrl
					)}`}
				>
					Logout
				</Link>
			</li>
		</ul>
	);
}