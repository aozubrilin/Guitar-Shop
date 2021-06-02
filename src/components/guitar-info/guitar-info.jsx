import React from 'react';

const GuitarInfo = ({ className, guitar }) => {
  return (
    <div className={`${className} guitar-info`}>
      <img
        className="guitar-info__image"
        src="img/electro1.png"
        width="52"
        height="132"
        alt="Гитара"
      />
      <div className="guitar-info__info">
        <h3 className="guitar-info__header">
          {guitar.type} {guitar.name}
        </h3>
        <p className="guitar-info__code">Артикул: {guitar.code}</p>
        <p className="guitar-info__description">
          <span className="guitar-info__description-name">{guitar.type}</span>
          ,&nbsp;
          {guitar.stings} струнная
        </p>
      </div>
    </div>
  );
};

export default GuitarInfo;
