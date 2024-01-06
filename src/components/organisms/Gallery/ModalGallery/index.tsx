/** @format */

'use client';
import React, { useState } from 'react';
import { Modal, Button } from 'flowbite-react';
import { Image } from 'react-datocms';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ModalComponentProps {
	img: any;
	title?: string;
	description?: string;
}

export default function ModalComponent(props: ModalComponentProps) {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<Button
				className='bg-gradient-to-r from-brand-blueSiga-500 bg-[length:380px_400px] w-[60px] p-1 bg-left text-4xl  hover:bg-right transition-all bg-no-repeat cursor-pointer  hover:shadow-md text-brand-neutralSiga-100 font-title font-bold drop-shadow-sm duration-300 ease-linear to-brand-orangeSiga-500 rounded active:shadow-lg scale-105 z-50'
				onClick={() => setOpenModal(true)}>
				<FaExternalLinkAlt size={20} />
			</Button>
			<Modal
				position={'center'}
				size={'5xl'}
				dismissible
				className='backdrop-blur-md w-full'
				show={openModal}
				onClose={() => setOpenModal(false)}>
				<Modal.Header className='flex justify-between bg-brand-blueSiga-700'>
					<h3 className='font-title font-bold text-white text-base lg:text-xl'>
						{props.title}{' '}
					</h3>
				</Modal.Header>
				<Modal.Body className='bg-brand-blueSiga-700 w-full h-full'>
					<div className='w-full h-[2px] bg-white/10 opacity-15'> </div>
					<Image
						data={props.img}
						className='lg:h-auto w-full rounded-lg h-[300px]'
					/>
				</Modal.Body>
				<Modal.Footer className='bg-brand-blueSiga-700 w-full'>
					<p className='text-white w-full prose prose-sm lg:text-base'>
						{props.description}
					</p>
				</Modal.Footer>
			</Modal>
		</>
	);
}
