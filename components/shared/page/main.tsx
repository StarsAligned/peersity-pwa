export default function Main({
	children,
	className,
	header,
}: Readonly<{
	children: React.ReactNode;
	className?: string;
	header: React.ReactNode;
}>) {
	return (
		<>
			<header className="pb-32 shadow-sm bg-gray-800 dark:bg-gray-950">
				<div className={`px-4 py-10 sm:px-6 lg:px-8 ${className}`}>
					{header}
				</div>
			</header>
			<main className={`-mt-32 ${className}`}>
				{children}
			</main>
		</>
	);
}
