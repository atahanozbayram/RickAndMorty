import React from 'react';
import PropTypes from 'prop-types';
import appStyle from '../style/Card.module.css';

function Card(props, ref) {
	const { character: ch } = props;

	return (
		<div ref={ref} className={appStyle.card}>
			{/* outmost card div */}
			<div className={appStyle.cardInnerDiv}>
				{/* inner container div contains image and informations */}
				<div className={appStyle.imageContainer}>
					{/* image container */}
					<img src={ch.image} />
				</div>
				<div className={appStyle.informationSection}>
					{/* information area */}
					<div className={appStyle.top}>
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
					<div className={appStyle.bottom}>
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
