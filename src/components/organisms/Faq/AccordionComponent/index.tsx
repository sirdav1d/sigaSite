/** @format */

'use client';

import React from 'react';
import { Accordion } from 'flowbite-react';

interface AccordionProps {
	title: string;
	description: string;
}

export default function AccordionComponent(props: AccordionProps) {
	return (
		<Accordion
			collapseAll={true}
			className='w-full'>
			<Accordion.Panel>
				<Accordion.Title className='font-title font-bold lg:text-base p-4 text-sm'>
					{props.title}
				</Accordion.Title>
				<Accordion.Content className='w-full h-fit p-4'>
					<p className='mb-1 prose font-bod font-normal text-xs lg:text-base'>
						{props.description}
					</p>
				</Accordion.Content>
			</Accordion.Panel>
		</Accordion>
	);
}
