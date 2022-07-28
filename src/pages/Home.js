import React from "react";

import SearchBar from "../components/SearchBar";
import GymList from "../components/GymList";
import Footer from "../components/Footer";

import Section from "../components/Section";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = ({ data, loading }) => {
	return (
		<>
			<NavBar />
			<Hero />
			<div className='flex flex-col text-white  md:container md:mx-auto h-auto'>
				<div>
					<SearchBar />
				</div>
				<GymList data={data} loading={loading} />
			</div>
			<div className='border'>
				<Section />
			</div>
			<Footer />
		</>
	);
};

export default Home;
