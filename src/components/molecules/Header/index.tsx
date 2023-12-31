/** @format */

import React from 'react';
import Navigation from '@/components/atoms/Navigation';
import Image from 'next/image';
import logoHeader from '../../../../public/logos/logoHeader.png';

export default function Header() {
	return (
		<div className=' fixed top-0 w-screen left-0 py-4 bg-brand-neutralSiga-900/40 backdrop-blur-sm border-b border-brand-neutralSiga-100/30'>
			<div className='max-w-7xl flex w-full justify-between items-center mx-auto'>
				<a href='/'>
					<Image
						src={logoHeader}
						alt='Logo'
						width={80}
						height={80}></Image>
				</a>
				<Navigation />
			</div>
		</div>
	);
}
