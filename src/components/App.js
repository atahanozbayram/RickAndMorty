import React from 'react';
import CardList from '../components/CardList';

function App(props) {
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
				<div>{/* section for filtering elements */}</div>
				<div>
					<CardList />
				</div>
			</div>
		</div>
	);
}

export { App as default };
