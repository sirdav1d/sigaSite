/** @format */

import React from 'react';

interface TitleProps {
	text?: string;
	span?: string;
}

export default function Title({ text, span }: TitleProps) {
	return (
		<div className='font-title font-extrabold text-3xl'>
			<h2>
				{text}
				{''}
				<span className='bg-clip-text text-transparent bg-gradient-to-r from-brand-blueSiga-500 to-brand-orangeSiga-500'>
					{''} {span}
				</span>
			</h2>
		</div>
	);
}