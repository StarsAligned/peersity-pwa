import ThemeButton from "../navbar/theme-button";

export default function Footer() {
	return (
		<footer className="bg-gray-800 dark:bg-gray-950">
			<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<ThemeButton />
			</div>
		</footer>
	);
}