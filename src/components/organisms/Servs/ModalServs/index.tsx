/** @format */

'use client';
import React, { useState } from 'react';
import { Modal, Button } from 'flowbite-react';
import Image from 'next/image';

interface ModalComponentProps {
	img: any;
	alt: string;
}

export default function ModalServs(props: ModalComponentProps) {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<Button
				className='bg-gradient-to-r from-brand-blueSiga-500 bg-[length:380px_400px] bg-left text-xl w-[800px]  hover:bg-right transition-all bg-no-repeat cursor-pointer  hover:shadow-md text-brand-neutralSiga-100 font-title font-bold drop-shadow-sm duration-300 ease-linear to-brand-orangeSiga-500 rounded active:shadow-lg '
				onClick={() => setOpenModal(true)}>
				Saiba Mais
			</Button>
			<Modal
				dismissible
				className='backdrop-blur-md w-full'
				show={openModal}
				onClose={() => setOpenModal(false)}>
				<Modal.Header>{props.alt}</Modal.Header>
				<Modal.Body className='bg-transparent w-full h-full'>
					<div className='w-full h-[2px] bg-white/10 opacity-15'> </div>
					<Image
						src={props.img}
						alt={props.alt}
						className='h-full w-full rounded-lg shadow-md max-h-[460px] object-cover object-center'
					/>
				</Modal.Body>
			</Modal>
		</>
	);
}
