import { TextColorClassName } from "@/lib/shared/colors";

export default function Title({
	children,
	className,
	textColor,
}: Readonly<{
	children: React.ReactNode;
	className?: string;
	textColor: TextColorClassName;
}>) {
	return (
		<h1 className={`text-3xl font-bold gap-2 flex items-center ${textColor} ${className}`}>
			{children}
		</h1>
	);
}