/** @format */

import Container from '@/components/atoms/Container';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import React from 'react';
import BenefitsCard from './BenefitCard';
import atendimentoIcon from '@/../public/icons/atendimento-svg.svg';
import projetoIcon from '@/../public/icons/projetos-svg.svg';
import consultoriaIcon from '@/../public/icons/consultoria-svg.svg';
import orcamentoIcon from '@/../public/icons/orcamento-svg.svg';

export default function Benefits() {
	const benefits = [
		{
			title: 'Atendimento Humanizado',
			description:
				'Nossa equipe dedicada está sempre pronta para ouvir suas necessidades e oferecer suporte, garantindo que cada etapa da sua jornada conosco seja uma experiência positiva e personalizada',
			icon: atendimentoIcon,
		},
		{
			title: 'Projetos Personalizados',
			description:
				'Cada projeto é adaptado às suas necessidades e desejos específicos. Oferecemos uma abordagem personalizada para transformar seu ambiente',
			icon: projetoIcon,
		},
		{
			title: 'Consultoria Especializada',
			description:
				'Conte com nossa equipe de especialistas para orientação em cada decisão. Desde a escolha de materiais até a disposição dos móveis, oferecemos uma consultoria completa',
			icon: consultoriaIcon,
		},
		{
			title: 'Orçamento Transparente',
			description:
				'Nossos orçamentos são claros e transparentes, sem surpresas. Você sabe exatamente o que esperar financeiramente antes de iniciarmos a transformação do seu espaço',
			icon: orcamentoIcon,
		},
	];
	return (
		<Container id='servs'>
			<div className='flex flex-col  w-full'>
				<div className='flex flex-col gap-5 w-full'>
					<Tag>Excelência</Tag>
					<Title
						text={'Descubra Nossas Vantagens '}
						span='Exclusivas'
					/>
					<p className='prose prose-lg'>
						De prazos cumpridos a soluções personalizadas, explore como cada
						projeto conosco oferece benefícios que transformam sua experiência
						de reforma.
					</p>
				</div>
				<div className='flex flex-wrap justify-between gap-6 mt-12 w-full'>
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
