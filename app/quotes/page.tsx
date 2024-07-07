"use client";

import React, { useEffect, useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { motion } from "framer-motion";

interface Quote {
	id: number;
	quote: string;
	author: string;
	anime: string;
	jpn: string;
	pfp: string;
}

const blurInVariants = {
	hidden: { opacity: 0, filter: "blur(10px)" },
	visible: {
		opacity: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.8,
		},
	},
};

export default function Page() {
	const [quote, setQuote] = useState<Quote | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchQuote = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`);
			if (!response.ok) {
				throw new Error("Failed to fetch random quote");
			}
			const data = await response.json();
			setQuote(data);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	const handleClick = () => {
		setLoading(true);
		setTimeout(fetchQuote, 1000);
	};

	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<>
			<div className="relative z-10 rounded-xl px-5 md:px-0 max-w-4xl grid grid-cols-2 md:grid-cols-10 mx-auto py-10">
				<BorderBeam size={700} duration={5} delay={9} />
				{loading ? (
					<div className="col-span-10 flex items-center justify-center">
						<Card className="text-white bg-transparent border-none text-center h-[300px] pt-14">
							<CardHeader>
								<CardTitle className="text-2xl md:text-5xl tracking-wider">
									Loading...
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>Please wait while we fetch a random quote.</p>
							</CardContent>
						</Card>
					</div>
				) : error ? (
					<div className="col-span-10 flex items-center justify-center">
						<Card className="text-white bg-transparent border-none text-center h-[300px] pt-14">
							<CardHeader>
								<CardTitle className="text-2xl md:text-5xl tracking-wider">
									Error
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>{error}</p>
							</CardContent>
						</Card>
					</div>
				) : (
					<>
						<motion.div
							className="col-span-4"
							initial="hidden"
							animate="visible"
							variants={blurInVariants}
						>
							<img
								src={quote?.pfp}
								alt={`Image of ${quote?.author}`}
								className="h-full w-3/5 md:h-[300px] md:w-[300px] rounded-lg mx-auto"
							/>
						</motion.div>
						<motion.div
							className="col-span-6"
							initial="hidden"
							animate="visible"
							variants={blurInVariants}
						>
							<Card className="md:h-[300px] text-white bg-transparent border-none text-justify">
								<CardHeader>
									<CardTitle className="text-2xl md:text-5xl tracking-wider">
										{quote?.anime}
									</CardTitle>
									<CardDescription className="text-neutral-500">
										{quote?.quote}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p>{quote?.jpn}</p>
								</CardContent>
								<CardFooter className="flex justify-end md:me-10">
									<p>{quote?.author}</p>
								</CardFooter>
							</Card>
						</motion.div>
					</>
				)}
			</div>
			<div className="flex max-w-4xl justify-center mx-auto mt-10 ">
				<ShimmerButton className="shadow-2xl" onClick={handleClick}>
					<span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
						Random Quote
					</span>
				</ShimmerButton>
			</div>
		</>
	);
}
