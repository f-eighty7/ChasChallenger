const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"radial-gradient": "radial-gradient(circle, #F2F2B0 40%, #AFD182 70%)",
			},
			colors: {
				lime: {
					...colors.lime,
					200: "#F2F2B0",
					900: "#AFD182",
				},
			},
		},
	},
	plugins: [],
});
