import PropTypes from "prop-types";
import PokemonRow from "./pokemon-row";

import useStorePokemon from "../stores/useStorePokemon";

const PokemonTable = () => {
	const pokemon = useStorePokemon((state) => state.pokemon);
	const filter = useStorePokemon((state) => state.filter);
	const setSelectedItem = useStorePokemon((state) => state.setSelectedItem);

	return (
		<table width="100%">
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
				</tr>
			</thead>
			<tbody>
				{pokemon
					.filter((pokemon) =>
						pokemon.name.english
							.toLocaleLowerCase()
							.includes(filter.toLowerCase())
					)
					.slice(0, 20)
					.map((pokemon) => (
						<PokemonRow
							key={[pokemon.id, pokemon.name.english].join(":")}
							pokemon={pokemon}
							onSelect={(pokemon) =>
								setSelectedItem(pokemon)
							}
						/>
					))}
			</tbody>
		</table>
	);
};

PokemonTable.propTypes = {
	pokemon: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.shape({
				english: PropTypes.string,
			}),
			type: PropTypes.arrayOf(PropTypes.string),
		})
	),
	filter: PropTypes.string,
	setSelectedItem: PropTypes.func,
};

export default PokemonTable;
