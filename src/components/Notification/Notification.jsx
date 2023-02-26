import PropTypes from 'prop-types';

import style from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={style.notifiText}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
