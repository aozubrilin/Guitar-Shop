import React from 'react';
import { ReactComponent as IconArrow } from '../../img/arrow.svg';

const Sorting = ({ className }) => {
  return (
    <div className={`${className} sort`}>
      <p className="sort__title">Сортировать:</p>
      <ul className="sort__list sort__list--type">
        <li className="sort__type-item">
          <a href="/">по цене</a>
        </li>
        <li className="sort__type-item">
          <a href="/">по популярности</a>
        </li>
      </ul>
      <ul className="sort__list sort__list--arrow">
        <li className="sort__type-item">
          <a href="/">
            <IconArrow />
          </a>
        </li>
        <li className="sort__type-item">
          <a href="/">
            <IconArrow />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sorting;
