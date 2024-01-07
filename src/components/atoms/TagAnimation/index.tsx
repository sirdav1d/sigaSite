/** @format */

'use client';

import { TypeAnimation } from 'react-type-animation';

export const TagAnimation = ({ tag }: { tag: string | undefined }) => {
	return (
		<TypeAnimation
			sequence={[`${tag}`, 1000, '', 600]}
			wrapper='span'
			aria-hidden={true}
			speed={50}
			cursor={false}
			repeat={Infinity}
		/>
	);
};
