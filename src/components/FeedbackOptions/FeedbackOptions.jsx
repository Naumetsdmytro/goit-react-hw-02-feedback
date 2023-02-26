import PropTypes from 'prop-types';

import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        type="button"
        onClick={onLeaveFeedback}
        key={option}
        id={option}
        className={style.feedbackBtn}
      >
        {option}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
