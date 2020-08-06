// Dependencies:
import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

// Custom components:
import useGetCharacter from '../hooks/useGetCharacter';
import Details from '../components/Details';

function DetailsPage() {
	const { id } = useParams();

	const { character, error, loading } = useGetCharacter(id);

	const redirect = error ? <Redirect to="/error" /> : null;

	return (
		<React.Fragment>
			{redirect}
			<div>{loading && 'Loading...'}</div>
			<Details character={character} />
		</React.Fragment>
	);
}

export { DetailsPage as default };
