import axios from 'axios';
import React, { useEffect, useState } from 'react';

function useGetEpisode(epArray) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [episodes, setEpisodes] = useState([]);
	let arr = [];

	useEffect(() => {
		let cancel;
		epArray.map((epReq, index) => {
			axios({
				method: 'GET',
				url: epReq,
				cancelToken: new axios.CancelToken((cancelTok) => {
					cancel = cancelTok;
				}),
			})
				.then((res) => {
					arr.push(res.data);
					// if the index is the last element, then finish loading
					if (index === epArray.length - 1) setLoading(false);
				})
				.catch((error) => {
					// stop interpreting axios cancels as errors.
					if (axios.isCancel(error)) return;

					// if program reaches here, that means we have other type of error
					setError(true);
					setLoading(false);
				});
		});

		setEpisodes(arr);

		return cancel;
	}, [epArray]);

	return { loading, error, episodes };
}

export { useGetEpisode as default };
