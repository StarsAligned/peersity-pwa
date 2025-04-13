import { getSkills } from "@/lib/learning/functions/skill";
import SkillsGridSearch from "./skills-grid-search";

export default async function SkillsGrid({ className }: Readonly<{ className?: string }>) {
	const skills = await getSkills();

	return (
		<SkillsGridSearch className={className} allSkills={skills} />
	);
}
