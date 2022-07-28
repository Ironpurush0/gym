import Hero from "./components/Hero";

import useData from "./hooks/useData";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
	const { data, loading } = useData(
		"https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
	);

	return (
		<div className='bg-[#131313] max-w-screen max-h-full'>
			<Home data={data} loading={loading} />
		</div>
	);
}

export default App;
