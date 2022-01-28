import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { labelText, type, name, value, isChecked, onInputChange } = props;
  return (
    <div>
      <label htmlFor={ name }>
        {labelText}
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          checked={ isChecked }
          onChange={ onInputChange }
          data-testid={ `${name}-input` }
        />
      </label>
    </div>
  );
}

Input.defaultProps = {
  value: '',
  isChecked: false,
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
