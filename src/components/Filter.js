import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

function Filter(props) {
  const { typedName, onTypedName, selectedRare, onSelectedRare } = props;
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
        onInputChange={ onSelectedRare }
      />
    </div>
  );
}

Filter.propTypes = {
  typedName: PropTypes.string.isRequired,
  onTypedName: PropTypes.func.isRequired,
  selectedRare: PropTypes.string.isRequired,
  onSelectedRare: PropTypes.func.isRequired,
};

export default Filter;
