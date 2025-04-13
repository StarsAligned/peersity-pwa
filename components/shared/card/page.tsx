export default function Card({
	children,
	className,
}: Readonly<{
	children: React.ReactNode;
	className?: string;
}>) {
	return (
		<div className={`rounded-lg shadow p-6 bg-neutral-100 dark:bg-neutral-800 ${className}`}>
			{children}
		</div>
	);
}
