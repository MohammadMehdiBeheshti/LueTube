/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		colors: {
			black: "#121212",
			darkPurple: "#322653",
			darkGray: "#474747",
			pink: "#dd58d6",
			lightPurple: "#893cdc",
			white: "#fefefe",
		},

		fontSize: {
			tn: "1.2rem",
			sm: "1.4rem",
			md: "1.6rem",
			mdp: "2rem",
			lg: "2.4rem",
			xlg: "3.2rem",
		},

		borderRadius: {
			def: "0.2rem",
		},

		fontFamily: {
			fontBold: "manropeBold",
			fontSB: "manropeSemiBold",
			fontM: "manropeMedium",
		},

		extend: {
			spacing: (() => {
				const spacing = {};
				for (let i = 1; i <= 1000; i++) {
					const rem = parseFloat(i * 0.1);
					spacing[rem] = `${rem}rem`;
				}
				return spacing;
			})(),
		},
	},

	plugins: [],
};
