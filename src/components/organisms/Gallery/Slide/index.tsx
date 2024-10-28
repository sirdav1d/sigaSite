/** @format */

import Image from 'next/image';
import ModalComponent from '../ModalGallery';

interface SlideProps {
	img: string;
	title: string;
	description: string;
}

export default function Slide(props: SlideProps) {
	console.log(props.img);
	return (
		<div className='lg:w-3/4 flex items-center h-full w-full mb-auto justify-center rounded-2xl relative mx-auto'>
			{/*eslint-disable-next-line jsx-a11y/alt-text*/}
			<Image
				alt={props.title}
				src={props.img}
				width={400}
				height={250}
				className='object-contain object-top size-full'
			/>
			<div className='absolute top-[20px] right-[68px] flex items-center justify-center '>
				<ModalComponent
					img={props.img}
					title={props.title}
					description={props.description}></ModalComponent>
			</div>
		</div>
	);
}
