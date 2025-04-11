import { TextColorClassName } from "@/lib/shared/colors";

export default function Title({
	children,
	textColor,
}: Readonly<{
	children: React.ReactNode;
	textColor: TextColorClassName;
}>) {
	return (
		<h1 className={`text-3xl font-bold gap-2 flex items-center ${textColor}`}>
			{children}
		</h1>
	);
}