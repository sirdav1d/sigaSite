/** @format */

import React from 'react';
import Navigation from '@/components/atoms/Navigation';
import Image from 'next/image';
import logoHeader from '../../../../public/logos/logoHeader.png';
import Button from '@/components/atoms/Button';
import logoZap from '@/../../public/images/logoZap.svg';

export default function Header() {
	return (
		<div className=' fixed z-50 top-0 w-screen left-0 py-3 bg-brand-neutralSiga-900/75 lg:bg-brand-neutralSiga-900/60 backdrop-blur-sm border-b border-brand-neutralSiga-100/30'>
			<div className='max-w-7xl flex w-full lg:justify-between items-center justify-around gap-8 mx-auto'>
				<a href='/'>
					<Image
						src={logoHeader}
						alt='Logo'
						width={64}
						height={63}></Image>
				</a>
				<Navigation />
				<Button
					role='whatsapp'
					href='https://api.whatsapp.com/send?phone=5511998665500&text=Ol%C3%A1!%20Estava%20na%20sua%20Landing%20Page%20e%20ap%C3%B3s%20ver%20seu%20n%C3%BAmero%20na%20barra%20de%20navega%C3%A7%C3%A3o,%20entrei%20em%20contato%20para%20fazer%20um%20or%C3%A7amento'
					icon={
						<Image
							src={logoZap}
							width={24}
							height={24}
							alt='Logo Whatsapp'></Image>
					}>
					(11) 99866-5500
				</Button>
			</div>
		</div>
	);
}
