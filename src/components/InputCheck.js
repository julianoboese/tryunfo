import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { labelText, type, name, value, hasTrunfo, onInputChange } = props;
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
                onChange={ onInputChange }
                data-testid={ `${name}-input` }
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
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
