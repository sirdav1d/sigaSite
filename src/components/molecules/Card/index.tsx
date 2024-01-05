/** @format */

import Image from 'next/image';
import React from 'react';

interface BenefitCardProps {
	title: string;
	description: string;
	icon: any;
	role?: string;
}

export default function Card({
	title,
	description,
	icon,
	role,
}: BenefitCardProps) {
	return (
		<div
			data-role={role}
			className='bg-brand-neutralSiga-200 rounded-lg gap-2 data-[role=servs]:gap-3 shadow-card max-w-[580px] lg:data-[role=servs]:max-w-64 w-full h-full lg:h-[180px] p-4 flex items-start flex-col md:data-[role=servs]:h-[248px] data-[role=servs]:mt-5 data-[role=servs]:h-fit'>
			<Image
				className='drop-shadow-icon'
				src={icon}
				alt={title}
				width={32}
				height={32}></Image>
			<h3
				data-role={role}
				className='font-title font-bold lg:text-lg text-brand-blueSiga-500 data-[role=servs]:text-sm text-sm'>
				{title}
			</h3>
			<p
				data-role={role}
				className='prose lg:prose-sm data-[role=servs]:text-xs text-sm'>
				{description}
			</p>
		</div>
	);
}
