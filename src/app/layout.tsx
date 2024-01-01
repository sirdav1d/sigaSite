/** @format */

import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/molecules/Header';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '500', '900'],
	display: 'swap',
	variable: '--roboto-body',
});

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['300', '500', '700','800', '900'],
	display: 'swap',
	variable: '--montserrat-title',
});

export const metadata: Metadata = {
	title: 'Siga - Reformas e Pinturas',
	description:
		'Somos mais que uma empresa de reformas; somos parceiros na jornada de criar ambientes memoráveis, onde cada detalhe faz a diferença.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-BR'>
			<head>
				<link
					rel='icon'
					href='/logos/faviconLogo.ico'
					type='image/x-icon'
				/>
			</head>
			<body className={`${montserrat.variable} ${roboto.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
