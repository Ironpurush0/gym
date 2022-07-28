import React from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";

const GymList = ({ data, loading }) => {
	console.log(data);

	return (
		<div className='flex flex-row'>
			<div className='w-96 '>
				<Filter />
				{/* hello */}
			</div>
			<div className='flex-1 overflow-visible'>
				{loading ? (
					<h1>Loding</h1>
				) : (
					data.map((res) => (
						<Card
							rating={res.rating}
							key={res.gym_name}
							name={res.gym_name}
							distance={`${res.distance_text} ${res.duration_text}`}
							image={res.cover_image}
							address={`${res.address1}, ${res.address2}`}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default GymList;
