export default function Header({
	children,
	className,
}: Readonly<{
	children: React.ReactNode;
	className?: string;
}>) {
	return (
		<header className={`mb-10 ${className}`}>
			{children}
		</header>
	);
}
