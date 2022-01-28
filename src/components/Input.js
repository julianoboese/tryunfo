import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { labelText, type, id, name, dataTestid } = props;
  return (
    <div>
      <label htmlFor={ id }>
        {labelText}
        <input type={ type } id={ id } name={ name } data-testid={ dataTestid } />
      </label>
    </div>
  );
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Input;
