/** @format */

import Benefits from '@/components/organisms/Benefits';
import Feature from '@/components/organisms/Feature';
import Hero from '@/components/organisms/Hero';
import Who from '@/components/organisms/Who';
import imageInstalacoes from '@/../public/images/eletrica.png'
import imagePintura from '@/../public/images/pintura.png';
import imageReforma from '@/../public/images/reforma.png'

export default function Home() {

	const feature = [
		{
			tag: 'Segurança',
			title: 'Instalações Elétricas e Hidráulicas',
			spanTitle: 'Profissionais',
			description:
				'Garantimos funcionalidade e segurança com serviços especializados em instalações elétricas e hidráulicas, proporcionando um ambiente seguro e confortável',
			image: imageInstalacoes,
			linkBtn: '',
		},
		{
			tag: 'Elegância',
			title: 'Pintura e Acabamentos',
			spanTitle: 'Personalizados',
			description:
				'Especializados em pintura e acabamentos refinados, proporcionamos uma nova vida às suas paredes e adicionamos elegância aos detalhes do seu espaço',
			image: imagePintura,
			linkBtn: '',
		},
		,
		{
			tag: 'Conforto',
			title: 'Reforma Completa',
			spanTitle: 'Eficiente',
			description:
				'Transformamos sua residência ou espaço comercial do início ao fim, oferecendo serviços integrados, desde estrutura até os toques finais de design',
			image: imageReforma,
			linkBtn: '',
		},
	];
	return (
		<main className='overflow-x-hidden m-0 p-0'>
			<Hero />
			<Who />
			<Benefits />
			{feature.map((f, index)=>{
				return (
					<Feature
					key={index}
						tag={f?.tag}
						title={f?.title}
						spanTitle={f?.spanTitle}
						description={f?.description}
						image={f?.image}
						linkBtn={f?.linkBtn}
					/>
				);
			})}
			
		</main>
	);
}
