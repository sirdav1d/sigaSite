/** @format */

import Container from '@/components/atoms/Container';
import { MotionDiv } from '@/components/atoms/MotionDiv';
import Tag from '@/components/atoms/Tag';
import { TagAnimation } from '@/components/atoms/TagAnimation';
import Title from '@/components/atoms/Title';
import Card from '@/components/molecules/Card';
import { servs } from '@/constants/services';

export default function Servs() {
	return (
		<Container id='servs'>
			<>
				<div className='h-full w-screen bg-brand-orangeSiga-100 absolute -z-10 left-0 top-0 '></div>
				<div className='flex flex-col gap-5 items-center w-full xl:items-start '>
					<Tag>
						<span className='absolute -top-3'>
							<TagAnimation tag={'Qualidade'} />
						</span>
					</Tag>
					<MotionDiv
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<Title
							text='Explore Nossas Soluções'
							span='Profissionais'
						/>
					</MotionDiv>
				</div>
				<div className='flex flex-col items-center w-full gap-10'>
					<div className='mt-4 gap-8 grid md:grid-cols-3 grid-cols-1 xl:grid-cols-5'>
						{servs.map((s, index) => {
							return (
								<MotionDiv
									viewport={{ once: true }}
									key={index}
									whileInView={{ opacity: 1, y: 0 }}
									initial={{ opacity: 0, y: 16 }}
									transition={{ duration: 0.3, delay: 0.1 * index }}>
									<Card
										cover={s.cover}
										role='servs'
										title={s.title}
										description={s.description}
										icon={s.img}
									/>
								</MotionDiv>
							);
						})}
					</div>
				</div>
			</>
		</Container>
	);
}
