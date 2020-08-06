// Dependencies:
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Custom components:
import Filter from '../components/Filter';
import CardList from '../components/CardList';
import DetailsPage from '../components/DetailsPage';

// Stylings:
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
		<Router>
			<div className={appStyle['App']}>
				{/* Outer div of all */}
				<div className={appStyle.topbar}>
					<ul>
						<Link to="/">
							<li>HOME</li>
						</Link>
					</ul>
				</div>
				<Switch>
					<Route path="/character/:id">
						<DetailsPage />
					</Route>
					<Route path="/">
						<div className={appStyle.heroSection}>{/* Top bar and hero area. */}</div>
						<div className={appStyle.CardList_section}>
							{/* section for listing cards and filtering */}
							<div className={appStyle['CardList__filter']}>
								<Filter filterHandler={setFilteringOptions} filteringOptions={filteringOptions} />
							</div>
							<div>
								<CardList filteringOptions={filteringOptions} />
							</div>
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export { App as default };
