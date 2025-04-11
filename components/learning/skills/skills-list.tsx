import { getSkills } from "@/lib/learning/functions/skill";
import Link from "next/link";

export default async function SkillsList() {
	const skills = await getSkills();

	return (
		<ul>
			{skills.map((skill) => (
				<li key={skill.id}>
					<Link href={`/learning/skills/${skill.slug}`}>
						{skill.name}
					</Link>
				</li>
			))}
		</ul>
	);
}
