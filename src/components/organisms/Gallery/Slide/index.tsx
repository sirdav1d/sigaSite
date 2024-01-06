/** @format */

import React from 'react';
import { Image } from 'react-datocms';
import ModalComponent from '../ModalGallery';

interface SlideProps {
	img: any;
	title: string;
	description: string;
}

export default function Slide(props: SlideProps) {
	return (
		<div className='lg:w-3/4 flex items-center h-full w-full justify-center rounded-2xl relative object-bottom'>
			<Image
				data={props.img}
				className='w-full h-full lg:h-auto object-contain'
			/>
			<div className='absolute top-[20px] right-[20px] flex items-center justify-center w-1/5 h-1/5'>
				<ModalComponent
					img={props.img}
					title={props.title}
					description={props.description}></ModalComponent>
			</div>
		</div>
	);
}
