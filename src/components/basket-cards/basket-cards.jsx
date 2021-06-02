import React from 'react';
import { useSelector } from 'react-redux';
import GuitarInfo from '../guitar-info/guitar-info';
import { ReactComponent as CloseIcon } from '../../img/close.svg';
import { ReactComponent as PlusIcon } from '../../img/plus.svg';
import { ReactComponent as MinusIcon } from '../../img/minus.svg';

const BasketCards = () => {
  const guitars = useSelector(({ data }) => data.guitars);

  return (
    <div className="basket__cards">
      {guitars.map((item, index) => (
        <article key={`${item.code}-${index}`} className="card-basket">
          <button className="card-basket__button-delete" type="button">
            <CloseIcon />
          </button>
          <GuitarInfo guitar={item} className="card-basket__info" />
          <p className="card-basket__price">17 500 ₽</p>
          <div className="card-basket__buttons">
            <button
              className="card-basket__button card-basket__button--decrement"
              type="button"
            >
              <PlusIcon />
            </button>
            <p className="card-basket__amount">1</p>
            <button
              className="card-basket__button card-basket__button--increment"
              type="button"
            >
              <MinusIcon />
            </button>
          </div>
          <p className="card-basket__order-price">17 500 ₽</p>
        </article>
      ))}
    </div>
  );
};

export default BasketCards;
