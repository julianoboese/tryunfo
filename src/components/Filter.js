import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

function Filter(props) {
  const { typedName, onTypedName } = props;
  return (
    <div>
      <Input
        labelText="Filtro de Nome"
        type="text"
        name="name-filter"
        value={ typedName }
        isFilter
        onFilterChange={ onTypedName }
      />
    </div>
  );
}

Filter.propTypes = {
  typedName: PropTypes.string.isRequired,
  onTypedName: PropTypes.func.isRequired,
};

export default Filter;
