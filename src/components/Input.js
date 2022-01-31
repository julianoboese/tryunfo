import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { labelText, type, name, value, isFilter, onInputChange, onFilterChange } = props;
  return (
    <div className={ `form-input ${name}` }>
      {!isFilter && <label htmlFor={ name }>{labelText}</label>}
      {type === 'textarea' ? <textarea
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ isFilter ? onFilterChange : onInputChange }
        data-testid={ isFilter ? 'name-filter' : `${name}-input` }
      /> : <input
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        placeholder={ name === 'image' && 'Digite o nome do Pokemon' }
        onChange={ isFilter ? onFilterChange : onInputChange }
        data-testid={ isFilter ? 'name-filter' : `${name}-input` }
      />}
    </div>
  );
}

Input.defaultProps = {
  isFilter: false,
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isFilter: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Input;
