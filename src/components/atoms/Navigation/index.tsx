/** @format */

import React from 'react';
import LinkComponent from '../LinkComponent';

export default function Navigation() {
	const links = [
		{ text: 'Home', href: '#hero' },
		{ text: 'Serviços', href: '#servs' },
		{ text: 'Projetos', href: '#projects' },
		{ text: 'Quem Somos', href: '#who' },
		{ text: 'FAQ', href: '#faq' },
	];
	return (
		<ul className=' flex-col md:flex-row gap-5 hidden lg:flex'>
			{links.map((link, index) => {
				return (
					<li
						className='hover:text-brand-blueSiga-300 font-bold transition-all duration-300 ease-in-out text-brand-neutralSiga-100'
						key={index}>
						<LinkComponent
							href={link.href}
							text={link.text}
						/>
					</li>
				);
			})}
		</ul>
	);
}
