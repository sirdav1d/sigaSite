/** @format */

import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import Image from 'next/image';
import React from 'react';

interface FeatureProps {
	tag?: string;
	title?: string;
	spanTitle?: string;
	description?: string;
	image?: any;
	linkBtn?: string;
}

export default function Feature(props: FeatureProps) {
	return (
		<Container
			role='feature'
			id={props.tag}>
			<div
				data-role={props.tag}
				className='flex justify-between data-[role=Elegância]:flex-row-reverse items-center w-full'>
				<div className='flex flex-col w-1/2 gap-5'>
					<Tag>{props.tag}</Tag>
					<Title
						text={props.title}
						span={props.spanTitle}
					/>
					<p className='prose prose-lg'>{props.description}</p>
					<Button href={props.linkBtn}>Contratar Serviço</Button>
				</div>
				<div>
					<Image
						src={props.image}
						alt={'props.spanTitle'}
						width={500}
						height={500}></Image>
				</div>
			</div>
		</Container>
	);
}
