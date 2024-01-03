/** @format */

import Header from '@/components/molecules/Header';
import Heading from './Heading';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';
import { SlArrowDown } from 'react-icons/sl';

export default function Hero() {
	return (
		<Container role='hero'>
			<>
				<div
					id='hero'
					className='absolute w-screen h-screen bg-brand-neutralSiga-900/60 bg-blend-overlay bg-no-repeat bg-fill bg-center bg-fixed top-0 left-0 bg-bgHero -z-10'></div>
				<div className='max-w-4xl h-full w-full text-center flex flex-col gap-6 drop-shadow-md items-center justify-center'>
					<Heading />
					<p className='font-body font-light prose prose-xl mb-5 text-brand-neutralSiga-100'>
						Com serviços que vão de pintura à instalações, estamos comprometidos
						em redefinir limites e transformar seus espaços interiores
					</p>
					<Button role='hero'>Solicitar Orçamento</Button>
				</div>
				<div className=' flex flex-col pt-20 text-white'>
					<a
						href='#who'
						className='animate-bounce drop-shadow-sm'>
						<SlArrowDown size={32} />
					</a>
				</div>
			</>
		</Container>
	);
}
