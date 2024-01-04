/** @format */

import React from 'react';

interface ContainerProps {
	role?: string;
	children: React.ReactElement;
	id?: string;
}

export default function Container(props: ContainerProps) {
	return (
		<div
			id={props.id}
			data-role={props.role}
			className='relative scroll-pt-40 w-screen overflow-x-hidden  data-[role=footer]:h-full  data-[role=footer]:w-full data-[role=feature]:h-full data-[role=faq]:h-full py-14 h-screen data-[role=hero]:py-0 flex justify-center xl:items-start 2xl:items-center data-[role=projects]:bg-brand-blueSiga-900'>
			<div
				data-role={props.role}
				className='max-w-7xl data-[role=hero]:mt-40 h-fit data-[role=faq]:max-w-4xl  data-[role=faq]:h-full  data-[role=faq]:items-center flex mx-auto flex-col data-[role=hero]:items-center justify-center items-start w-full'>
				{props.children}
			</div>
		</div>
	);
}
