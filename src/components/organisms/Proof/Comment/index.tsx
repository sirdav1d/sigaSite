/** @format */

import React from 'react';
import Image from 'next/image';
import { Rating, RatingStar } from 'flowbite-react';

interface CommentProps {
	text: string;
	avatar: any;
	name: string;
}

export default function Comment(props: CommentProps) {
	return (
		<div className='flex flex-col items-start justify-center gap-5'>
			<Rating>
				<RatingStar />
				<RatingStar />
				<RatingStar />
				<RatingStar />
				<RatingStar filled={false} />
			</Rating>
			<p className='italic text-lg'>{props.text}</p>
			<div className='flex gap-5 items-center justify-center'>
				<Image
					src={props.avatar}
					alt={props.name}
					width={64}
					height={64}></Image>
				<h4 className='font-title font-bold text-base'>{props.name}</h4>
			</div>
		</div>
	);
}
