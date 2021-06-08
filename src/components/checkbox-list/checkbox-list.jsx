import React from 'react';
import { FilterField } from '../../const';

const CheckboxList = ({ type, onChange, checkedItems, avalibleItems }) => {
  const items = FilterField[type];

  const isChecked = (value) => {
    return checkedItems.includes(String(value));
  };

  const isDisabled = (value) => {
    if (avalibleItems.length !== 0) {
      return !avalibleItems.some((item) => item === value);
    }
    return false;
  };

  return (
    <ul className="form__checkbox-list">
      {items.map((item, index) => (
        <li key={`${item.nameField}-${index}`} className="form__checkbox-item">
          <input
            className="form__checkbox-input visually-hidden"
            type="checkbox"
            name={item.nameField}
            id={item.nameField}
            value={item.value}
            onChange={onChange}
            checked={isChecked(item.value)}
            disabled={isDisabled(item.value)}
          />
          <label className="form__checkbox-lable" htmlFor={item.nameField}>
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
