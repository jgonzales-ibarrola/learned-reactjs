import { create } from "zustand";

const useStorePokemon = create((set) => ({
	filter: "",
	selectedItem: null,
	pokemon: [],
	setFilter: (filter) =>
		set((state) => ({
			...state,
			filter,
		})),
	setSelectedItem: (selectedItem) =>
		set((state) => ({
			...state,
			selectedItem,
		})),
	setPokemon: (pokemon) =>
		set((state) => ({
			...state,
			pokemon,
		})),
}));

fetch("http://localhost:5173/pokemon.json")
	.then((res) => res.json())
	.then(pokemon => useStorePokemon.setState(state => ({
		...state,
		pokemon
	})));

export default useStorePokemon;
