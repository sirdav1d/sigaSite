/** @format */

'use client';
import { Modal } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';
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
			<button
				className='bg-brand-blueSiga-500  p-3 text-4xl cursor-pointer  hover:shadow-md text-brand-neutralSiga-100 font-title font-bold drop-shadow-sm rounded active:shadow-lg z-50 h-fit w-fit'
				onClick={() => setOpenModal(true)}>
				<FaExternalLinkAlt size={18} />
			</button>
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
						src={props.img}
						alt={props.title!}
						width={400}
						height={250}
						className='lg:h-auto w-full rounded-lg h-[300px] object-cover'
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
