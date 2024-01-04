/** @format */

import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import React from 'react';
import { proofs } from '@/constants/proofs';
import Comment from './Comment';

export default function Proof() {
	return (
		<Container>
			<>
				<div className='h-full w-screen bg-brand-orangeSiga-100 absolute -z-10 left-0 top-0 '></div>
				<div className='flex flex-col gap-5'>
					<Tag>Confiança</Tag>
					<Title
						text='O Que Dizem '
						span='Sobre Nós'
					/>
				</div>
				<div className='flex flex-col items-center w-full gap-20'>
					<div className='flex justify-between mt-10 items-center w-full gap-12'>
						{proofs.map((p, index) => {
							return (
								<Comment
									key={index}
									avatar={p.img}
									text={p.text}
									name={p.name}
								/>
							);
						})}
					</div>
					<Button href='https://api.whatsapp.com/send?phone=551198665500&text=Ol%C3%A1!%20Estava%20na%20sua%20Landing%20Page%20e%20vi%20bons%20coment%C3%A1rios.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento'>
						Reformar Agora
					</Button>
				</div>
			</>
		</Container>
	);
}
