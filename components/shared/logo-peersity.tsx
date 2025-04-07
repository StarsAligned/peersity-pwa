import { Graduate } from "next/font/google";

const fontGraduate = Graduate({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400"],
});

export default function LogoPeersity() {
	return (
		<span className={`${fontGraduate.className} text-3xl select-none bg-clip-text text-transparent bg-gradient-to-tr from-amber-500 to-orange-500`}>PEERSITY</span>
	);
}