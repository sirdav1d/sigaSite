/** @format */

import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import { SlArrowDown } from 'react-icons/sl';
import Heading from './Heading';
import { MotionDiv } from '@/components/atoms/MotionDiv';

export default function Hero() {
	return (
		<Container role='hero'>
			<>
				<div
					id='hero'
					className='absolute w-screen h-full bg-brand-neutralSiga-900/60 bg-blend-overlay bg-no-repeat bg-cover bg-center lg:bg-fixed top-0 left-0 bg-bgHero -z-10'></div>
				<div className='max-w-4xl h-full w-full mx-auto text-center flex flex-col gap-6 drop-shadow-md items-center justify-center'>
					<Heading />
					<MotionDiv
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.3, delay: 0.2 }}>
						<p className='font-body font-light prose lg:prose-xl mb-5 text-white'>
							Com serviços que vão de pintura à instalações, estamos
							comprometidos em redefinir limites e transformar seus espaços
							interiores
						</p>
					</MotionDiv>
					<MotionDiv
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.3, delay: 0.6 }}>
						<Button
							href='https://api.whatsapp.com/send?phone=5511998665500&text=Ol%C3%A1%20,%20estava%20na%20sua%20Landing%20Page%20e%20cliquei%20no%20primeiro%20bot%C3%A3o%20para%20fazer%20um%20or%C3%A7amento!'
							role='hero'>
							Solicitar Orçamento
						</Button>
					</MotionDiv>
					<MotionDiv
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 24 }}
						transition={{
							duration: 0.5,
							delay: 0.8,
							repeat: Infinity,
							repeatType: 'reverse',
						}}>
						<a
							href='#benefits'
							className='animate-bounce drop-shadow-sm text-brand-neutralSiga-100 mt-10'>
							<SlArrowDown size={32} />
						</a>
					</MotionDiv>
				</div>
			</>
		</Container>
	);
}
