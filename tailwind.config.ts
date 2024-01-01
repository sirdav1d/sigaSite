/** @format */

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				body: ['var(--roboto-body)'],
				title: ['var(--montserrat-title)'],
			},
			backgroundImage: {
				bgHero: "url('/images/interior-sala.png')",
			},
			colors: {
				brand: {
					blueSiga: {
						100: '#E6F6F4',
						300: '#67C8BC',
						500: '#01A48F',
						700: '#016256',
						900: '#00211D',
					},
					orangeSiga: {
						100: '#F4ECE9',
						300: '#BA8B79',
						500: '#BE4313',
						700: '#542513',
						900: '#1C0C06',
					},
					neutralSiga: {
						100: '#E8EBEA',
						300: '#A3ADAC',
						500: '#485C59',
						700: '#1A3330',
						900: '#050A0A',
						whiteSiga: '#fdfdfd',
						blackSiga: '##030505',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
