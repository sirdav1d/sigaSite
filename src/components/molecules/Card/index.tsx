/** @format */

import Image from 'next/image';
import ModalServs from '@/components/organisms/Servs/ModalServs';

interface BenefitCardProps {
	title: string;
	description: string;
	icon: any;
	role?: string;
	cover?: any;
}

export default function Card({
	title,
	description,
	icon,
	role,
	cover,
}: BenefitCardProps) {
	return (
		<div
			data-role={role}
			className='bg-brand-neutralSiga-200 rounded-lg gap-2 data-[role=servs]:gap-3 shadow-card max-w-[580px] lg:data-[role=servs]:max-w-64 w-full h-full lg:h-[180px] p-4 flex items-start flex-col md:data-[role=servs]:h-[300px] data-[role=servs]:mt-5 data-[role=servs]:cursor-pointer lg:data-[role=servs]:hover:scale-110 lg:data-[role=servs]:hover:shadow-brand-orangeSiga-500 lg:data-[role=servs]:hover:shadow-xl transition-all duration-300 ease-in-out delay-200 data-[role=servs]:justify-between data-[role=servs]:hover:shadow-card'>
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
			<div className='w-full flex items-center justify-center'>
				{role === 'servs' ? (
					<ModalServs
						img={cover}
						alt={title}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
}
