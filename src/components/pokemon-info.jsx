import React from "react";

import PokemonContext from "../pokemon-context";

const PokemonInfo = () => {
	const { state: {selectedItem} } = React.useContext(PokemonContext);

	return selectedItem ? (
		<div>
			<h1>{selectedItem.name.english}</h1>
			<table>
				<thead>
					<tr>
						<th>Key</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(selectedItem.base).map((key) => (
						<tr key={key}>
							<td>{key}</td>
							<td>{selectedItem.base[key]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	) : null;
};

export default PokemonInfo;
