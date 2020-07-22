import React from 'react';
import PropTypes from 'prop-types';
import appStyle from '../style/Card.module.css';

function Card(props, ref) {
	const { character: ch } = props;

	// obtain classes for border colors from character's status and gender
	const statusClass = appStyle['--status-' + ch.status.toLowerCase()];
	const genderClass = appStyle['--gender-' + ch.gender.toLowerCase()];

	console.log(statusClass); // TODO: delete this code

	return (
		<div ref={ref} className={appStyle['Card']}>
			<div className={appStyle['Card__inner-section']}>
				<div className={appStyle['Card__image-area']}>
					<img src={ch.image} />
				</div>
				<div className={appStyle['Card__information-area']}>
					<div className={statusClass}>
						<div>{ch.species}</div>
						<div>
							{ch.name} - {ch.status}
						</div>
					</div>
					<div>
						<div>First seen in:</div>
						<div>{ch.origin.name}</div>
					</div>
					<div>
						<div>Last known location:</div>
						<div>{ch.location.name}</div>
					</div>
					<div className={genderClass}>
						<div>Gender:</div>
						<div>{ch.gender}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const forwardedCard = React.forwardRef(Card);

forwardedCard.propTypes = {
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

export { forwardedCard as default };
