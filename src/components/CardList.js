import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CardList(props) {
  const { cardDeck, onCardDelete } = props;

  return (
    <>
      {cardDeck.map((card) => (
        <div key={card.name}>
          <div>
            <Card
              cardName={card.name}
              cardDescription={card.description}
              cardAttr1={card.attr1}
              cardAttr2={card.attr2}
              cardAttr3={card.attr3}
              cardImage={card.imgUrl}
              cardRare={card.rare}
              cardTrunfo={card.trunfo}
            />
          </div>
          <button
            type="button"
            id={`button-${card.name}`}
            onClick={onCardDelete}
            data-testid="delete-button"
          >
            Excluir
          </button>
        </div>
      ))}
    </>
  );
}

CardList.propTypes = {
  cardDeck: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    attr1: PropTypes.string,
    attr2: PropTypes.string,
    attr3: PropTypes.string,
    rare: PropTypes.string,
    trunfo: PropTypes.bool,
  })).isRequired,
  onCardDelete: PropTypes.func.isRequired,
};

export default CardList;
