import LogoPeersity from "../../logo-peersity";
import NavbarLinksDesktop from "./navbar-links-desktop";
import NavbarLinksMobile from "./navbar-links-mobile";

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
								<NavbarLinksDesktop />
							</div>
						</div>
					</div>

					{/* Right Side (Desktop): Notifications & User Dropdown */}
					<div className="hidden md:flex items-center space-x-4">
						<button
							type="button"
							className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						>
							<span className="absolute -inset-1.5" />
							<span className="sr-only">View notifications</span>
							<svg
								className="size-6"
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
									d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
								/>
							</svg>
						</button>

						{/* User Dropdown */}
						<div className="hs-dropdown relative">
							<button
								type="button"
								className="hs-dropdown-toggle relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								id="user-menu-button"
								data-hs-dropdown-toggle="#user-menu-dropdown"
								aria-label="Toggle user menu"
							>
								<span className="sr-only">Open user menu</span>
								<img
									className="size-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt="User avatar"
								/>
							</button>
							<div
								id="user-menu-dropdown"
								className="hs-dropdown-menu hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition transform ease-out duration-100 opacity-0 scale-95 hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
							>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
								>
									Your Profile
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
								>
									Settings
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
								>
									Sign out
								</a>
							</div>
						</div>
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
						<NavbarLinksMobile />
					</div>
					<div className="border-t border-gray-700 pt-4 pb-3">
						<div className="flex items-center px-5">
							<div className="shrink-0">
								<img
									className="size-10 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt="User avatar"
								/>
							</div>
							<div className="ml-3">
								<div className="text-base font-medium text-white">Tom Cook</div>
								<div className="text-sm font-medium text-gray-400">
									tom@example.com
								</div>
							</div>
							<button
								type="button"
								className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								<span className="absolute -inset-1.5" />
								<span className="sr-only">View notifications</span>
								<svg
									className="size-6"
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
										d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
									/>
								</svg>
							</button>
						</div>
						<div className="mt-3 space-y-1 px-2">
							<a
								href="#"
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
							>
								Your Profile
							</a>
							<a
								href="#"
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
							>
								Settings
							</a>
							<a
								href="#"
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
							>
								Sign out
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}