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
				<div className='flex flex-col gap-5 items-center w-full xl:items-start '>
					<Tag>Qualidade</Tag>
					<Title
						text='Explore Nossas Soluções'
						span='Profissionais'
					/>
				</div>
				<div className='flex flex-col items-center w-full gap-10'>
					<div className='mt-4 gap-8 grid md:grid-cols-3 grid-cols-1 xl:grid-cols-5'>
						{servs.map((s, index) => {
							return (
								<Card
									cover={s.cover}
									role='servs'
									key={index}
									title={s.title}
									description={s.description}
									icon={s.img}
								/>
							);
						})}
					</div>
				</div>
			</>
		</Container>
	);
}
