/** @format */
'use client'

import React from 'react';

interface LinkProps {
	text: string;
	href: string;
}

export default function LinkComponent({ text, href }: LinkProps) {

	return (
		<a className='font-title text-base' href={href}>{text}</a>
	);
}
