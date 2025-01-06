import PropTypes from "prop-types";
import Button from '@mui/material/Button';

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button variant="contained" onClick={() => onSelect(pokemon)}>Select!</Button>
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


export default PokemonRow