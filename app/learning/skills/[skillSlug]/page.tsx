import SkillListItem from "@/lib/learning/models/skill";

export default async function SkillPage({ params }: Readonly<{ params: Promise<Params> }>) {
	const { skillSlug } = await params;

	const data = await fetch('http://localhost:10402/learning/skill', {
		cache: 'force-cache',
	})
	const skills: SkillListItem[] = await data.json()
	const skill = skills.find((skill) => skill.slug === skillSlug);

	return (
		<main>
			<h1>{skill?.name}</h1>
			<p>{skill?.description}</p>
		</main>
	);
}

type Params = {
	skillSlug: string;
};

export async function generateStaticParams() {
	const data = await fetch('http://localhost:10402/learning/skill', {
		cache: 'force-cache',
	})
	const skills: SkillListItem[] = await data.json()

	return skills.map((skill) => ({
		params: { skillSlug: skill.slug },
	}));
}

export async function generateMetadata({ params }: Readonly<{ params: Promise<Params> }>) {
	const { skillSlug } = await params;

	const data = await fetch('http://localhost:10402/learning/skill', {
		cache: 'force-cache',
	})
	const skills: SkillListItem[] = await data.json()
	const skill = skills.find((skill) => skill.slug === skillSlug);

	return {
		title: skill?.name,
		description: skill?.description,
	};
}


