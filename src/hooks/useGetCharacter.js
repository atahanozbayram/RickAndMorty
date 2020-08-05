import React, { useState } from 'react';
import axios from 'axios';

function useGetCharacter(id) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [character, setCharacter] = useState({});

	useEffect(() => {
		let cancel;
		setLoading(true);
		setError(false);

		axios({
			method: 'GET',
			baseURL: 'https://rickandmortyapi.com/api',
			url: '/character',
			cancelToken: new axios.CancelToken((cancelTok) => {
				cancel = cancelTok;
			}),
		})
			.then((res) => {
				setCharacter(res.data);
				setLoading(false);
			})
			.catch((error) => {
				// stop cancellations being interpreted as errors.
				if (axios.isCancel(error)) return;
				// if program reaches here that means we have an error
				setError(true);
				setLoading(false);
			});

		// Cancel the request if the new request is made while the older one has not received the
		// response yet.
		return cancel;
	}, [id]);

	return { character, error, loading };
}

export { useGetCharacter as default };
