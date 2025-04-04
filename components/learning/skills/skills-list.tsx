import SkillListItem from "@/lib/learning/models/skill";
import Link from "next/link";

export default async function SkillsList() {
	const data = await fetch('http://localhost:10402/skill', {
		cache: 'force-cache',
	})
	const skills: SkillListItem[] = await data.json()

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
