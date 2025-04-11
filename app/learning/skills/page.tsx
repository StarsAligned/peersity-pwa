import SkillsList from "@/components/learning/skills/skills-list";
import Card from "@/components/shared/card/page";
import Main from "@/components/shared/page/main";
import Title from "@/components/shared/page/title";
import { TextColorClassName } from "@/lib/shared/colors";
import { Suspense } from "react";

const header = <Title textColor={TextColorClassName.Skill}>Skills</Title>;

export default function SkillsPage() {
	return (
		<Main header={header} className="mx-auto max-w-6xl">
			<div className="px-4 sm:px-6 lg:px-8">
				<Card>
					<h2 className="text-2xl font-semibold mb-4">Skills</h2>
					<Suspense fallback={<div>...</div>}>
						<SkillsList />
					</Suspense>
				</Card>
			</div>
		</Main>
	);
}
