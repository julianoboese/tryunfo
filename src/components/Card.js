import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
    cardImage, cardRare, cardTrunfo } = props;

  return (
    <div className="outer-bound">
      <div className="middle-bound">
        <div className="inner-bound">
          <h3 data-testid="name-card">{cardName}</h3>
          <div className="img-bound">
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />

          </div>
          <div className="details">
            <p data-testid="description-card">{cardDescription}</p>
            <h4 data-testid="attr1-card">{cardAttr1}</h4>
            <h4 data-testid="attr2-card">{cardAttr2}</h4>
            <h4 data-testid="attr3-card">{cardAttr3}</h4>
            <h5 data-testid="rare-card">{cardRare}</h5>
            {cardTrunfo && <h4 data-testid="trunfo-card">Super Trunfo</h4>}
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
