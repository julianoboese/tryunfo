import React from 'react';
import Input from './Input';
import Select from './Select';

function Form() {
  return (
    <form>
      <Input
        labelText="Nome"
        type="text"
        id="name"
        name="name"
        dataTestid="name-input"
      />
      <Input
        labelText="Description"
        type="textarea"
        id="description"
        name="description"
        dataTestid="description-input"
      />
      <Input
        labelText="Attr01"
        type="number"
        id="attr1"
        name="attr1"
        dataTestid="attr1-input"
      />
      <Input
        labelText="Attr02"
        type="number"
        id="attr2"
        name="attr2"
        dataTestid="attr2-input"
      />
      <Input
        labelText="Attr03"
        type="number"
        id="attr3"
        name="attr3"
        dataTestid="attr3-input"
      />
      <Input
        labelText="Imagem"
        type="text"
        id="image"
        name="image"
        dataTestid="image-input"
      />
      <Select />
      <Input
        labelText="Super Trybe Trunfo"
        type="checkbox"
        id="trunfo"
        name="trunfo"
        dataTestid="trunfo-input"
      />
      <button type="submit" data-testid="save-button">Salvar</button>
    </form>
  );
}

export default Form;
