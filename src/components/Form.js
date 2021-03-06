import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import InputCheck from './InputCheck';

function Form(props) {
  const {
    cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
    cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
    onInputChange, onSaveButtonClick,
  } = props;

  return (
    <div className="form-container">
      <form onSubmit={onSaveButtonClick}>
        <Input
          labelText="Nome"
          type="text"
          name="name"
          value={cardName}
          onInputChange={onInputChange}
        />
        <Input
          labelText="Descrição"
          type="textarea"
          name="description"
          value={cardDescription}
          onInputChange={onInputChange}
        />
        <Input
          labelText="HP"
          type="number"
          name="attr1"
          value={cardAttr1}
          onInputChange={onInputChange}
        />
        <Input
          labelText="ATK"
          type="number"
          name="attr2"
          value={cardAttr2}
          onInputChange={onInputChange}
        />
        <Input
          labelText="DEF"
          type="number"
          name="attr3"
          value={cardAttr3}
          onInputChange={onInputChange}
        />
        <Input
          labelText="Imagem"
          type="text"
          name="image"
          value={cardImage}
          onInputChange={onInputChange}
        />
        <Select
          labelText="Raridade"
          name="rare"
          value={cardRare}
          onInputChange={onInputChange}
        />
        <InputCheck
          labelText="Super Trybe Trunfo"
          type="checkbox"
          name="trunfo"
          value={cardTrunfo}
          hasTrunfo={hasTrunfo}
          onInputChange={onInputChange}
        />
        <button
          type="submit"
          disabled={isSaveButtonDisabled}
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
