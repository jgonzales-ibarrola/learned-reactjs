import "./App.css";
import pokemon from "../pokemon.json";
import PropTypes from "prop-types";
import React from "react";

const PokemonRow = ({ pokemon, onSelect }) => {
	return (
		<tr>
			<td>{pokemon.name.english}</td>
			<td>{pokemon.type.join(", ")}</td>
			<td>
				<button onClick={() => onSelect(pokemon)}>Select!</button>
			</td>
		</tr>
	);
};

PokemonRow.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.shape({
			english: PropTypes.string,
		}),
		type: PropTypes.arrayOf(PropTypes.string),
	}),
	onSelect: PropTypes.func,
};

const PokemonInfo = ({ name, base }) => {
	return (
		<div>
			<h1>{name.english}</h1>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
       <tbody>
        {Object.keys(base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))}
       </tbody>
      </table>
		</div>
	);
};

PokemonInfo.propTypes = {
	name: PropTypes.shape({
		english: PropTypes.string,
	}),
	base: PropTypes.shape({
		HP: PropTypes.number.isRequired,
		Attack: PropTypes.number.isRequired,
		Defense: PropTypes.number.isRequired,
		"Sp. Attack": PropTypes.number.isRequired,
		"Sp. Defense": PropTypes.number.isRequired,
		Speed: PropTypes.number.isRequired,
	}),
};

function App() {
	const [filter, setFilter] = React.useState("");
	const [selectedItem, setSelectedItem] = React.useState(null);

	return (
		<main>
			<h1 className="title">Pokemon Search</h1>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "70% 30%",
					gridColumnGap: "1rem",
				}}
			>
				<div>
					<input
						type="text"
						placeholder="Search Name.."
						value={filter}
						onChange={(evt) => setFilter(evt.target.value)}
					/>

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
										key={[
											pokemon.id,
											pokemon.name.english,
										].join(":")}
										pokemon={pokemon}
										onSelect={(pokemon) =>
											setSelectedItem(pokemon)
										}
									/>
								))}
						</tbody>
					</table>
				</div>

				<div>{selectedItem && <PokemonInfo {...selectedItem} />}</div>
			</div>
		</main>
	);
}

export default App;
