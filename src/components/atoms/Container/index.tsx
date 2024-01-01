/** @format */

import React from 'react';

export default function Container({
	children,
}: {
	children: React.ReactElement;
}) {
	return (
		<div className='relative w-screen h-screen overflow-x-hidden '>
			<div className='max-w-7xl mt-60 h-fit flex mx-auto flex-col items-center justify-center'>
				{children}
			</div>
		</div>
	);
}
