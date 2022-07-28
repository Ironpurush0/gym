import Hero from "./components/Hero";

import SearchBar from "./components/SearchBar";
import GymList from "./components/GymList";
import Footer from "./components/Footer";

import Section from "./components/Section";

import useData from "./hooks/useData";

function App() {
	const { data, loading } = useData(
		"https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
	);

	return (
		<div className='bg-[#131313] max-w-screen max-h-full'>
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
		</div>
	);
}

export default App;
