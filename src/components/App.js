import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import CardList from '../components/CardList';
import useQueryCharacter from '../hooks/useQueryCharacter';
import heroImage from '../images/hero.png';
import '../style/Reset.css';
import appStyle from '../style/App.module.css';

function App(props) {
	const [filteringOptions, setFilteringOptions] = useState({
		name: '',
		status: '',
		species: '',
		type: '',
		gender: '',
	}); // pass down setFilteringOptions to Filter component for changing the filterings states.

	return (
		<div>
			{/* Outer div of all */}
			<div className={appStyle.heroSection}>
				{/* Top bar and hero area. */}
				<div className={appStyle.topbar}>
					<ul>
						<li>HOME</li>
					</ul>
				</div>
			</div>
			<div className={appStyle.CardList_section}>
				{/* section for listing cards and filtering */}
				<div>
					<Filter filterHandler={setFilteringOptions} filteringOptions={filteringOptions} />
				</div>
				<div>
					<CardList filteringOptions={filteringOptions} />
				</div>
			</div>
		</div>
	);
}

export { App as default };
