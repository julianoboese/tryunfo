import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CardList(props) {
  const { cardDeck } = props;

  return (
    <div>
      {cardDeck.map((card) => (
        <Card
          key={ card.name }
          cardName={ card.name }
          cardDescription={ card.description }
          cardAttr1={ card.attr1 }
          cardAttr2={ card.attr2 }
          cardAttr3={ card.attr3 }
          cardImage={ card.image }
          cardRare={ card.rare }
          cardTrunfo={ card.trunfo }
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  cardDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
