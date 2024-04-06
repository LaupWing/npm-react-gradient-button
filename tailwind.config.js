/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            colors: {
                light: "rgb(var(--custom-light) / <alpha-value>)",
                dark: "rgb(var(--custom-dark) / <alpha-value>)",
                accent: "rgb(var(--custom-green) / <alpha-value>)",
                "accent-light": "rgb(var(--custom-blue) / <alpha-value>)",
                "custom-red": "rgb(var(--custom-red) / <alpha-value>)",
                "custom-orange": "rgb(var(--custom-orange) / <alpha-value>)",
                "custom-green": "rgb(var(--custom-green) / <alpha-value>)",
                "custom-blue": "rgb(var(--custom-blue / <alpha-value>)",
                "custom-purple": "rgb(var(--custom-purple) / <alpha-value>)",
            },
        },
    },
    plugins: [],
}
