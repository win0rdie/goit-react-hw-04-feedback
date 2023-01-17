import { BtnFeedback } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <BtnFeedback
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </BtnFeedback>
      ))}
    </>
  );
};

FeedbackOptions.prorpTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
