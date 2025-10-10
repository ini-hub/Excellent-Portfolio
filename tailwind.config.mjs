// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    ],
    theme: {
        extend: {
        colors: {
            // Define your custom colors
            'deep-blue': '#004d99',
            'yellow-accent': '#ffcc00',
            'background': '#f4f4f9',
        },
        fontFamily: {
            // Define your custom font
            sans: ['Poppins', 'sans-serif'],
        },
        },
    },
    plugins: [],
};