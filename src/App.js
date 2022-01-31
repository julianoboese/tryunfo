import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import Filter from './components/Filter';
import CurrentCard from './components/CurrentCard';
import RemainingCards from './components/RemainingCards';
import './App.css';
import './style/AddCardSection.css';
import './style/Form.css';
import './style/Card.css';
import './style/DeckSection.css';
import './style/Filter.css';
import './style/Game.css';
import logo from './logo-poketrunfo.png';

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
      typedName: '',
      selectedRare: '',
      checkedTrunfo: false,
      imgUrl: '',
      isGame: false,
      shuffledDeck: [],
      currentCard: 0,
      showGame: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleChange({ target }) {
    this.setState(() => ({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }), () => {
      const { name, description, attr1, attr2, attr3, image, rare } = this.state;
      fetch(`https://pokeapi.co/api/v2/pokemon/${image.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => this.setState({
          imgUrl: data.sprites.other['official-artwork'].front_default,
        }))
        .catch(() => this.setState((previousState) => previousState));
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
      image, rare, trunfo, hasTrunfo, imgUrl } = this.state;
    this.setState((previousState) => ({
      deck: [...previousState.deck, {
        name,
        description,
        attr1,
        attr2,
        attr3,
        image,
        rare,
        trunfo,
        imgUrl,
      }],
      showGame: true,
    }), () => {
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
        imgUrl: '',
      });
    });
  }

  handleDelete({ target }) {
    const firstChar = 7;
    const removedCardName = target.id.slice(firstChar);
    this.setState((previousState) => ({
      deck: previousState.deck.filter((card) => card.name !== removedCardName),
      hasTrunfo: !previousState.deck.find((card) => card.name === removedCardName).trunfo,
    }), () => {
      const { deck } = this.state;
      if (deck.length === 0) {
        this.setState({ showGame: false });
      }
    });
  }

  handleFilterChange({ target }) {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  handleStartClick() {
    const sortBound = 0.5;
    this.setState((previousState) => ({
      shuffledDeck: previousState.deck.slice(0).sort(() => Math.random() - sortBound),
      isGame: true,
      currentCard: 0,
    }));
  }

  handleNextClick() {
    this.setState((previousState) => ({
      currentCard: previousState.currentCard + 1,
    }));
  }

  render() {
    const { name, description, attr1, attr2, attr3, image, rare, trunfo,
      buttonDisabled, hasTrunfo, deck, typedName, selectedRare, checkedTrunfo,
      imgUrl, isGame, shuffledDeck, currentCard, showGame } = this.state;
    const nameFilteredDeck = typedName
      ? deck.filter((card) => card.name.includes(typedName)) : deck;
    const selectFilteredDeck = selectedRare && selectedRare !== 'todas'
      ? nameFilteredDeck.filter((card) => card.rare === selectedRare) : nameFilteredDeck;
    const filteredDeck = checkedTrunfo
      ? deck.filter((card) => card.trunfo) : selectFilteredDeck;

    const lastCard = currentCard === shuffledDeck.length - 1;

    return (
      <>
        <header>
          <img src={ logo } alt="Logo do Poketrunfo" />
        </header>
        <section className="new-card">
          <section className="card-add">
            <h2>Adicionar nova carta</h2>
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
          </section>
          <section className="card-preview">
            <h2>Pré-visualização</h2>
            <Card
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ imgUrl }
              cardRare={ rare }
              cardTrunfo={ trunfo }
            />
          </section>
        </section>
        <section className="saved-cards">
          <section className="card-filter">
            <h2>Todas as cartas</h2>
            <p>Filtros de busca</p>
            <Filter
              typedName={ typedName }
              onTypedName={ this.handleFilterChange }
              selectedRare={ selectedRare }
              onSelectedRare={ this.handleFilterChange }
              checkedTrunfo={ checkedTrunfo }
              onCheckedTrunfo={ this.handleFilterChange }
            />
          </section>
          <section className="card-list">
            <CardList cardDeck={ filteredDeck } onCardDelete={ this.handleDelete } />
          </section>
        </section>
        {showGame
        && (
          <section className={ `game ${isGame && 'on-game'}` }>
            {
              !isGame
          && <button type="button" onClick={ this.handleStartClick }>Jogar</button>
            }
            <section className={ `gameplay ${lastCard && 'game-over'}` }>
              {
                isGame
              && <CurrentCard currentCard={ shuffledDeck[currentCard] } />
              }
              {
                isGame
              && <RemainingCards
                lastCard={ lastCard }
                onNextClick={ lastCard ? this.handleStartClick : this.handleNextClick }
              />
              }
            </section>
          </section>
        )}
      </>
    );
  }
}

export default App;
