import React from 'react';
import CheckboxList from '../checkbox-list/checkbox-list';
import FormFieldset from '../form-fieldset/form-fieldset';
import PriceForm from '../price-form/price-form';
import { FiterType } from '../../const';

const Filter = () => {
  return (
    <section className="filter">
      <form className="filter__form form">
        <h3 className="form__title">Фильтр</h3>
        <FormFieldset title="Цена, ₽">
          <PriceForm />
        </FormFieldset>
        <FormFieldset title="Тип гитар">
          <CheckboxList type={FiterType.TYPE} />
        </FormFieldset>
        <FormFieldset title="Количество струн">
          <CheckboxList type={FiterType.STRINGS} />
        </FormFieldset>
      </form>
    </section>
  );
};

export default Filter;
