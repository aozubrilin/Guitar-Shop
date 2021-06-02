import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as IconStar } from '../../img/star.svg';

const GuitarsList = ({ className }) => {
  const guitars = useSelector(({ data }) => data.guitars);

  return (
    <div className={`${className}`}>
      {guitars.map((item, index) => (
        <article key={`${item.article}-${index}`} className="card">
          <img
            className="card__image"
            src="img/electro1.png"
            width="68"
            height="190"
            alt="Гитара"
          />
          <div className="card__review">
            <ul className="card__stars-list">
              <li className="card__stars-item">
                <IconStar />
              </li>
              <li className="card__stars-item">
                <IconStar />
              </li>
              <li className="card__stars-item">
                <IconStar />
              </li>
              <li className="card__stars-item">
                <IconStar />
              </li>
              <li className="card__stars-item">
                <IconStar />
              </li>
            </ul>
            <span className="card__popularity">{item.popularity}</span>
          </div>
          <div className="card__info">
            <span className="card__name">{item.name}</span>
            <span className="card__price">{item.price} ₽</span>
          </div>
          <div className="card__buttons">
            <button className="card__button-details button" type="button">
              Подробнее
            </button>
            <button
              className="card__button-buy button button--orange"
              type="button"
            >
              Купить
            </button>
          </div>
          <div className="card__rating"></div>
        </article>
      ))}
    </div>
  );
};

export default GuitarsList;
