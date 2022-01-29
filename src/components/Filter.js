import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import InputCheck from './InputCheck';

function Filter(props) {
  const { typedName, onTypedName, selectedRare, onSelectedRare,
    checkedTrunfo, onCheckedTrunfo } = props;
  return (
    <div>
      <Input
        labelText="Filtro de Nome"
        type="text"
        name="typedName"
        value={ typedName }
        isFilter
        onFilterChange={ onTypedName }
      />
      <Select
        labelText="Filtro de Raridade"
        name="selectedRare"
        value={ selectedRare }
        isFilter
        onFilterChange={ onSelectedRare }
      />
      <InputCheck
        labelText="Super Trybe Trunfo"
        type="checkbox"
        name="checkedTrunfo"
        value={ checkedTrunfo }
        isFilter
        onFilterChange={ onCheckedTrunfo }
      />
    </div>
  );
}

Filter.propTypes = {
  typedName: PropTypes.string.isRequired,
  onTypedName: PropTypes.func.isRequired,
  selectedRare: PropTypes.string.isRequired,
  onSelectedRare: PropTypes.func.isRequired,
  checkedTrunfo: PropTypes.string.isRequired,
  onCheckedTrunfo: PropTypes.func.isRequired,
};

export default Filter;
