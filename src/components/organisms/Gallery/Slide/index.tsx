/** @format */

import React from 'react';
import Image from 'next/image';
import ModalComponent from '../ModalComponent';

interface SlideProps {
	img: any;
	title: string;
	description: string;
}

export default function Slide(props: SlideProps) {
	return (
		<div className='w-full flex items-center h-full justify-center  relative'>
			<Image
				className='rounded-lg shadow-md w-full h-full object-cover'
				src={props.img}
				alt={props.title}
				width={800}
				height={320}></Image>
			<div className='absolute bottom-14 max-w-[400px] w-full flex items-center justify-center'>
				<ModalComponent
					img={props.img}
					title={props.title}
					description={props.description}></ModalComponent>
			</div>
		</div>
	);
}
