import React from 'react';
import PropTypes from 'prop-types';
import Attr from './Attr';

function Card(props) {
  const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
    cardImage, cardRare, cardTrunfo } = props;

  return (
    <div
      className={ `outer-bound ${cardRare === 'raro' && 'silver'}
    ${cardRare === 'muito raro' && 'gold'}` }
    >
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
          <p data-testid="description-card">{cardDescription}</p>
          <div className="details">
            <Attr attrName="HP.." attrId="attr1" attrValue={ cardAttr1 } />
            <Attr attrName="ATK" attrId="attr2" attrValue={ cardAttr2 } />
            <Attr attrName="DEF" attrId="attr3" attrValue={ cardAttr3 } />
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
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
