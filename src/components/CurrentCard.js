import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CurrentCard(props) {
  const { currentCard } = props;
  return (
    <div className="current-card">
      <Card
        cardName={currentCard.name}
        cardDescription={currentCard.description}
        cardAttr1={currentCard.attr1}
        cardAttr2={currentCard.attr2}
        cardAttr3={currentCard.attr3}
        cardImage={currentCard.imgUrl}
        cardRare={currentCard.rare}
        cardTrunfo={currentCard.trunfo}
      />
    </div>
  );
}

CurrentCard.propTypes = {
  currentCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    attr1: PropTypes.string.isRequired,
    attr2: PropTypes.string.isRequired,
    attr3: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    rare: PropTypes.string.isRequired,
    trunfo: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CurrentCard;
