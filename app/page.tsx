import Card from "@/components/shared/card/page";
import Header from "@/components/shared/page/header";
import Main from "@/components/shared/page/main";
import Title from "@/components/shared/page/title";
import { TextColorClassName } from "@/lib/shared/colors";

export default function TimelinePage() {
	return (
		<Main>
			<Header className="mx-auto max-w-6xl">
				<Title textColor={TextColorClassName.Timeline}>
					Timeline
				</Title>
			</Header>

			<Card className="mx-auto max-w-6xl">
				<h2 className="text-2xl font-semibold mb-4">Card Title</h2>
				<p>
					This is a sample card built with Tailwind CSS. You can include any content here,
					such as text, images, or additional components.
				</p>
				<p>
					Is a sample card built with Tailwind CSS. You can include any content here,
					such as text, images, or additional components.
				</p>
				<p>
					Sample card built with Tailwind CSS. You can include any content here,
					such as text, images, or additional components.
				</p>
				<p>
					Card built with Tailwind CSS. You can include any content here,
					such as text, images, or additional components.
				</p>
			</Card>
		</Main>
	);
}
