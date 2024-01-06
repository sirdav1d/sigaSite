/** @format */

import React from 'react';

interface TitleProps {
	text?: string;
	span?: string;
	role?: string;
}

export default function Title({ text, span, role }: TitleProps) {
	return (
		<div className='font-title font-extrabold mx-5 lg:mx-0'>
			<h2
				data-role={role}
				className='data-[role=projects]:text-brand-neutralSiga-100  data-[role=faq]:text-center text-center lg:text-left text-2xl lg:text-3xl'>
				{text}
				{''}
				<span className='bg-clip-text text-transparent bg-gradient-to-r from-brand-blueSiga-500 to-brand-orangeSiga-500'>
					{''} {span}
				</span>
			</h2>
		</div>
	);
}
