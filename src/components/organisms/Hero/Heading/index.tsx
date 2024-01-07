/** @format */

import React from 'react';
import { MotionDiv } from '@/components/atoms/MotionDiv';

export default function Heading() {
	return (
		<MotionDiv
			animate={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: 40 }}
			transition={{ duration: 0.3 }}
			className='flex'>
			<h1 className='font-title font-extrabold lg:text-5xl text-3xl text-brand-neutralSiga-100'>
				Redefinindo Limites,{' '}
				<span className='bg-clip-text text-transparent bg-gradient-to-r from-brand-blueSiga-500 to-brand-orangeSiga-500'>
					Transformando
				</span>{' '}
				Interiores
			</h1>
		</MotionDiv>
	);
}
