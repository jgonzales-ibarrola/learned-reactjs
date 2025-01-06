import "./App.css";
import React from "react";
import styled from "@emotion/styled";

import PokemonInfo from "./components/pokemon-info";
import PokemonFilter from "./components/pokemon-filter";
import PokemonTable from "./components/pokemon-table";
import PokemonContext from "./pokemon-context";

const Title = styled.h1`
	text-align: center;
`;
const TwoColumnsRow = styled.div`
	display: grid;
	grid-template-columns: 70% 30%;
	grid-column-gap: 1rem;
`;
const Container = styled.div`
	width: 100%;
	margin: 20px auto;
	padding: 20px 40px;
`;

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
			<PokemonContext.Provider
				value={{
					filter,
					selectedItem,
					pokemon,
					setFilter,
					setSelectedItem,
					setPokemon,
				}}
			>
				<Container>
					<Title>Pokemon Search</Title>

					<TwoColumnsRow>
						<div>
							<PokemonFilter />

							<PokemonTable />
						</div>

						<div>
							<PokemonInfo />
						</div>
					</TwoColumnsRow>
				</Container>
			</PokemonContext.Provider>
		</main>
	);
}

export default App;
