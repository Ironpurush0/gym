import { useEffect, useState } from "react";
import axios from "axios";

const useData = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(url);
				setData(res.data.data);
				setLoading(false);
			} catch (error) {
				return error.message;
			}
		};
		fetchData();
	}, [url]);
	return { data, loading };
};

export default useData;
