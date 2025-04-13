import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

export default function DynamicIcon({
	className,
	name,
	size,
}: Readonly<{
	className?: string;
	name: string;
	size: number;
}>) {
	const Icon = (Icons as unknown as Record<string, React.FC<LucideProps>>)[name];

	return (
		<Icon size={size} className={className} />
	);
}