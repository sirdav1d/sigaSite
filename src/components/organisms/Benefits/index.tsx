/** @format */

import Container from '@/components/atoms/Container';
import { MotionDiv } from '@/components/atoms/MotionDiv';
import Tag from '@/components/atoms/Tag';
import { TagAnimation } from '@/components/atoms/TagAnimation';
import Title from '@/components/atoms/Title';
import BenefitsCard from '@/components/molecules/Card';
import { benefits } from '@/constants/benefits';

export default function Benefits() {
	return (
		<Container id='benefits'>
			<div className='flex flex-col h-full w-full'>
				<div className='flex flex-col gap-5 w-full items-center xl:items-start'>
					<Tag>
						<span className='absolute left-auto -top-3 '>
							<TagAnimation tag={'Excelência'} />
						</span>
					</Tag>
					<MotionDiv
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<Title
							text={'Descubra Nossas Vantagens '}
							span='Exclusivas'
						/>
					</MotionDiv>
					<MotionDiv
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, delay: 0.4 }}>
						<p className='prose lg:prose-lg prose-sm lg:text-left'>
							De prazos cumpridos a soluções personalizadas, explore como cada
							projeto conosco oferece benefícios que transformam sua experiência
							de reforma.
						</p>
					</MotionDiv>
				</div>
				<div className='flex flex-wrap xl:justify-between gap-8 mt-10 w-full justify-center'>
					{benefits.map((b, index) => {
						return (
							<MotionDiv
								viewport={{ once: true }}
								key={index}
								whileInView={{ opacity: 1, y: 0 }}
								initial={{ opacity: 0, y: 40 }}
								transition={{
									duration: 0.5,
									delay: 0.2 * index,
								}}>
								<BenefitsCard
									title={b.title}
									description={b.description}
									icon={b.icon}
								/>
							</MotionDiv>
						);
					})}
				</div>
			</div>
		</Container>
	);
}
