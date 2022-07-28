import React from "react";
import RatingStars from "react-rating-stars-component";

import { MdNavigation } from "react-icons/md";

const Card = ({ name, address, distance, rating, image }) => {
	return (
		<div>
			<div className='flex m-8 h-80 bg-neutral-900 rounded-lg'>
				<div className='w-96'>
					<img className='w-full h-full bg-contain' alt='' src={image} />
				</div>
				<div className='h-full flex p-2 flex-1 flex-col justify-between'>
					<div className='py-2'>
						<p className='py-1 text-xl font-semibold'>{name}</p>
						<p className='text-2xl py-1'>
							{<RatingStars activeColor='#ffd700' size={20} count={rating} />}
						</p>
						<p className='text-xl font-semibold py-1'>{address}</p>
						<p className='text-sm py-1 flex items-center'>
							<MdNavigation className='w-4 h-4 mr-2 text-green-900' />
							{distance}
						</p>
					</div>
					<div className='w-full flex justify-end px-4'>
						<button className='bg-red-800 p-2 text-xl text-center rounded'>
							Book Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
