import React from "react";

import { GoSearch } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";

import Dropdown from "./Dropdown";

const Filter = () => {
	return (
		<div className='p-5 max-h-screen'>
			<div className='flex items-center justify-between'>
				<h1 className='text-4xl font-semibold'>Filters</h1>
				<button className='bg-red-800 text-xl py-1 rounded px-3'>Reset</button>
			</div>
			<div className='flex flex-col my-4'>
				<div className='my-2 p-4'>
					<p className='text-xl mb-4 font-semibold'>Location</p>
					<span className='flex items-center bg-zinc-700 rounded border border-2-zinc-400'>
						<GoSearch className='w-4 h-4 ml-4' />
						<input
							type='text'
							placeholder='Enter location'
							className='p-2 w-full bg-transparent'
						/>
					</span>
				</div>
				<div className='my-2 p-4'>
					<p className='text-xl mb-4 font-semibold'>Price</p>
					<span className='flex items-start justify-start'>
						<input
							className='w-16 mr-4 p-2 bg-zinc-700 rounded border border-2-zinc-400'
							type='text'
							placeholder='Min'
						/>
						<input
							className='w-14 p-2 rounded bg-zinc-700 border border-2-zinc-400'
							type='text'
							placeholder='Max'
						/>
					</span>
				</div>
				<div className='my-2 p-4'>
					<p className='text-xl font-semibold mb-4'>Cities</p>
					<span>
						<button className=' flex justify-between items-center w-full bg-zinc-700 rounded border border-2-zinc-200 p-2 text-start text-zinc-400'>
							Select cities
							<MdArrowDropDown />
						</button>
						{/* <Dropdown /> */}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Filter;
