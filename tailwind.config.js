/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

	darkMode: "class",

	theme: {
		colors: {
			black: "#121212",
			darkPurple: "#322653",
			darkGray: "#474747",
			blackPurple: "#282A3A",
			blackGray: "#2C3333",
			pink: "#dd58d6",
			lightPurple: "#893cdc",
			white: "#fefefe",
		},

		fontFamily: {
			fontBold: "manropeBold",
			fontSB: "manropeSemiBold",
			fontM: "manropeMedium",
		},

		extend: {
			screens: {
				sm: "576px",
				md: "768px",
				lg: "992px",
				xlg: "1200px",
			},

			fontSize: {
				tn: "1.2rem",
				sm: "1.4rem",
				md: "1.6rem",
				mdp: "2rem",
				lg: "2.4rem",
				xlg: "2.8rem",
			},

			borderRadius: {
				def: "0.2rem",
			},

			spacing: (() => {
				const spacing = {};
				for (let i = 1; i <= 1000; i++) {
					const rem = parseFloat(i * 0.1);
					spacing[rem] = `${rem}rem`;
				}
				return spacing;
			})(),

			minWidth: (() => {
				const minWidth = {};
				for (let i = 1; i <= 1000; i++) {
					const rem = parseFloat(i * 0.1);
					minWidth[rem] = `${rem}rem`;
				}
				return minWidth;
			})(),
		},

		plugins: [],
	},
};
