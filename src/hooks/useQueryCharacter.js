import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useQueryCharacter(name, status, species, type, gender) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [characters, setCharacters] = useState([]);
	const [nextPage, setNextPage] = useState(false);

	// reset the character's array everytime some changes happens to filtering options
	useEffect(() => {
		setCharacters([]);
	}, [name, status, species, type, gender]);

	useEffect(() => {
		let cancel;
		setLoading(true);
		setError(false);

		axios({
			method: 'GET',
			baseURL: 'https://rickandmortyapi.com/api/',
			url: 'character/',
			params: { name, status, species, type, gender },
			cancelToken: new axios.CancelToken((cancelTok) => {
				cancel = cancelTok;
			}),
		})
			.then((res) => {
				setCharacters((oldChars) => {
					return [...oldChars, ...res.data.results];
				});

				// set next page
				setNextPage(res.data.info.next);
			})
			.catch((error) => {
				// stop cancellations being interpreted as errors.
				if (axios.isCancel(error)) return;
				// if program reaches here that means we have an error
				setError(true);
				setLoading(false);
			});

		// Cancel the request if new request is made while the older one has not recieved the
		// response yet.
		return cancel;
	}, [name, status, species, type, gender]);

	return { loading, error, characters, nextPage };
}

export { useQueryCharacter as default };
