"use client";

import { useState } from "react";
import SkillListItem from "@/lib/learning/models/skill";
import { Search } from "lucide-react";
import { GroupHoverTextColorClassName } from "@/lib/shared/colors";
import DynamicIcon from "@/components/shared/dynamic-icon";

export default function SkillsGridSearch({
	className,
	allSkills,
}: Readonly<{ className?: string; allSkills: SkillListItem[] }>) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredSkills = allSkills.filter(
		(skill) =>
			skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			skill.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className={className}>
			<div className="mx-auto max-w-6xl">
				<div className="max-w-sm mx-auto space-y-3">
					<div className="relative">
						<input
							id="search"
							name="search"
							type="text"
							className="py-2.5 sm:py-3 px-4 ps-11 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="Search"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
							<Search size={24} className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" />
						</div>
					</div>
				</div>
			</div>

			<div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-6">
				{filteredSkills.map((skill) => {
					return (
						<a
							className="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
							href={`/learning/skills/${skill.slug}`}
							key={skill.slug}
						>
							<div className="p-4 md:p-5">
								<div className="flex justify-between items-center gap-x-3">
									<div className="grow flex items-center gap-2">
										<DynamicIcon name={skill.icon} size={24} className="text-gray-800 dark:text-neutral-200" />
										<h3 className={`font-semibold text-gray-800 dark:text-neutral-200 ${GroupHoverTextColorClassName.Skill}`}>
											{skill.name}
										</h3>
									</div>
									<div>
										<svg
											className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="m9 18 6-6-6-6" />
										</svg>
									</div>
								</div>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}