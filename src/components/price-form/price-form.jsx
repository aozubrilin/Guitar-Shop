import React from 'react';

const PriceForm = () => {
  return (
    <div className="form__price">
      <label htmlFor="price-from" className="visually-hidden" />
      <input className="form__input" name="price-from" id="price-from" />

      <label htmlFor="price-to" className="visually-hidden" />
      <input className="form__input" name="price-to" id="price-to" />
    </div>
  );
};

export default PriceForm;
