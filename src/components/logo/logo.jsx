import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/logo.svg';

const Logo = ({ className }) => {
  return (
    <div className={`${className} logo`}>
      <img
        className="logo__image"
        src={logo}
        alt="Логотип сайта Guitar Shop"
        width="67"
        height="70"
      />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
