/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				pt: ['"PT Serif"', "serif"],
				lobster: ['"Lobster Two"', "cursive"],
			},
			animation: {
				text: "text 5s ease infinite",
				fadein: "fadein 1s ease-in-out",
			},
			keyframes: {
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				fadein: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
