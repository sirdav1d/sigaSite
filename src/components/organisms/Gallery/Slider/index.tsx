/** @format */

import { Carousel } from 'flowbite-react';
import Slide from '../Slide';
import { allGallerySigas, queryGallery, request } from '@/lib/datoCMS';

export default async function Slider() {
	const data: any = await request({ query: queryGallery });
	const slides = data.allGallerySigas;

	return (
		<div className='w-full mx-auto lg:h-[320px] 2xl:h-[380px] mt-5 h-[260px]'>
			<Carousel
				indicators
				slideInterval={4000}
				pauseOnHover>
				{slides.map((s: allGallerySigas) => {
					return (
						<Slide
							img={s.imageGallerySiga.responsiveImage}
							title={s.titleGallerySiga}
							description={s.descriptionGallerySiga}
							key={s.id}
						/>
					);
				})}
			</Carousel>
		</div>
	);
}
