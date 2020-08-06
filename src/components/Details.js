// Dependencies:
import React, { useState, useEffect } from 'react';

// Custom components:
import useGetEpisode from '../hooks/useGetEpisode';

// Stylings:
import appStyle from '../style/Details.module.css';

function Details(props) {
	const { character: ch } = props;

	const { episodes, error, loading } = useGetEpisode(ch.episode);

	return (
		<div className={appStyle['Details']}>
			<div className={appStyle['Details__character-section']}>
				<div className={appStyle['Details__image-section']}>
					<img src={ch.image} alt={ch.name} />
					<div>{ch.name}</div>
				</div>
				<div className={appStyle['Details__information-section']}>
					<div>
						<div>Status:</div>
						<div>{ch.status}</div>
					</div>
					<div>
						<div>Species</div>
						<div>{ch.species}</div>
					</div>
					<div>
						<div>Gender:</div>
						<div>{ch.gender}</div>
					</div>
					<div>
						<div>Origin:</div>
						<div>{ch.origin.name}</div>
					</div>
					<div>
						<div>Last known location:</div>
						<div>{ch.location.name}</div>
					</div>
				</div>
			</div>
			<div className={appStyle['Details__episodes-section']}>
				<h2>Last 5 episodes</h2>
				<div className={appStyle['Details__episode-line-container']}>
					{episodes.map((ep) => {
						return (
							<div key={ep.id} className={appStyle['Details__episode-line']}>
								<div>
									<span className={appStyle['Details__episode-line-name']}>{ep.name}</span>{' '}
									<span className={appStyle['Details__episode-line-episode']}>({ep.episode})</span>
								</div>
								<span className={appStyle['Details__episode-air-date']}>{ep.air_date}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export { Details as default };
