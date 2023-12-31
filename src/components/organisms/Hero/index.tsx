/** @format */

import Header from '@/components/molecules/Header';
import Heading from './Heading';
import Container from '@/components/atoms/Container';

export default function Hero() {
	return (
		<Container>
			<>
				<div className='absolute w-screen h-screen bg-brand-neutralSiga-900/60 bg-blend-overlay bg-no-repeat bg-fill bg-center bg-fixed top-0 left-0 bg-bgHero -z-10'></div>
				<div className='max-w-4xl text-center flex flex-col gap-5 drop-shadow-md'>
					<Heading />
					<p className='text-brand-blueSiga-100 font-body font-light text-2xl '>
						Com serviços que vão de pintura à instalações, estamos comprometidos
						em redefinir limites e transformar seus espaços interiores
					</p>
				</div>
			</>
		</Container>
	);
}
