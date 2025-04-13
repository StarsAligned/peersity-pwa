import SkillsPageContent from "@/components/learning/skills/skills-grid";
import Header from "@/components/shared/page/header";
import Main from "@/components/shared/page/main";
import Title from "@/components/shared/page/title";
import { TextColorClassName } from "@/lib/shared/colors";

export default function SkillsPage() {
	return (
		<Main>
			<Header className="mx-auto max-w-6xl">
				<Title className="justify-center" textColor={TextColorClassName.Skill}>
					Skills
				</Title>
			</Header>

			<SkillsPageContent />
		</Main>
	);
}
