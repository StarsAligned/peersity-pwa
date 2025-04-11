import Card from "@/components/shared/card/page";
import Main from "@/components/shared/page/main";
import Title from "@/components/shared/page/title";
import { TextColorClassName } from "@/lib/shared/colors";

const header = <Title textColor={TextColorClassName.Timeline}>Timeline</Title>;

export default function TimelinePage() {
	return (
		<Main header={header} className="mx-auto max-w-6xl">
			<div className="px-4 sm:px-6 lg:px-8">
				<Card>
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
			</div>
		</Main>
	);
}
