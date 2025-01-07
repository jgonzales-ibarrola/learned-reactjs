import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import PokemonContext from "../pokemon-context";

const Input = styled.input`
	width: 100%;
	font-size: x-large;
	padding: 0.2rem;
`;

const PokemonFilter = () => {
	const {
		state: { filter },
		dispatch,
	} = React.useContext(PokemonContext);
	return (
		<Input
			type="text"
			placeholder="Search Name.."
			value={filter}
			onChange={(evt) =>
				dispatch({
					type: "SET_FILTER",
					payload: evt.target.value,
				})
			}
		/>
	);
};

PokemonFilter.propTypes = {
	filter: PropTypes.string,
	setFilter: PropTypes.func,
};

export default PokemonFilter;
