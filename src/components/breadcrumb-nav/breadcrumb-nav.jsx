import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbNav = ({ className }) => {
  return (
    <ul className={`${className} breadcrumbs`}>
      <li className="breadcrumbs__item">
        <Link to="#" className="breadcrumbs__link">
          Главная
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <Link to="#" className="breadcrumbs__link">
          Каталог
        </Link>
      </li>
    </ul>
  );
};

export default BreadcrumbNav;
