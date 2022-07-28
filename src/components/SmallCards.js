import React from "react";

import { CgGym } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { FaEnvelopeOpen } from "react-icons/fa";
import { MdSanitizer } from "react-icons/md";

const SmallCards = () => {
	return (
		<div className='w-full h-48 p-4 flex items-center justify-evenly'>
			<div className='w-32 h-32 rounded-lg flex flex-col items-center justify-center shadow-lg bg-red-500'>
				<span className='w-full flex flex-col items-center justify-center'>
					<CgGym className='text-center w-8 h-8 text-white mb-2' />
					<p className='text-xl text-white text-center'>Modern</p>
					<p className='text-xl text-white text-center'>Equipments</p>
				</span>
			</div>
			<div className='w-32 h-32 flex flex-col items-center justify-center rounded-lg shadow-lg bg-red-500'>
				<span className='w-full flex flex-col items-center justify-center'>
					<GoPerson className='text-center w-8 h-8 text-white mb-2' />
					<p className='text-xl text-white text-center'>Skilled</p>
					<p className='text-xl text-white text-center'>Trainer</p>
				</span>
			</div>
			<div className='w-32 h-32 flex flex-col items-center justify-center rounded-lg shadow-lg bg-red-500'>
				<span className='w-full flex flex-col items-center justify-center'>
					<FaEnvelopeOpen className='text-center w-8 h-8 text-white mb-2' />
					<p className='text-xl text-white text-center'>Top Class</p>
					<p className='text-xl text-white text-center'>Ambience</p>
				</span>
			</div>
			<div className='w-32 h-32 rounded-lg flex flex-col items-center justify-center shadow-lg bg-red-500'>
				<span className='w-full flex flex-col items-center justify-center'>
					<MdSanitizer className='text-center w-8 h-8 text-white mb-2' />
					<p className='text-xl text-white text-center'>Sanitized</p>
					<p className='text-xl text-white text-center'>GYMS</p>
				</span>
			</div>
		</div>
	);
};

export default SmallCards;
