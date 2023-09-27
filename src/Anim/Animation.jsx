export const slideIn = {
	hidden: {
		opacity: 0,
		x: "-100%",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 2 } },
};

export const scaleUp = {
	hidden: { scale: 0 },
	visible: { scale: 1 },
};
