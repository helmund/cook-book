/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{md,njk,sass,css}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Lora', 'serif'],
				'sans-serif': ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	],
}
