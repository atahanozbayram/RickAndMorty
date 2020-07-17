import React from 'react';
import _ from 'lodash';

function Filter() {
	// create unique ids for radio buttons
	const maleId = _.uniqueId('filter');
	const femaleId = _.uniqueId('filter');
	const genderlessId = _.uniqueId('filter');
	const unknownGenderId = _.uniqueId('filter');

	const aliveId = _.uniqueId('filter');
	const deadId = _.uniqueId('filter');
	const unknownStatusId = _.uniqueId('filter');

	return (
		<div>
			<div>
				{/* input[type="text"] container */}
				<input type="text" /> {/* input for character name */}
				<input type="text" /> {/* input for species of the character */}
				<input type="text" /> {/* input for type */}
			</div>
			<div>
				{/* radio buttons container */}
				<div>
					{/* Gender options container*/}
					<div>
						<label>Gender:</label>
					</div>
					<div>
						<div>
							<input type="radio" value="male" name="gender" id={maleId} />
							<label for={maleId}>Male</label>
						</div>
						<div>
							<input type="radio" value="female" name="gender" id={femaleId} />
							<label for={femaleId}>Female</label>
						</div>
						<div>
							<input type="radio" value="genderless" name="gender" id={genderlessId} />
							<label for={genderlessId}>Genderless</label>
						</div>
						<div>
							<input type="radio" value="unknown" name="gender" id={unknownGenderId} />
							<label for={unknownGenderId}>Unknown</label>
						</div>
					</div>
				</div>
				<div>
					{/* Status options container */}
					<div>
						<label>Status:</label>
					</div>
					<div>
						<input type="radio" value="alive" name="status" id={aliveId} />
						<label for={aliveId}>Alive</label>
					</div>
					<div>
						<input type="radio" value="dead" name="status" id={deadId} />
						<label for={deadId}>Dead</label>
					</div>
					<div>
						<input type="radio" value="unknown" name="status" id={unknownStatusId} />
						<label for={unknownStatusId}>Unknown</label>
					</div>
				</div>
			</div>
			<div>
				<button>Search</button>
			</div>
		</div>
	);
}

export { Filter as default };
