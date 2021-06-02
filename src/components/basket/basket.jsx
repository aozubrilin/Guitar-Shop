import React from 'react';
import BasketCards from '../basket-cards/basket-cards';
import BasketOrdering from '../basket-ordering/basket-ordering';

const Basket = ({ className }) => {
  return (
    <section className={`${className} basket`}>
      <form className="basket__form">
        <BasketCards />
        <BasketOrdering />
      </form>
    </section>
  );
};

export default Basket;
