/** @format */

import logo from '@/../public/logos/logoHeader.png';
import Container from '@/components/atoms/Container';
import { siteMap } from '@/constants/siteMap';
import Image from 'next/image';
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedin,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
	return (
		<Container
			id='contact'
			role='footer'>
			<>
				<div className='h-full w-screen bg-brand-blueSiga-900 absolute -z-10 left-0 top-0 '></div>
				<Image
					className='mb-10'
					src={logo}
					alt='logo Siga'></Image>
				<div className='flex justify-between lg:items-end w-full flex-col lg:flex-row gap-10 lg:gap-5  items-center'>
					<div className='flex flex-col gap-10  lg:w-1/3 w-full '>
						<div className='text-brand-neutralSiga-100 flex flex-col gap-5'>
							<div className='flex flex-col gap-1 '>
								<h2 className='font-title font-bold text-lg'>Endereço</h2>
								<p className='text-brand-neutralSiga-200 text-sm lg:text-base'>
									{' '}
									Rua das Roseiras, 282 - Vila Lúcia - São Paulo
								</p>
							</div>
							<div className='flex flex-col gap-1'>
								<h2 className='font-title font-bold text-lg'>E-mail</h2>
								<p className='text-brand-neutralSiga-200 text-sm lg:text-base'>
									sigareformasepinturas@gmail.com
								</p>
							</div>
							<div className='flex flex-col gap-1'>
								<h2 className='font-title font-bold text-lg'>Telefone</h2>
								<p className='text-brand-neutralSiga-200 text-sm lg:text-base'>
									(11) 9866-5500
								</p>
							</div>
						</div>
					</div>
					<div className='grid lg:grid-cols-2  gap-4 lg:w-1/3 w-full '>
						{siteMap.map((s, index) => {
							return (
								<a
									href={s.href}
									className='text-brand-neutralSiga-200 text-sm lg:text-base hover:text-brand-blueSiga-300 transition-all duration-300 ease-in-out font-title'
									key={index}>
									{s.text}
								</a>
							);
						})}
					</div>
					<div className='flex flex-col gap-3 lg:w-1/3 w-full'>
						<h2 className='font-title text-brand-neutralSiga-100 font-bold text-center'>
							Siga-nos Nas Redes Sociais
						</h2>
						<div className=' flex lg:flex-col gap-3 items-center justify-center'>
							<a
								className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
								href='http://'
								target='_blank'
								rel='noopener noreferrer'>
								<FaInstagramSquare size={40} />
							</a>
							<a
								className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
								href='http://'
								target='_blank'
								rel='noopener noreferrer'>
								<FaLinkedin size={40} />
							</a>
							<a
								className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
								href='http://'
								target='_blank'
								rel='noopener noreferrer'>
								<FaFacebookSquare size={40} />
							</a>
							<a
								className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
								href='http://'
								target='_blank'
								rel='noopener noreferrer'>
								<MdEmail size={40} />
							</a>
						</div>
					</div>
				</div>
				<div className='w-full h-[2px] rounded-full bg-white/40 my-4 lg:mt-10 lg:mb-5'></div>
				<div className='w-full flex justify-between text-brand-neutralSiga-200 font-title font-bold text-[9px] gap-2 items-center lg:text-xs flex-col lg:flex-row'>
					<p>
						Desenvolvido por{' '}
						<a
							className='transition-all duration-300 ease-in-out hover:text-brand-blueSiga-300'
							href='http://tarsprojetos.com/'
							target='_blank'
							rel='noopener noreferrer'>
							Tars Projetos LTDA
						</a>
						® 2024 - Todos os Direitos Reservados
					</p>
					<div className='flex gap-5 '>
						<a
							className='transition-all duration-300 ease-in-out hover:text-brand-blueSiga-300'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							Políticas de Privacidade
						</a>
						<a
							className='transition-all duration-300 ease-in-out hover:text-brand-blueSiga-300'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							Termos de uso
						</a>
					</div>
				</div>
			</>
		</Container>
	);
}
