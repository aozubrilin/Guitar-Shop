import React from 'react';

const FormFieldset = ({ children, title }) => {
  return (
    <fieldset className="form__fieldset">
      <h3 className="form__title-item">{title}</h3>
      {children}
    </fieldset>
  );
};

export default FormFieldset;
