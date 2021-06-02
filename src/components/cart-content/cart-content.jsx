import React from 'react';
import Basket from '../basket/basket';
import BreadcrumbNav from '../breadcrumb-nav/breadcrumb-nav';

const CartContent = () => {
  return (
    <main className="content content--basket">
      <div className="content__wrapper wrapper">
        <h2 className="content__header">Корзина</h2>
        <BreadcrumbNav className="content__breadcrumbs" />
        <Basket className="content__basket" />
      </div>
    </main>
  );
};

export default CartContent;
