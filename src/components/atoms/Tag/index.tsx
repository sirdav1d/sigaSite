/** @format */

import React from 'react';

interface TagProps {
	children: React.ReactNode;
	role?: string;
}

export default function Tag({ children, role }: TagProps) {
	return (
		<div
			data-role={role}
			className='data-[role=projects]:text-brand-blueSiga-300 lg:text-sm text-xs drop-shadow-sm text-brand-blueSiga-500 font-title font-semibold'>
			{children}
		</div>
	);
}
