import React from 'react';
import PropTypes from 'prop-types';

function InputCheck(props) {
  const { labelText, type, name, value, isFilter,
    hasTrunfo, onInputChange } = props;
  return (
    <div className={ `form-check ${name}` }>
      {
        hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <>
              <input
                type={ type }
                id={ name }
                name={ name }
                checked={ value }
                onChange={ onInputChange }
                data-testid={ isFilter ? 'trunfo-filter' : `${name}-input` }
              />
              <label htmlFor={ name }>{labelText}</label>
            </>
          )
      }
    </div>
  );
}

InputCheck.defaultProps = {
  hasTrunfo: false,
  isFilter: false,
};

InputCheck.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  isFilter: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
};

export default InputCheck;
