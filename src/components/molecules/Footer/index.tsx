/** @format */

import logo from '@/../public/logos/logoHeader.png';
import Container from '@/components/atoms/Container';
import { siteMap } from '@/constants/siteMap';
import Image from 'next/image';
import {
	BiLogoFacebookSquare,
	BiLogoGmail,
	BiLogoInstagramAlt,
} from 'react-icons/bi';

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
				<div className='flex justify-between items-end w-full'>
					<div className='flex flex-col gap-10 '>
						<div className='text-brand-neutralSiga-100 flex flex-col gap-5'>
							<div className='flex flex-col gap-1'>
								<h2 className='font-title font-bold text-lg'>Endereço</h2>
								<p className='text-brand-neutralSiga-200 text-base'>
									{' '}
									Rua das Roseiras, 282 - Vila Lúcia - São Paulo
								</p>
							</div>
							<div className='flex flex-col gap-1'>
								<h2 className='font-title font-bold text-lg'>E-mail</h2>
								<p className='text-brand-neutralSiga-200 text-base'>
									sigareformasepinturas@gmail.com
								</p>
							</div>
							<div className='flex flex-col gap-1'>
								<h2 className='font-title font-bold text-lg'>Telefone</h2>
								<p className='text-brand-neutralSiga-200 text-base'>
									(11) 9866-5500
								</p>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-2  gap-3'>
						{siteMap.map((s, index) => {
							return (
								<a
									href={s.href}
									className='text-brand-neutralSiga-200 hover:text-brand-blueSiga-300 transition-all duration-300 ease-in-out font-title'
									key={index}>
									{s.text}
								</a>
							);
						})}
					</div>
					<div className=' flex flex-col gap-5'>
						<a
							className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<BiLogoInstagramAlt size={48} />
						</a>
						<a
							className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<BiLogoFacebookSquare size={48} />
						</a>
						<a
							className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<BiLogoGmail size={48} />
						</a>
					</div>
				</div>
				<div className='w-full h-[2px] rounded-full bg-white/40 mt-10 mb-5'></div>
				<div className='w-full flex justify-between text-brand-neutralSiga-200 font-title font-bold text-xs'>
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
