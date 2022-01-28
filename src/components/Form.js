import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

function Form(props) {
  const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
    cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
    onInputChange, onSaveButtonClick } = props;

  return (
    <form onSubmit={ onSaveButtonClick }>
      <Input
        labelText="Nome"
        type="text"
        name="name"
        value={ cardName }
        onInputChange={ onInputChange }
      />
      <Input
        labelText="Description"
        type="textarea"
        name="description"
        value={ cardDescription }
        onInputChange={ onInputChange }
      />
      <Input
        labelText="Attr01"
        type="number"
        name="attr1"
        value={ cardAttr1 }
        onInputChange={ onInputChange }
      />
      <Input
        labelText="Attr02"
        type="number"
        name="attr2"
        value={ cardAttr2 }
        onInputChange={ onInputChange }
      />
      <Input
        labelText="Attr03"
        type="number"
        name="attr3"
        value={ cardAttr3 }
        onInputChange={ onInputChange }
      />
      <Input
        labelText="Imagem"
        type="text"
        name="image"
        value={ cardImage }
        onInputChange={ onInputChange }
      />
      <Select
        value={ cardRare }
        onInputChange={ onInputChange }
      />
      <Input
        labelText="Super Trybe Trunfo"
        type="checkbox"
        name="trunfo"
        isChecked={ cardTrunfo }
        onInputChange={ onInputChange }
      />
      <button
        type="submit"
        disabled={ isSaveButtonDisabled }
        data-testid="save-button"
      >
        Salvar

      </button>
    </form>
  );
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
