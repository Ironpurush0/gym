import React from "react";

const NavBar = () => {
	return (
		<div className='bg-[#0D0D0D] fixed flex items-center justify-between h-auto w-full'>
			<div className='p-5 ml-12'>
				<span className='text-4xl text-white font-bold'>WTF</span>
			</div>
			<div className='p-5 mr-12 text-white text-opacity-50'>
				<a href='/' className=' text-xl p-5 hover:text-white'>
					Fitness
				</a>
				<a href='/' className=' text-xl p-5 hover:text-white'>
					Nutrition
				</a>
				<a href='/' className=' text-xl p-5 hover:text-white'>
					Gyms
				</a>
				<a href='/' className=' text-xl p-5 hover:text-white'>
					Become WTF Partner
				</a>
				<a href='/' className=' text-xl p-5 hover:text-white'>
					About us
				</a>
				<button className='bg-red-800 text-xl py-1 rounded px-3'>Login</button>
			</div>
		</div>
	);
};

export default NavBar;
