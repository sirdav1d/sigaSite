/** @format */

import Container from '@/components/atoms/Container';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import React from 'react';
import BenefitsCard from '../../molecules/Card';
import { benefits } from '@/constants/benefits';

export default function Benefits() {
	return (
		<Container id='benefits'>
			<div className='flex flex-col h-full w-full'>
				<div className='flex flex-col gap-5 w-full items-center xl:items-start'>
					<Tag>Excelência</Tag>
					<Title
						text={'Descubra Nossas Vantagens '}
						span='Exclusivas'
					/>
					<p className='prose lg:prose-lg prose-sm text-center lg:text-left'>
						De prazos cumpridos a soluções personalizadas, explore como cada
						projeto conosco oferece benefícios que transformam sua experiência
						de reforma.
					</p>
				</div>
				<div className='flex flex-wrap xl:justify-between gap-8 mt-10 w-full justify-center'>
					{benefits.map((b, index) => {
						return (
							<BenefitsCard
								key={index}
								title={b.title}
								description={b.description}
								icon={b.icon}
							/>
						);
					})}
				</div>
			</div>
		</Container>
	);
}
