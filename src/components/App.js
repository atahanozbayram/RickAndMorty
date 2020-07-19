import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import CardList from '../components/CardList';
import useQueryCharacter from '../hooks/useQueryCharacter';

function App(props) {
	const [filteringOptions, setFilteringOptions] = useState({
		name: '',
		status: '',
		species: '',
		type: '',
		gender: '',
	}); // pass down setFilteringOptions to Filter component for changing the filterings states.

	const { name, status, species, type, gender } = filteringOptions;
	const { loading, error, characters, nextPage } = useQueryCharacter(name, status, species, type, gender);

	return (
		<div>
			{/* Outer div of all */}
			<div>
				{/* Top bar and hero area. */}
				<div> {/* top bar */}</div>
				<img /> {/* Image */}
			</div>
			<div>
				{/* section for listing cards and filtering */}
				<div>
					<Filter filterHandler={setFilteringOptions} filteringOptions={filteringOptions} />
				</div>
				<div>
					<CardList loading={loading} error={error} characters={characters} nextPage={nextPage} />
				</div>
			</div>
		</div>
	);
}

export { App as default };
