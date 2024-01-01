/** @format */

import Benefits from '@/components/organisms/Benefits';
import Hero from '@/components/organisms/Hero';
import Who from '@/components/organisms/Who';

export default function Home() {
	return (
		<main className='overflow-x-hidden m-0 p-0'>
			<Hero />
			<Who />
			<Benefits />
		</main>
	);
}
