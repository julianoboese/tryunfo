import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { value, onInputChange } = props;
  return (
    <div>
      <label htmlFor="rare">
        Raridade
        <select
          id="rare"
          name="rare"
          value={ value }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    </div>
  );
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Select;
