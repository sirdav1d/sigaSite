/** @format */

import Container from '@/components/atoms/Container';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import React from 'react';
import Slider from './Slider';

export default function Gallery() {
	return (
		<Container
			id='projects'
			role='projects'>
			<div className='flex flex-col gap-5'>
				<Tag role='projects'>Projetos</Tag>
				<div className='flex justify-between items-center gap-20'>
					<Title
						role='projects'
						text='Galeria de Transformações: Projetos de '
						span='Destaque'
					/>
					<p className='prose prose-lg text-brand-neutralSiga-100'>
						Navegue por nossa seleção de projetos exclusivos, destacando nossa
						capacidade de criar ambientes que ultrapassam expectativas
					</p>
				</div>
				<Slider />
			</div>
		</Container>
	);
}
