const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
            },
            colors: {
                lime: {
                    200: "#F2F2B0",
                    900: "#AFD182",
                },
                custom: {
                    yellow: "#F2F2B0",
                    green: "#AFD182",
                    border: "#cccccc",
                    black: "#000000",
                    darkestGreen: "#3A4013",
                },
            },
        },
    },
    plugins: [],
});
