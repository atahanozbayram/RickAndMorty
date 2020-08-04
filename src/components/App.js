import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import CardList from '../components/CardList';
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
		<div className={appStyle['App']}>
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
				<div className={appStyle['CardList__filter']}>
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
