import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
	return (
		<div className='w-full my-2 p-5 flex items-center justify-around'>
			<div className='border-2 rounded-lg flex-1 flex items-center justify-center mx-5'>
				<BiSearch className='ml-5 w-10 h-10' />
				<input
					className='text-gray-400 w-full p-5 bg-transparent'
					placeholder='Search gym name here...'
				/>
				<div className='mx-2 my-2 rounded'>
					<button className='w-16 rounded-lg h-14 text-white text-2xl bg-red-800 flex items-center justify-center'>
						<IoLocationSharp />
					</button>
				</div>
				<div className='mx-5 my-2 rounded'>
					<button className='w-full p-5 rounded-lg h-14 text-white text-xl bg-red-800 flex items-center justify-center'>
						Clear
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
