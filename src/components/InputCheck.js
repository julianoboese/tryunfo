import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { labelText, type, name, value, isFilter,
    hasTrunfo, onInputChange, onFilterChange } = props;
  return (
    <div>
      {
        hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label htmlFor={ name }>
              {labelText}
              <input
                type={ type }
                id={ name }
                name={ name }
                checked={ value }
                onChange={ isFilter ? onFilterChange : onInputChange }
                data-testid={ isFilter ? 'trunfo-filter' : `${name}-input` }
              />
            </label>
          )
      }
    </div>
  );
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  isFilter: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Input;
