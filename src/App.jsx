import "./App.css";
import React from "react";
import styled from "@emotion/styled";

import PokemonInfo from "./components/pokemon-info";
import PokemonFilter from "./components/pokemon-filter";
import PokemonTable from "./components/pokemon-table";
import useStorePokemon from "./stores/useStorePokemon";

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

	return (
		<main>

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

		</main>
	);
}

export default App;
