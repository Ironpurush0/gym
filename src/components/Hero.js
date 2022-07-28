import React from "react";
import NavBar from "./NavBar";

import "./hero.css";

const Hero = () => {
	return (
		<div className='h-[38rem] bg-gradient-to-r from-red-600 to-black'>
			<div className='w-full h-[38rem] bg-gradient-to-r from-red-800 to-transparent'>
				<NavBar />
				<div className='cont'>
					<h1 className='heading1'>Powered</h1>
					<h1 className='heading2'>Gym</h1>
				</div>
			</div>
		</div>
	);
};

export default Hero;
