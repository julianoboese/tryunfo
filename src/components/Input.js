import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { labelText, type, name, value, isFilter, onInputChange } = props;
  return (
    <div className={ `form-input ${name}` }>
      {!isFilter && <label htmlFor={ name }>{labelText}</label>}
      {type === 'textarea' ? <textarea
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ onInputChange }
        data-testid={ isFilter ? 'name-filter' : `${name}-input` }
      /> : <input
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        placeholder={ name === 'image' ? 'Digite o nome do Pokemon' : '' }
        onChange={ onInputChange }
        data-testid={ isFilter ? 'name-filter' : `${name}-input` }
      />}
    </div>
  );
}

Input.defaultProps = {
  labelText: '',
  isFilter: false,
};

Input.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isFilter: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
