import React, { useState, useRef, useCallback } from 'react';
import useQueryCharacter from '../hooks/useQueryCharacter';
import Card from '../components/Card';
import PropTypes from 'prop-types';
import appStyle from '../style/CardList.module.css';

function CardList(props) {
	const { filteringOptions } = props;
	const [pageNumber, setPageNumber] = useState(1);

	const { name, status, species, type, gender } = filteringOptions;
	const { loading, characters, error, hasMore } = useQueryCharacter(
		name,
		status,
		species,
		type,
		gender,
		pageNumber,
		setPageNumber
	);

	const observer = useRef(null);
	const lastCardRef = useCallback(
		(cardComponent) => {
			// if the loading operation is not done, terminate the function
			if (loading) return;

			// if there is an observer already, disconnect it
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting && hasMore) {
						// increase the page number for the next request
						setPageNumber((previousNumber) => {
							return previousNumber + 1;
						});
					}
				},
				{
					root: null, // viewport
					rootMargin: '0px',
					threshold: 1.0, // All of the component should be intersecting
				}
			);
			if (cardComponent) observer.current.observe(cardComponent);
		},
		[loading, hasMore]
	);

	return (
		<div className={appStyle.CardList}>
			{characters.map((currentChar, index) => {
				// if character is the last element in the array
				if (index === characters.length - 1)
					return <Card character={currentChar} key={currentChar.id} ref={lastCardRef} />;

				return <Card character={currentChar} key={currentChar.id} />;
			})}
			<div>{loading && 'Loading...'}</div>
			<div>{error && 'Error...'}</div>
		</div>
	);
}

CardList.propTypes = {
	filteringOptions: PropTypes.shape({
		name: PropTypes.string,
		status: PropTypes.string,
		species: PropTypes.string,
		type: PropTypes.string,
		gender: PropTypes.string,
	}),
};

export { CardList as default };
