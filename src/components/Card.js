import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
	const { character: ch, ref } = props;

	return (
		<div ref={ref}>
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
						<div>{ch.species}</div>
						<div>
							{ch.name} - {ch.status}
						</div>
					</div>
					<div>
						<div>First seen in:</div>
						<div>
							<a href={ch.origin.url}>{ch.origin.name}</a>
						</div>
					</div>
					<div>
						<div>Last known location:</div>
						<div>
							<a href={ch.location.url}>{ch.location.name}</a>
						</div>
					</div>
					<div>
						<div>Gender:</div>
						<div>{ch.gender}</div>
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

const forwardedCard = React.forwardRef(Card);

export { forwardedCard as default };
