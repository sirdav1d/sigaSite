/** @format */

import WhoImage from '@/../public/images/trabalhador_cruzando_bracos.png';
import Container from '@/components/atoms/Container';
import { MotionDiv } from '@/components/atoms/MotionDiv';
import Tag from '@/components/atoms/Tag';
import { TagAnimation } from '@/components/atoms/TagAnimation';
import Title from '@/components/atoms/Title';
import Image from 'next/image';

export default function Who() {
	return (
		<Container id='who'>
			<>
				<div className='h-full w-screen bg-brand-orangeSiga-100 absolute -z-10 left-0 top-0 '></div>
				<div className='flex justify-between w-full h-full items-center flex-col lg:flex-row'>
					<div className='flex flex-col gap-5 lg:w-1/2 w-full items-center justify-center lg:items-start '>
						<Tag>
							<span className='absolute -top-3'>
								<TagAnimation tag='Transparência' />
							</span>
						</Tag>
						<MotionDiv
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: 40 }}
							transition={{ duration: 0.5, delay: 0.2 }}>
							<Title
								text={'Quem Somos? A Siga, Sua Escolha em '}
								span={'Reformas de Qualidade'}></Title>
						</MotionDiv>
						<MotionDiv
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: 40 }}
							transition={{ duration: 0.5, delay: 0.4 }}>
							<p className='prose lg:prose-lg prose-sm'>
								Somos uma empresa dedicada à arte de transformar espaços em
								ambientes que contam histórias únicas. Com uma trajetória
								marcada por expertise e dedicação, nos tornamos referência no
								setor de reformas unindo inovação, qualidade e comprometimento
								em cada projeto que assumimos. Nossa equipe é composta por
								profissionais especializados, prontos para entender e
								materializar a visão de nossos clientes, garantindo resultados
								que não apenas atendam, mas superem suas expectativas
								priorizando a integridade, transparência e a entrega dentro dos
								prazos estabelecidos.
								<br />
								<br />
								Na Siga Reformas e Pinturas, cada espaço é tratado com a
								singularidade e cuidado que merece, assegurando que cada
								transformação reflita a personalidade e necessidade de quem
								confia em nosso trabalho. Convidamos você a conhecer mais sobre
								nossa história e a fazer parte desta jornada de excelência em
								reformas.
							</p>
						</MotionDiv>
					</div>
					<div>
						<MotionDiv
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							initial={{ opacity: 0, y: 40, scale: 0.5 }}
							transition={{ duration: 0.5, delay: 0.6 }}>
							<Image
								src={WhoImage}
								width={480}
								height={480}
								className='w-[320px] mt-5 lg:mt-0 lg:w-[440px]'
								alt='Trabalhador de máscara, cruzando os braços'></Image>
						</MotionDiv>
					</div>
				</div>
			</>
		</Container>
	);
}
