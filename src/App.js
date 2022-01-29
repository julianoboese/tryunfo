import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      trunfo: false,
      buttonDisabled: true,
      deck: [],
      hasTrunfo: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange({ target }) {
    this.setState(() => ({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }), () => {
      const { name, description, attr1, attr2, attr3, image, rare } = this.state;
      const maxTotal = 210;
      const maxEach = 90;
      const firstCondition = name && description && image && rare;
      const secondCondition = parseInt(attr1, 10) + parseInt(attr2, 10)
        + parseInt(attr3, 10) <= maxTotal;
      const thirdCondition = attr1 <= maxEach && attr2 <= maxEach && attr3 <= maxEach;
      const fourthCondition = attr1 >= 0 && attr2 >= 0 && attr3 >= 0;

      this.setState(() => ({
        buttonDisabled: !(firstCondition && secondCondition
      && thirdCondition && fourthCondition),
      }));
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, description, attr1, attr2, attr3,
      image, rare, trunfo, deck, hasTrunfo } = this.state;
    this.setState({
      deck: [...deck, {
        name,
        description,
        attr1,
        attr2,
        attr3,
        image,
        rare,
        trunfo,
      }],
    }, () => {
      this.setState({
        name: '',
        description: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        image: '',
        rare: 'normal',
        hasTrunfo: trunfo || hasTrunfo,
        trunfo: false,
      });
    });
  }

  handleDelete({ target }) {
    const firstChar = 7;
    const removedCardName = target.id.slice(firstChar);
    this.setState((previousState) => ({
      deck: previousState.deck.filter((card) => card.name !== removedCardName),
      hasTrunfo: !previousState.deck.find((card) => card.name === removedCardName).trunfo,
    }));
  }

  render() {
    const { name, description, attr1, attr2, attr3,
      image, rare, trunfo, buttonDisabled, hasTrunfo, deck } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ buttonDisabled }
          onSaveButtonClick={ this.handleSubmit }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        <CardList cardDeck={ deck } onCardDelete={ this.handleDelete } />
      </>
    );
  }
}

export default App;
