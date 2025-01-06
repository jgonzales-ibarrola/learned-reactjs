import "./App.css";
import pokemon from "../pokemon.json";
import PropTypes from "prop-types";

function PokemonRow({ pokemon }) {

	return (
		<tr>
			<td>{pokemon.name.english}</td>
			<td>{pokemon.type.join(", ")}</td>
		</tr>
	);
};

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    }),
    type: PropTypes.arrayOf(PropTypes.string)
  })
};

function App() {
	return (
		<main>
			<h1 className="title">Pokemon Search</h1>

			<div
				style={{
					margin: "auto",
					width: 800,
					paddingTop: "1rem",
				}}
			>
				<table width="100%">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						{pokemon.slice(0, 20).map((pokemon) => (
							<PokemonRow
                pokemon={pokemon}
								key={[pokemon.id, pokemon.name.english].join(
									":"
								)}
							/>
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
}

export default App;
