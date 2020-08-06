// Dependencies:
import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

// Custom components:
import useGetCharacter from '../hooks/useGetCharacter';
import Details from '../components/Details';

// Stylings:
import appStyle from '../style/DetailsPage.module.css';

function DetailsPage() {
	const { id } = useParams();

	const { character, error, loading } = useGetCharacter(id);

	const redirect = error ? <Redirect to="/error" /> : null;

	return (
		<div className={appStyle['DetailsPage']}>
			{redirect}
			{loading ? 'Loading...' : <Details character={character} />}
		</div>
	);
}

export { DetailsPage as default };
