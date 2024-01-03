/** @format */
'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import testImg from '@/../public/images/interior-sala.png';
import { slides } from '@/constants/slides';
import Slide from '../Slide';

export default function Slider() {
	return (
		<div className='w-full h-[320px] 2xl:h-[380px] mt-5'>
			<Carousel
				slideInterval={4000}
				pauseOnHover>
				{slides.map((s, index) => {
					return (
						<Slide
							img={s.img}
							title={s.title}
							description={s.description}
							key={index}
						/>
					);
				})}
			</Carousel>
		</div>
	);
}
