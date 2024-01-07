/** @format */

import logo from '@/../public/logos/logoHeader.png';
import Container from '@/components/atoms/Container';
import { siteMap } from '@/constants/siteMap';
import Image from 'next/image';
import {
	FaWhatsappSquare,
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

				<div className='flex w-full flex-col md:flex-row justify-between'>
					<Image
						className='mb-10 w-[120px]'
						src={logo}
						alt='logo Siga'></Image>
					<div className='flex flex-col gap-3 items-start md:items-center justify-center w-full my-5'>
						<h2 className='font-title text-brand-neutralSiga-100 font-bold text-center'>
							Siga-nos Nas Redes Sociais
						</h2>
						<div className=' flex gap-3 items-center justify-center'>
							<a
								className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
								href='https://www.instagram.com/sigareformasepinturas'
								target='_blank'
								rel='noopener noreferrer'>
								<FaInstagramSquare size={40} />
							</a>
							<a
								className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
								href='https://www.linkedin.com/in/siga-reformas-e-pinturas'
								target='_blank'
								rel='noopener noreferrer'>
								<FaLinkedin size={40} />
							</a>
							<a
								className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
								href='https://api.whatsapp.com/send?phone=551198665500&text=Ol%C3%A1,%20estava%20na%20sua%20Landing%20Page%20e%20ap%C3%B3s%20ver%20todo%20o%20site,%20gostaria%20de%20fazer%20um%20or%C3%A7amento!'
								target='_blank'
								rel='noopener noreferrer'>
								<FaWhatsappSquare size={40} />
							</a>
							<a
								className='text-brand-blueSiga-500 hover:text-brand-orangeSiga-500 transition-all duration-300 ease-in-out'
								href='mailto:sigareformasepinturas@gmail.com?subject=Lead - Landing Page&body=Ol%C3%A1%2C%20estava%20navegando%20na%20sua%20landing%20page%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento'
								target='_blank'
								rel='noopener noreferrer'>
								<MdEmail size={40} />
							</a>
						</div>
					</div>
				</div>

				<div className='flex justify-between md:items-end w-full flex-col md:flex-row gap-10 lg:gap-5  items-center'>
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
									(11) 99866-5500
								</p>
							</div>
						</div>
					</div>
					<div className='grid lg:grid-cols-2  gap-4 lg:w-1/2 w-full '>
						{siteMap.map((s, index) => {
							return (
								<a
									href={s.href}
									className='text-brand-neutralSiga-200 text-sm  hover:text-brand-blueSiga-300 transition-all duration-300 ease-in-out font-title'
									key={index}>
									{s.text}
								</a>
							);
						})}
					</div>
				</div>
				<div className='w-full h-[2px] rounded-full bg-white/40 my-4 lg:mt-10 lg:mb-5'></div>
				<div className='w-full flex justify-between text-brand-neutralSiga-200 font-title font-bold text-[9px] gap-2 items-center lg:text-xs flex-col md:flex-row'>
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
							href='/resources/Política_Privacidade_siga.pdf'
							target='_blank'
							rel='noopener noreferrer'>
							Políticas de Privacidade
						</a>
						<a
							className='transition-all duration-300 ease-in-out hover:text-brand-blueSiga-300'
							href='/resources/termos_de_uso_siga.pdf'
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
