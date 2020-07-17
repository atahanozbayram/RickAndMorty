import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
	const { character } = props;

	return <div></div>;
}

Card.propTypes = {
	character: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
		species: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		gender: PropTypes.string.isRequired,
		origin: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		image: PropTypes.string.isRequired,
		episode: PropTypes.array.isRequired,
		url: PropTypes.string.isRequired,
		created: PropTypes.string.isRequired,
	}),
};

export { Card as default };
