/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkGold: "#D9A934",
				lightGold: "#FFC63D",
				grayBg: "#121218",
			},
			backgroundImage: {
				headerBg: 'url("/src/assets/header-bg.jpg")',
				getStartedBg: 'url("/src/assets/getstarted.jpg")',
			},
		},
	},
	plugins: [],
};
