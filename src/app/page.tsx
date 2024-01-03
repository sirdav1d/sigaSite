/** @format */

import Benefits from '@/components/organisms/Benefits';
import Faq from '@/components/organisms/Faq';
import Feature from '@/components/organisms/Feature';
import Gallery from '@/components/organisms/Gallery';
import Hero from '@/components/organisms/Hero';
import Proof from '@/components/organisms/Proof';
import Who from '@/components/organisms/Who';
import { features } from '@/constants/features';

export default function Home() {
	return (
		<main className='overflow-x-hidden m-0 p-0'>
			<Hero />
			<Who />
			<Benefits />
			{features.map((f, index) => {
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
			<Gallery />
			<Proof />
			<Faq />
		</main>
	);
}
