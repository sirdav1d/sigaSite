/** @format */

import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import Image from 'next/image';
import React from 'react';
import { TagAnimation } from '../../atoms/TagAnimation';
import { MotionDiv } from '@/components/atoms/MotionDiv';

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
				<div className='flex flex-col w-full gap-5 lg:w-1/2 relative'>
					<Tag>
						<span className='absolute -top-3'>
							<TagAnimation tag={props.tag} />
						</span>
					</Tag>
					<MotionDiv
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<Title
							text={props.title}
							span={props.spanTitle}
						/>
					</MotionDiv>
					<MotionDiv
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, delay: 0.4 }}>
						<p className='prose lg:prose-lg prose-sm'>{props.description}</p>
					</MotionDiv>
					<MotionDiv
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, delay: 0.6 }}>
						<Button href={props.linkBtn}>Contratar Serviço</Button>
					</MotionDiv>
				</div>
				<MotionDiv
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					initial={{ opacity: 0, y: 40, scale: 0.5 }}
					transition={{ duration: 0.3, delay: 0.6 }}>
					<Image
						className='mt-5 lg:mt-0 w-[320px] lg:w-[420px]'
						src={props.image}
						alt={'props.spanTitle'}
						width={500}
						height={500}></Image>
				</MotionDiv>
			</div>
		</Container>
	);
}
