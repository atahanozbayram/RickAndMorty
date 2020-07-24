import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import appStyle from '../style/Filter.module.css';

function Filter(props) {
	const { filterHandler, filteringOptions } = props;

	function handleInputChange(event) {
		event.persist();
		// change the state
		if (event.target === null) return;

		filterHandler((previousState) => {
			return Object.assign({}, previousState, { [event.target.name]: event.target.value });
		});
	}

	function handleRadioClick(event) {
		const { value, name } = event.target;

		if (event.target === null) return; // terminate

		// check whether the current value and the previous are the same,
		// if so empty the value so it will uncheck the radio button.
		if (value === filteringOptions[name]) {
			filterHandler((previousState) => {
				return Object.assign({}, previousState, { [name]: '' });
			});
			return; // terminate the function
		}

		// if the program reaches here, that means we have to change some value in the state.
		filterHandler((previousState) => {
			return Object.assign({}, previousState, { [name]: value });
		});
	}

	// create unique ids for radio buttons
	const maleId = _.uniqueId('filter');
	const femaleId = _.uniqueId('filter');
	const genderlessId = _.uniqueId('filter');
	const unknownGenderId = _.uniqueId('filter');

	const aliveId = _.uniqueId('filter');
	const deadId = _.uniqueId('filter');
	const unknownStatusId = _.uniqueId('filter');

	return (
		<div className={appStyle['Filter']}>
			<div className={appStyle['Filter__input-text-group']}>
				<div className={appStyle['Filter__form-group']}>
					<input
						type="text"
						value={filteringOptions.name}
						name="name"
						onChange={handleInputChange}
						className={appStyle['Filter__text-input']}
						placeholder="Name"
						autoComplete="off"
					/>
					<label className={appStyle['Filter__form-label']}>Name</label>
				</div>

				<div className={appStyle['Filter__form-group']}>
					<input
						type="text"
						value={filteringOptions.species}
						name="species"
						onChange={handleInputChange}
						className={appStyle['Filter__text-input']}
						placeholder="Species"
						autoComplete="off"
					/>
					<label className={appStyle['Filter__form-label']}>Species</label>
				</div>

				<div className={appStyle['Filter__form-group']}>
					<input
						type="text"
						value={filteringOptions.type}
						name="type"
						onChange={handleInputChange}
						className={appStyle['Filter__text-input']}
						placeholder="Type"
						autoComplete="off"
					/>
					<label className={appStyle['Filter__form-label']}>Type</label>
				</div>
			</div>
			<div className={appStyle['Filter__radio-area']}>
				<div className={appStyle['Filter__radio-gender']}>
					<div>
						<label>Gender:</label>
					</div>
					<div>
						<div>
							<input
								type="radio"
								value="male"
								name="gender"
								id={maleId}
								onClick={handleRadioClick}
								checked={filteringOptions.gender === 'male' ? true : false}
							/>
							<label htmlFor={maleId}>Male</label>
						</div>
						<div>
							<input
								type="radio"
								value="female"
								name="gender"
								id={femaleId}
								onClick={handleRadioClick}
								checked={filteringOptions.gender === 'female' ? true : false}
							/>
							<label htmlFor={femaleId}>Female</label>
						</div>
						<div>
							<input
								type="radio"
								value="genderless"
								name="gender"
								id={genderlessId}
								onClick={handleRadioClick}
								checked={filteringOptions.gender === 'genderless' ? true : false}
							/>
							<label htmlFor={genderlessId}>Genderless</label>
						</div>
						<div>
							<input
								type="radio"
								value="unknown"
								name="gender"
								id={unknownGenderId}
								onClick={handleRadioClick}
								checked={filteringOptions.gender === 'unknown' ? true : false}
							/>
							<label htmlFor={unknownGenderId}>Unknown</label>
						</div>
					</div>
				</div>
				<div className={appStyle['Filter__radio-status']}>
					{/* Status options container */}
					<div>
						<label>Status:</label>
					</div>
					<div>
						<div>
							<input
								type="radio"
								value="alive"
								name="status"
								id={aliveId}
								onClick={handleRadioClick}
								checked={filteringOptions.status === 'alive' ? true : false}
							/>
							<label htmlFor={aliveId}>Alive</label>
						</div>
						<div>
							<input
								type="radio"
								value="dead"
								name="status"
								id={deadId}
								onClick={handleRadioClick}
								checked={filteringOptions.status === 'dead' ? true : false}
							/>
							<label htmlFor={deadId}>Dead</label>
						</div>
						<div>
							<input
								type="radio"
								value="unknown"
								name="status"
								id={unknownStatusId}
								onClick={handleRadioClick}
								checked={filteringOptions.status === 'unknown' ? true : false}
							/>
							<label htmlFor={unknownStatusId}>Unknown</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Filter.propTypes = {
	filteringOptions: PropTypes.shape({
		name: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
		species: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		gender: PropTypes.string.isRequired,
	}),

	filterHandler: PropTypes.func.isRequired,
};

export { Filter as default };
