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
			className='relative w-screen overflow-x-hidden data-[role=feature]:h-full py-20 h-screen data-[role=hero]:py-0  flex justify-center items-center'>
			<div
				data-role={props.role}
				className='max-w-7xl data-[role=hero]:mt-60 h-fit flex mx-auto flex-col data-[role=hero]:items-center justify-center items-start w-full'>
				{props.children}
			</div>
		</div>
	);
}
