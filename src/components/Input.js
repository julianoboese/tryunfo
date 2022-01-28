import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { labelText, type, name, value, onInputChange } = props;
  return (
    <div>
      <label htmlFor={ name }>
        {labelText}
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          onChange={ onInputChange }
          data-testid={ `${name}-input` }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
