import PropTypes from 'prop-types';

import style from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={style.statisticsText}>Good: {good} </p>
      <p className={style.statisticsText}>Neutral: {neutral} </p>
      <p className={style.statisticsText}>Bad: {bad} </p>
      <p className={style.statisticsText}>Total: {total}</p>
      <p className={style.statisticsText}>
        Positive feedback: {positivePercentage}
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
