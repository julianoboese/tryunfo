import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { labelText, name, value, isFilter, onInputChange, onFilterChange } = props;
  return (
    <div className={ `form-select ${name}` }>
      {!isFilter && <label htmlFor={ name }>{labelText}</label>}
      <select
        id={ name }
        name={ name }
        value={ value }
        onChange={ isFilter ? onFilterChange : onInputChange }
        data-testid={ isFilter ? 'rare-filter' : `${name}-input` }
      >
        {isFilter && <option value="todas">Todos</option>}
        <option value="normal">Normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito Raro</option>
      </select>
    </div>
  );
}

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isFilter: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Select;
