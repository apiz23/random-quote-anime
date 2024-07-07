"use client";
import Loader from "@/components/loader";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 4000);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return <Loader isLoading={isLoading} />;
	}
	redirect("/quotes");
}
