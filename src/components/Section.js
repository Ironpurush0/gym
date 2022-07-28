import React from "react";

import SideCard from "./SideCard";
import SmallCards from "./SmallCards";

const Section = () => {
	return (
		<div className='w-full h-96 bg-gradient-to-r from-red-800 to-red-600'>
			<div className='h-full md:container md:mx-auto flex justify-between'>
				<SideCard />
				<div className='flex-1 flex items-end h-full'>
					<SmallCards />
				</div>
			</div>
		</div>
	);
};

export default Section;
