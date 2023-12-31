/** @format */
'use client'

import React from 'react';

interface LinkProps {
	text: string;
	href: string;
}

export default function LinkComponent({ text, href }: LinkProps) {

	return (
		<a className='font-title text-lg' href={href}>{text}</a>
	);
}
