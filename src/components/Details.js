import React from 'react';

function Details(props) {
	const { character: ch } = props;

	if (!ch) return null;

	return (
		<div>
			<img src={ch.image} />
		</div>
	);
}

export { Details as default };
