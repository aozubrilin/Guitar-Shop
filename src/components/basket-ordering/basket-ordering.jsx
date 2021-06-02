import React from 'react';

const BasketOrdering = () => {
  return (
    <div className="basket__order">
      <div className="basket__promo">
        <h3 className="basket__promo-header">Промокод на скидку</h3>
        <p className="basket__promo-text">
          Введите свой промокод, если он у вас есть.
        </p>
        <div className="basket__promo-input-wrapper">
          <label htmlFor="promo-input" className="visually-hidden" />
          <input
            className="basket__promo-input"
            type="text"
            name="promo-input"
            id="promo-input"
          />
          <button className="basket__promo-button button" type="button">
            Применить купон
          </button>
        </div>
      </div>
      <div className="basket__total">
        <p className="basket__total-price">Всего: 47 000 ₽</p>
        <button
          className="basket__total-button button button--orange"
          type="button"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default BasketOrdering;
