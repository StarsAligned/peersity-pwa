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
		<div className={`mb-3 font-medium flex items-center gap-1 ${textColor}`}>
			{Icon && <Icon size={16} className="inline-block" />}
			<span>{children}</span>
		</div>
	);
}