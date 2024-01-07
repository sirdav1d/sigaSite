/** @format */

import Container from '@/components/atoms/Container';
import Title from '@/components/atoms/Title';
import React from 'react';
import { faqs } from '@/constants/faqs';
import AccordionComponent from './AccordionComponent';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import logoZap from '@/../public/images/logoZap.svg';
import { MotionDiv } from '@/components/atoms/MotionDiv';

export default function Faq() {
	return (
		<Container
			id='faq'
			role='faq'>
			<>
				<div className='flex flex-col gap-5 mb-10'>
					<MotionDiv
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<Title
							role='faq'
							text='Perguntas Frequentes'
							span='FAQ'
						/>
					</MotionDiv>
					<MotionDiv
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, delay: 0.4 }}>
						<p className='prose prose-sm lg:prose-lg text-center'>
							Desmistificamos os conceitos, proporcionando respostas claras e
							concisas para suas perguntas frequentes sobre reformas em geral
						</p>
					</MotionDiv>
				</div>
				{faqs.map((f, index) => {
					return (
						<MotionDiv
							className='w-full'
							key={index}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3, delay: 0.6 * index }}>
							<AccordionComponent
								title={f.title}
								description={f.description}
							/>
						</MotionDiv>
					);
				})}

				<div className='flex flex-col gap-5 items-center justify-center py-10'>
					<Title text='Ainda tem dúvidas?'></Title>
					<p className='text-center prose prose-sm'>
						Chame Direto pelo Whatsapp e fale com nosso setor comercial
					</p>
					<Button
						href='https://api.whatsapp.com/send?phone=5511998665500&text=Ol%C3%A1!%20Estava%20na%20sua%20Landing%20Page%20e%20ap%C3%B3s%20ver%20as%20perguntas%20frequentes,%20gostaria%20de%20fazer%20um%20or%C3%A7amento'
						role='whatsapp'
						icon={
							<Image
								src={logoZap}
								width={24}
								height={24}
								alt='Logo Whatsapp'></Image>
						}>
						Chamar Agora
					</Button>
				</div>
			</>
		</Container>
	);
}
