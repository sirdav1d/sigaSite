/** @format */

import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	icon?: JSX.Element;
	role?: string;
	href?: string;
}

export default function Button({ children, icon, role, href }: ButtonProps) {
	return (
		<div
			data-role={role}
			className='py-4 pl-6 pr-8 bg-gradient-to-r w-fit from-brand-blueSiga-500 bg-[length:300px_400px] bg-left data-[role=whatsapp]:to-[#008000] to-brand-orangeSiga-500 rounded active:shadow-lg shadow-sm hover:bg-right transition-all bg-no-repeat duration-300 cursor-pointer ease-linear hover:shadow-md text-brand-neutralSiga-100 font-title font-bold'>
			<a
				data-role={role}
				className='flex gap-3 items-center justify-center drop-shadow-sm data-[role=whatsapp]:text-base text-xl'
				href={href}
				referrerPolicy='no-referrer'>
				{icon}
				{children}
			</a>
		</div>
	);
}
