export default function Main({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="h-60 shadow-sm bg-gray-800 dark:bg-gray-950"></div>
			<main className="-mt-48 px-4 sm:px-6 lg:px-8">
				{children}
			</main>
		</>
	);
}
