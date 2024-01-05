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
				className='flex justify-between lg:data-[role=Elegância]:flex-row-reverse items-center w-full flex-col lg:flex-row'>
				<div className='flex flex-col w-full gap-5 lg:w-1/2 items-center lg:items-start'>
					<Tag>{props.tag}</Tag>
					<Title
						text={props.title}
						span={props.spanTitle}
					/>
					<p className='prose lg:prose-lg prose-sm text-center lg:text-left'>
						{props.description}
					</p>
					<Button href={props.linkBtn}>Contratar Serviço</Button>
				</div>
				<div>
					<Image
						className='mt-5 lg:mt-0 w-[320px] lg:w-[420px]'
						src={props.image}
						alt={'props.spanTitle'}
						width={500}
						height={500}></Image>
				</div>
			</div>
		</Container>
	);
}
