import React, { useState } from 'react';
import Card from '../components/Card';
import PropTypes from 'prop-types';

function CardList(props) {
	const { loading, error, characters, nextPage } = props;

	return (
		<div>
			{characters.map((character) => {
				return <Card character={character} key={character.id} />;
			})}
			<div>{loading && 'Loading...'}</div>
			<div>{error && 'Error...'}</div>
		</div>
	);
}

CardList.propTypes = {
	loading: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
	characters: PropTypes.array.isRequired,
	nextPage: PropTypes.string.isRequired,
};

export { CardList as default };
