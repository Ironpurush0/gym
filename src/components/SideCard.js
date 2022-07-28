import React from "react";

const SideCard = () => {
	return (
		<div className='flex justify-center flex-1 h-full'>
			<span className='flex flex-col'>
				<p className='text-6xl text-white font-bold'>WTF Fitness</p>
				<p className='text-6xl text-white font-bold'>Experience?</p>

				<div className='mt-4 h-full flex'>
					<div>
						<div className='w-16 h-full bg-red-500'>.</div>
					</div>
					<div className='px-4 flex-1'>
						<p className='text-4xl text-white'>@ your regular</p>
						<p className='text-4xl text-white'>gym cost?</p>
					</div>
				</div>
			</span>
		</div>
	);
};

export default SideCard;
