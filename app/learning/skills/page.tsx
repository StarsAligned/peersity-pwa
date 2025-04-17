import SkillsPageContent from "@/components/learning/skills/skills-grid";
import Header from "@/components/shared/page/header";
import Main from "@/components/shared/page/main";
import Title from "@/components/shared/page/title";
import { TextColorClassName } from "@/lib/shared/colors";
import { BookUp2 } from "lucide-react";
import { Suspense } from "react";

export default function SkillsPage() {
	return (
		<Main>
			<Header className="mx-auto max-w-6xl">
				<Title className="justify-center" textColor={TextColorClassName.Skill}>
					<BookUp2 size={36} className="text-violet-500" />
					Skills
				</Title>
			</Header>

			<Suspense>
				<SkillsPageContent />
			</Suspense>
		</Main>
	);
}
