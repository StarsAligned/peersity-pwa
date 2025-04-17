import Card from "@/components/shared/card/page";
import Main from "@/components/shared/page/main";
import Title from "@/components/shared/page/title";
import { TextColorClassName } from "@/lib/shared/colors";
import { getSkill, getSkills } from "@/lib/learning/functions/skill";
import { redirect } from "next/navigation";
import { BookUp2 } from "lucide-react";
import Overline from "@/components/shared/page/overline";
import Link from "next/link";
import Header from "@/components/shared/page/header";
import DynamicIcon from "@/components/shared/dynamic-icon";

export default async function SkillPage({ params }: Readonly<{ params: Promise<Params> }>) {
	const { skillSlug } = await params;

	const skill = await getSkill(skillSlug);
	if (!skill) {
		return redirect("/learning/skills");
	}

	return (
		<Main>
			<Header className="mx-auto max-w-6xl">
				<Link
					href="/learning/skills"
					className="text-neutral-500 hover:text-neutral-200 transition-colors"
				>
					<Overline icon={BookUp2}>
						Skill
					</Overline>
				</Link>

				<Title textColor={TextColorClassName.Skill}>
					<DynamicIcon name={skill.icon} size={36} className="text-violet-500" />
					{skill.name}
				</Title>
			</Header>

			<Card className="mx-auto max-w-6xl">
				<p className="text-sm">{skill.description}</p>
			</Card>
		</Main>
	);
}

type Params = {
	skillSlug: string;
};

export async function generateStaticParams() {
	const skills = await getSkills();

	return skills.map((skill) => ({
		params: { skillSlug: skill.slug },
	}));
}

export async function generateMetadata({ params }: Readonly<{ params: Promise<Params> }>) {
	const { skillSlug } = await params;

	const skill = await getSkill(skillSlug);

	return {
		title: skill?.name,
		description: skill?.description,
	};
}
