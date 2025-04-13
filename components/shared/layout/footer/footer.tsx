import Link from "next/link";
import LogoPeersity from "../../logo-peersity";
import ThemeButton from "../navbar/theme-button";
import Image from "next/image";
import { Twitter } from "lucide-react";

export default function Footer() {
	return (
		<footer className="py-10 bg-gray-800 dark:bg-gray-950">
			<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 items-center">
					<div className="flex items-center justify-center md:justify-start space-x-2">
						<Image
							src="/icons/peersity-logo.svg"
							alt="Peersity Logo"
							width={30}
							height={30}
						/>
						<LogoPeersity />
					</div>
					<div className="text-center text-gray-400">
						<p>
							© Copyright 2025 PEERSITY. All Rights Reserved.
						</p>
					</div>
					<div className="flex items-center justify-center md:justify-end">
						<ThemeButton />
						<Link
							href="https://x.com/PeersityCom"
							className="inline-flex size-9.5 relative justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none
								text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
							title="Twitter"
							target="_blank"
						>
							<span className="sr-only">Twitter</span>
							<Twitter className="size-6" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}