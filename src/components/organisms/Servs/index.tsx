/** @format */

import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import Card from '@/components/molecules/Card';
import { servs } from '@/constants/services';

export default function Servs() {
	return (
		<Container id='servs'>
			<>
				<div className='h-full w-screen bg-brand-orangeSiga-100 absolute -z-10 left-0 top-0 '></div>
				<div className='flex flex-col gap-5'>
					<Tag>Qualidade</Tag>
					<Title
						text='Explore Nossas Soluções'
						span='Profissionais'
					/>
				</div>
				<div className='flex flex-col items-center w-full gap-10'>
					<div className='mt-4 gap-8 grid grid-cols-5'>
						{servs.map((s, index) => {
							return (
								<Card
									role='servs'
									key={index}
									title={s.title}
									description={s.description}
									icon={s.img}
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
