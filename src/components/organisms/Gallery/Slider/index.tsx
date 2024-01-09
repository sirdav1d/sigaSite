/** @format */
'use client';

import { allGallerySigas } from '@/lib/datoCMS';
import { Carousel } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import Slide from '../Slide';

export default function Slider({ subscription }: { subscription: any }) {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => setHydrated(true), []);
	const { query, initialData, token } = subscription;

	const { data, error, status } = useQuerySubscription({
		query: query,
		enabled: true,
		token,
		initialData,
	});

	const slides: allGallerySigas[] = data.allGallerySigas;
	console.log(status);
	console.log(slides);

	return (
		hydrated && (
			<div className='w-full mx-auto lg:h-[320px] 2xl:h-[400px] mt-5 h-[288px] '>
				<Carousel
					indicators
					slideInterval={4000}
					pauseOnHover>
					{data &&
						slides.map((s) => {
							return (
								<Slide
									title={s.titleGallerySiga}
									description={s.descriptionGallerySiga}
									img={s.imageGallerySiga.responsiveImage}
									key={s.id}
								/>
							);
						})}
				</Carousel>
			</div>
		)
	);
}
