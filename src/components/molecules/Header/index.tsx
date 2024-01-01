/** @format */

import React from 'react';
import Navigation from '@/components/atoms/Navigation';
import Image from 'next/image';
import logoHeader from '../../../../public/logos/logoHeader.png';
import Button from '@/components/atoms/Button';
import logoZap from '@/../../public/images/logoZap.svg'

export default function Header() {
	return (
		<div  className=' fixed z-50 top-0 w-screen left-0 py-3 bg-brand-neutralSiga-900/60 backdrop-blur-sm border-b border-brand-neutralSiga-100/30'>
			<div className='max-w-7xl flex w-full justify-between items-center mx-auto'>
				<a href='/'>
					<Image
						src={logoHeader}
						alt='Logo'
						width={80}
						height={80}></Image>
				</a>
				<Navigation />
				<Button role='whatsapp' icon={<Image src={logoZap} width={24} height={24} alt='Logo Whatsapp'></Image>}>Whatsapp</Button>
			</div>
		</div>
	);
}
