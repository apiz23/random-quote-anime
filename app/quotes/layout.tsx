import BlurIn from "@/components/magicui/blur-in";
import FlipText from "@/components/magicui/flip-text";
import { Spotlight } from "@/components/magicui/spotlight";

export default function QuoteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="min-h-screen bg-black pt-5 md:pt-0 px-5 overflow-hidden md:pb-0 pb-20">
				<Spotlight className="left-0 md:left-60 -top-20" fill="white" />
				<div className="max-w-7xl mx-auto py-14 md:py-24 md:px-10 shadow-xl">
					<FlipText
						className="text-4xl font-bold md:tracking-wide text-white md:text-7xl"
						word="Otaku Quotes Hub"
					/>
					<BlurIn
						word="Random Anime Quote Generator"
						className="mt-4 font-normal text-normal mb-10 text-neutral-300 max-w-lg text-center mx-auto"
					/>
					{children}
				</div>
			</div>
		</>
	);
}
