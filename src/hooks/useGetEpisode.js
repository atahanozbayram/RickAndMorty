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
					if (index === epArray.length - 1) {
						setLoading(false);
						// sort the arr
						arr.sort((b, a) => {
							if (a.id > b.id) return 1;
							if (a.id < b.id) return -1;
							return 0;
						});

						// take the last 5 episodes
						// set the episodes
						setEpisodes(arr.slice(0, 5));
					}
				})
				.catch((error) => {
					// stop interpreting axios cancels as errors.
					if (axios.isCancel(error)) return;

					// if program reaches here, that means we have other type of error
					setError(true);
					setLoading(false);
				});
		});

		return cancel;
	}, [epArray]);

	return { loading, error, episodes };
}

export { useGetEpisode as default };
