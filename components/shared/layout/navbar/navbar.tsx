import UserMenu from "@/components/portal/auth/user-menu";
import LogoPeersity from "../../logo-peersity";
import NavbarLinks from "./navbar-links";
import ThemeButton from "./theme-button";

export default function Navbar() {
	return (
		<nav className="bg-gray-800 dark:bg-gray-950">
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between border-b border-gray-700">
					{/* Logo + Desktop Menu */}
					<div className="flex items-center">
						<div className="shrink-0">
							<LogoPeersity />
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<NavbarLinks />
							</div>
						</div>
					</div>

					{/* Right Side (Desktop): Notifications & User Dropdown */}
					<div className="hidden md:flex items-center space-x-4">
						<ThemeButton />

						<UserMenu />
					</div>

					{/* Mobile Menu Toggle Button */}
					<div className="-mr-2 flex md:hidden">
						<button
							type="button"
							className="hs-collapse-toggle relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							data-hs-collapse="#mobile-menu"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Toggle navigation</span>
							{/* Icon when menu is closed */}
							<svg
								className="hs-collapse-open:hidden block size-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
							{/* Icon when menu is open */}
							<svg
								className="hs-collapse-open:block hidden size-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Container */}
			<div
				id="mobile-menu"
				className="hs-collapse hidden md:hidden overflow-hidden transition-all duration-300 border-b border-gray-700"
			>
				<div className="opacity-0 transition-opacity duration-300 hs-collapse-open:opacity-100">
					<div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
						<NavbarLinks mobile />
					</div>
					<div className="border-t border-gray-700 pt-4 pb-3">
						<UserMenu mobile />
					</div>
				</div>
			</div>
		</nav>
	);
}
