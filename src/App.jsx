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

const pokemonReducer = (state, action) => {
	switch (action.type) {
		case "SET_FILTER":
			return {
				...state,
				filter: action.payload,
			};
		case "SET_SELECTED_ITEM":
			return {
				...state,
				selectedItem: action.payload,
			};
		case "SET_POKEMON":
			return {
				...state,
				pokemon: action.payload,
			};
		default:
			throw new Error("No Action.");
	}
};

function App() {
	const [state, dispatch] = React.useReducer(pokemonReducer, {
		filter: "",
		selectedItem: null,
		pokemon: [],
	});

	React.useEffect(() => {
		fetch("http://localhost:5173/pokemon.json")
			.then((res) => res.json())
			.then((data) =>
				dispatch({
					type: "SET_POKEMON",
					payload: data,
				})
			);
	}, [state.filter]);

	return (
		<main>
			<PokemonContext.Provider
				value={{
					state,
					dispatch,
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
