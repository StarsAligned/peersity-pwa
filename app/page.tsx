export default function HomePage() {
	return (
		<>
			<header className="pb-32 shadow-sm bg-gray-800 dark:bg-gray-950">
				<div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-emerald-500 to-green-500">
						Dashboard
					</h1>
				</div>
			</header>
			<main className="-mt-32">
				<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
					<div className="rounded-lg shadow p-6 bg-neutral-200 dark:bg-neutral-800">
						<h2 className="text-2xl font-semibold mb-4">Card Title</h2>
						<p>
							This is a sample card built with Tailwind CSS. You can include any content here,
							such as text, images, or additional components.
						</p>
						<p>
							Is a sample card built with Tailwind CSS. You can include any content here,
							such as text, images, or additional components.
						</p>
						<p>
							Sample card built with Tailwind CSS. You can include any content here,
							such as text, images, or additional components.
						</p>
						<p>
							Card built with Tailwind CSS. You can include any content here,
							such as text, images, or additional components.
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
