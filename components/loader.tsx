import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NumberTicker from "./magicui/number-ticker";

export default function Loader({ isLoading }: any) {
	return (
		<AnimatePresence mode="wait">
			{isLoading && (
				<motion.div
					key="loader"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fixed inset-0 flex items-center justify-center bg-black"
				>
					<p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white">
						<NumberTicker value={100} />
					</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
