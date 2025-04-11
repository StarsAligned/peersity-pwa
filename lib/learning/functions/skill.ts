import type SkillListItem from "../models/skill";

export async function getSkills(): Promise<SkillListItem[]> {
	const data = await fetch('http://localhost:10402/learning/skill', {
		cache: 'force-cache',
	})

	const skills: SkillListItem[] = await data.json()

	return skills;
}

export async function getSkill(slug: string): Promise<SkillListItem | null> {
	const skills = await getSkills();
	const skill = skills.find((skill) => skill.slug === slug);

	return skill || null;
}