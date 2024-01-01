/** @format */

import Container from '@/components/atoms/Container';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import Image from 'next/image';
import React from 'react';
import WhoImage from '@/../public/images/trabalhador_cruzando_bracos.png'


export default function Who() {
	return (
		<Container>
			<>
				<div
					className='h-screen w-screen bg-brand-orangeSiga-100 absolute -z-10 left-0 top-0'
					id='who'></div>
				<div className='flex justify-between w-full'>
					<div className='flex flex-col gap-5 w-1/2'>
						<Tag>Transparência</Tag>
						<Title
							text={'Quem Somos? A Siga, Sua Escolha em '}
							span={'Reformas de Qualidade'}></Title>
						<p className='prose prose-lg'>
							Somos uma empresa dedicada à arte de transformar espaços em
							ambientes que contam histórias únicas. Como especialistas em
							design de interiores e reformas completas, nosso compromisso está
							enraizado na criação de lares e locais comerciais que não apenas
							atendem às necessidades práticas, mas também refletem a identidade
							e aspirações de nossos clientes.
							<br />
							<br /> Desde a escolha dos materiais até a execução eficiente,
							cada projeto é uma expressão de excelência em design, durabilidade
							e satisfação do cliente. Somos mais que uma empresa de reformas;
							somos parceiros na jornada de criar ambientes memoráveis, onde
							cada detalhe faz a diferença. Siga conosco, e transforme sua visão
							em realidade.
						</p>
					</div>
					<div>
						<Image src={WhoImage} width={480} height={480} alt='Trabalhador de máscara, cruzando os braços'></Image>
					</div>
				</div>
			</>
		</Container>
	);
}
