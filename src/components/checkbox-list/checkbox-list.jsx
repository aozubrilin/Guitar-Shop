import React from 'react';
import { FilterField } from '../../const';

const CheckboxList = ({ type }) => {
  const items = FilterField[type];

  return (
    <ul className="form__checkbox-list">
      {items.map((item, index) => (
        <li
          key={`${type}-${item.value}-${index}`}
          className="form__checkbox-item"
        >
          <input
            className="form__checkbox-input visually-hidden"
            type="checkbox"
            name={`${type}-${item.value}`}
            id={`${type}-${item.value}`}
            value={item.value}
            onChange=""
            checked=""
            disabled=""
          />
          <label
            className="form__checkbox-lable"
            htmlFor={`${type}-${item.value}`}
          >
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
