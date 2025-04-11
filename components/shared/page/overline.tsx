import { TextColorClassName } from "@/lib/shared/colors";
import { LucideIcon } from "lucide-react";

export default function Overline({
	children,
	textColor,
	icon: Icon,
}: Readonly<{
	children: React.ReactNode;
	textColor?: TextColorClassName;
	icon?: LucideIcon;
}>) {
	return (
		<div className={`text-sm font-medium ${textColor} flex items-center gap-1`}>
			{Icon && <Icon size={16} className="inline-block" />}
			<span>{children}</span>
		</div>
	);
}