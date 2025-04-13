"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react';

export default function ThemeButton({ mobile }: { mobile?: boolean }) {
	const [mounted, setMounted] = useState(false)
	const { setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	if (mobile) {
		return (
			<>
				<button
					type="button"
					className="dark:hidden block p-1 relative ml-auto shrink-0 rounded-full 
						text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
					onClick={() => setTheme("dark")}
					title="Dark theme"
				>
					<span className="absolute -inset-1.5" />
					<span className="sr-only">Dark theme</span>
					<Moon className="size-6" />
				</button>
				<button
					type="button"
					className="dark:block hidden p-1 relative ml-auto shrink-0 rounded-full 
						text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
					onClick={() => setTheme("light")}
					title="Light theme"
				>
					<span className="absolute -inset-1.5" />
					<span className="sr-only">Light theme</span>
					<Sun className="size-6" />
				</button>
			</>
		);
	}

	return (
		<>
			<button
				type="button"
				className="dark:hidden inline-flex size-9.5 relative justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none 
					text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
				onClick={() => setTheme("dark")}
				title="Dark theme"
			>
				<span className="sr-only">Dark theme</span>
				<Moon className="size-6" />
			</button>
			<button
				type="button"
				className="dark:inline-flex hidden size-9.5 relative justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none 
					text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
				onClick={() => setTheme("light")}
				title="Light theme"
			>
				<span className="sr-only">Light theme</span>
				<Sun className="size-6" />
			</button>
		</>
	)
}