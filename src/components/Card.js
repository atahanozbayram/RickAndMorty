import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
	const { character: ch } = props;

	return (
		<div>
			{/* outmost card div */}
			<div>
				{/* inner container div contains image and informations */}
				<div>
					{/* image container */}
					<img src={ch.image} />
				</div>
				<div>
					{/* information area */}
					<div>
						<div>{/* species */}</div>
						<div>{/* Name and status */}</div>
					</div>
					<div>
						<div>First seen in:</div>
						<div>{/* First seen location */}</div>
					</div>
					<div>
						<div>Last known location:</div>
						<div>{/* Last known location */}</div>
					</div>
					<div>
						<div>Gender:</div>
						<div>{/* Gender */}</div>
					</div>
				</div>
			</div>
		</div>
	);
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
