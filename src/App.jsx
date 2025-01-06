import "./App.css";
import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

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
					{Object.keys(base).map((key) => (
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

const Title = styled.h1`
	text-align: center;
`;
const TwoColumnsRow = styled.div`
	display: grid;
	grid-template-columns: 70% 30%;
	grid-column-gap: 1rem;
`;
const Input = styled.input`
	width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;
const Container = styled.div`
	width: 100%;
	margin: 20px auto;
	padding: 20px 40px;
`

function App() {
	const [filter, setFilter] = React.useState("");
	const [selectedItem, setSelectedItem] = React.useState(null);
	const [pokemon, setPokemon] = React.useState([]);

	React.useEffect(() => {
		fetch("http://localhost:5173/pokemon.json")
			.then((res) => res.json())
			.then((data) => setPokemon(data));
	}, [filter]);

	return (
		<main>
			<Container>
			<Title>Pokemon Search</Title>

<TwoColumnsRow>
	<div>
		<Input
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
</TwoColumnsRow>
			</Container>
		</main>
	);
}

export default App;
