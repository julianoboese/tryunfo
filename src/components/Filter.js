import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import InputCheck from './InputCheck';

function Filter(props) {
  const { typedName, onTypedName, selectedRare, onSelectedRare,
    checkedTrunfo, onCheckedTrunfo } = props;
  return (
    <div className="filter-container">
      <Input
        type="text"
        name="typedName"
        value={ typedName }
        isFilter
        onInputChange={ onTypedName }
      />
      <Select
        name="selectedRare"
        value={ selectedRare }
        isFilter
        onInputChange={ onSelectedRare }
      />
      <InputCheck
        labelText="Super Trybe Trunfo"
        type="checkbox"
        name="checkedTrunfo"
        value={ checkedTrunfo }
        isFilter
        onInputChange={ onCheckedTrunfo }
      />
    </div>
  );
}

Filter.propTypes = {
  typedName: PropTypes.string.isRequired,
  onTypedName: PropTypes.func.isRequired,
  selectedRare: PropTypes.string.isRequired,
  onSelectedRare: PropTypes.func.isRequired,
  checkedTrunfo: PropTypes.bool.isRequired,
  onCheckedTrunfo: PropTypes.func.isRequired,
};

export default Filter;
