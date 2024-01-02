/** @format */

import Image from 'next/image';
import React from 'react';

interface BenefitCardProps {
	title: string;
	description: string;
	icon: any;
}

export default function BenefitsCard({
	title,
	description,
	icon,
}: BenefitCardProps) {
	return (
		<div className='bg-brand-neutralSiga-200 rounded-lg gap-3 shadow-BenefitsCard max-w-[560px] w-full h-[200px] p-5 flex items-start flex-col'>
			<Image
				className='drop-shadow-BenefitsIcon'
				src={icon}
				alt={title}
				width={40}
				height={40}></Image>
			<h3 className='font-title font-bold text-xl text-brand-blueSiga-500'>
				{title}
			</h3>
			<p className='prose prose-sm'>{description}</p>
		</div>
	);
}
