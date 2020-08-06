// Dependencies:
import React, { useState, useEffect } from 'react';

// Custom components:
import useGetEpisode from '../hooks/useGetEpisode';

function Details(props) {
	const { character: ch } = props;

	const { episodes, error, loading } = useGetEpisode(ch.episode);

	return (
		<div>
			<div>
				<div>
					<img src={ch.image} alt={ch.name} />
					<div></div>
				</div>
				<div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div>
				<h2>List of episodes</h2>
				<div>
					{episodes.map((ep) => {
						return <div key={ep.id}>{ep.name}</div>;
					})}
				</div>
			</div>
		</div>
	);
}

export { Details as default };
