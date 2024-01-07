/** @format */

import Container from '@/components/atoms/Container';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import React from 'react';
import Slider from './Slider';
import { TagAnimation } from '@/components/atoms/TagAnimation';
import { MotionDiv } from '@/components/atoms/MotionDiv';

export default function Gallery() {
	return (
		<Container
			id='projects'
			role='projects'>
			<div className='flex flex-col gap-5 items-center lg:items-start'>
				<Tag role='projects'>
					<span className='absolute -top-3'>
						<TagAnimation tag={'Projetos'} />
					</span>
				</Tag>
				<div className='flex justify-between items-center lg:gap-20 gap-5 flex-col lg:flex-row'>
					<MotionDiv
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<Title
							role='projects'
							text='Galeria de Transformações: Projetos de '
							span='Destaque'
						/>
					</MotionDiv>
					<MotionDiv
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, delay: 0.4 }}>
						<p className='prose prose-sm lg:prose-lg text-brand-neutralSiga-100'>
							Navegue por nossa seleção de projetos exclusivos, destacando nossa
							capacidade de criar ambientes que ultrapassam expectativas
						</p>
					</MotionDiv>
				</div>
				<Slider />
			</div>
		</Container>
	);
}
