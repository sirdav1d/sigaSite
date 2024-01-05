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
			<div className='flex flex-col gap-5 items-center lg:items-start'>
				<Tag role='projects'>Projetos</Tag>
				<div className='flex justify-between items-center lg:gap-20 gap-5 flex-col lg:flex-row'>
					<Title
						role='projects'
						text='Galeria de Transformações: Projetos de '
						span='Destaque'
					/>
					<p className='prose prose-sm lg:prose-lg text-brand-neutralSiga-100 text-center lg:text-left'>
						Navegue por nossa seleção de projetos exclusivos, destacando nossa
						capacidade de criar ambientes que ultrapassam expectativas
					</p>
				</div>
				<Slider />
			</div>
		</Container>
	);
}
