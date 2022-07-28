import React from "react";

import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
	return (
		<div className='md:container h-[32rem] md:mx-auto '>
			<div className='w-full flex h-full'>
				<div className='flex-1 flex justify-center '>
					<div className='my-12 w-full'>
						<p className='text-6xl text-white text-center font-bold'>WTF</p>
						<div className='w-full flex my-12 items-center justify-evenly p-4'>
							<span className='bg-white rounded-full p-2'>
								<BsInstagram className='w-8 h-8' />
							</span>
							<span className='bg-white rounded-full p-2'>
								<FiFacebook className='w-8 h-8' bg-white rounded-full />
							</span>
							<span className='bg-white rounded-full p-2'>
								<FiLinkedin className='w-8 h-8' bg-white rounded-full />
							</span>
						</div>
					</div>
				</div>
				<div className='flex-1  flex flex-col text-white'>
					<p className='text-left text-4xl font-bold my-12'>Quick Links</p>
					<ul className='text-xl text-gray-300 p-2'>
						<li className='py-2'>About</li>
						<li className='py-2'>FAQs</li>
						<li className='py-2'>Privacy policy</li>
						<li className='py-2'>Terms & conditions</li>
						<li className='py-2'>Refund & cancelation</li>
					</ul>
				</div>
				<div className='flex-1  text-white'>
					<p className='text-left text-4xl font-bold my-12'>Explore</p>
					<ul className='text-xl text-gray-300 p-2'>
						<li className='py-2'>Arenas</li>
						<li className='py-2'>Studios</li>
						<li className='py-2'>Nutrition</li>
					</ul>
				</div>
				<div className='flex-1  text-white'>
					<p className='text-left text-4xl font-bold my-12'>Contact</p>
					<ul className='text-xl text-gray-300 p-2'>
						<li className='py-4 flex items-center'>
							<ImLocation className='text-white w-12 h-12 mr-8' />
							Ro: S 1502, Amrapali Silicon city, Sector 76, Noida, Uttar
							pradesh, India
						</li>
						<li className='py-4 flex items-center'>
							<ImLocation className='text-white w-12 h-12 mr-8' />
							Ho: C-86 B, Ground Floor, Sector 8, Noida, Uttar Pradesh, India
						</li>
						<li className='py-4 flex items-center'>
							<BsTelephoneFill className='text-white w-8 h-8 mr-8' />
							+919090639005
						</li>
						<li className='py-4 flex items-center'>
							<HiMail className='text-white w-8 h-8 mr-8' />
							support@wtfup.me
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
