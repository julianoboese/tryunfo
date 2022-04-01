import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const {
    labelText, name, value, isFilter, onInputChange,
  } = props;
  return (
    <div className={`form-select ${name}`}>
      {!isFilter && <label htmlFor={name}>{labelText}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onInputChange}
        data-testid={isFilter ? 'rare-filter' : `${name}-input`}
      >
        {isFilter && <option value="todas">Todos</option>}
        <option value="normal">Normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito Raro</option>
      </select>
    </div>
  );
}

Select.defaultProps = {
  labelText: '',
  isFilter: false,
};

Select.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isFilter: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
};

export default Select;
